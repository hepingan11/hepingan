import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from 'redis'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const distDir = join(__dirname, 'dist')

const port = Number.parseInt(process.env.PORT ?? '3000', 10)
const redisHost = process.env.REDIS_HOST ?? '8.137.103.102'
const redisPort = Number.parseInt(process.env.REDIS_PORT ?? '6379', 10)
const redisDatabase = Number.parseInt(process.env.REDIS_DB ?? '1', 10)
const redisPassword = process.env.REDIS_PASSWORD ?? '1234'
const viewIpSetKey = process.env.REDIS_VIEW_IP_SET_KEY ?? 'hepingan:view:ips'

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.webp': 'image/webp',
}

const redis = createClient({
  socket: { host: redisHost, port: redisPort },
  database: redisDatabase,
  password: redisPassword,
})

redis.on('error', (error) => {
  console.error('Redis error:', error.message)
})

const redisReady = redis.connect()

const normalizeIp = (value) => {
  if (!value || typeof value !== 'string') return ''
  return value.trim().replace(/^::ffff:/, '')
}

const getClientIp = (req) => {
  const forwardedFor = req.headers['x-forwarded-for']
  const forwardedIp = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor?.split(',')[0]
  return normalizeIp(forwardedIp ?? req.socket?.remoteAddress)
}

const sendJson = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  })
  res.end(JSON.stringify(data))
}

const handleViewsApi = async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'POST') {
    sendJson(res, 405, { message: 'Method not allowed' })
    return
  }

  try {
    await redisReady

    if (req.method === 'POST') {
      const ip = getClientIp(req)
      if (!ip) {
        sendJson(res, 400, { message: 'Unable to identify client ip' })
        return
      }

      await redis.sAdd(viewIpSetKey, ip)
    }

    const count = await redis.sCard(viewIpSetKey)
    sendJson(res, 200, { count })
  } catch (error) {
    console.error('View counter error:', error)
    sendJson(res, 503, { message: 'View counter is unavailable' })
  }
}

const resolveStaticPath = async (pathname) => {
  const decodedPath = decodeURIComponent(pathname)
  const requestedPath = decodedPath === '/' ? '/index.html' : decodedPath
  const filePath = normalize(join(distDir, requestedPath))

  if (!filePath.startsWith(distDir)) {
    return null
  }

  try {
    const fileStat = await stat(filePath)
    if (fileStat.isFile()) return filePath
  } catch {
    return join(distDir, 'index.html')
  }

  return join(distDir, 'index.html')
}

const serveStatic = async (req, res, pathname) => {
  const filePath = await resolveStaticPath(pathname)

  if (!filePath) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }

  const contentType = mimeTypes[extname(filePath)] ?? 'application/octet-stream'
  res.writeHead(200, { 'Content-Type': contentType })
  createReadStream(filePath).pipe(res)
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`)

  if (url.pathname === '/health') {
    sendJson(res, 200, { ok: true })
    return
  }

  if (url.pathname === '/api/views') {
    await handleViewsApi(req, res)
    return
  }

  await serveStatic(req, res, url.pathname)
})

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
