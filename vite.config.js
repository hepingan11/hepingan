import { defineConfig } from 'vite'
import { createClient } from 'redis'

function viewsApiPlugin() {
  let redis
  let redisReady

  const redisHost = process.env.REDIS_HOST ?? '8.137.103.102'
  const redisPort = Number.parseInt(process.env.REDIS_PORT ?? '6379', 10)
  const redisDatabase = Number.parseInt(process.env.REDIS_DB ?? '1', 10)
  const redisPassword = process.env.REDIS_PASSWORD ?? '1234'
  const viewIpSetKey = process.env.REDIS_VIEW_IP_SET_KEY ?? 'hepingan:view:ips'

  const normalizeIp = (value) => {
    if (!value || typeof value !== 'string') return ''
    return value.trim().replace(/^::ffff:/, '')
  }

  const getClientIp = (req) => {
    const forwardedFor = req.headers['x-forwarded-for']
    const forwardedIp = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor?.split(',')[0]
    return normalizeIp(forwardedIp ?? req.socket?.remoteAddress)
  }

  return {
    name: 'views-api',
    configureServer(server) {
      redis = createClient({
        socket: { host: redisHost, port: redisPort },
        database: redisDatabase,
        password: redisPassword,
      })
      redis.on('error', (error) => console.error('Redis error:', error.message))
      redisReady = redis.connect()

      server.middlewares.use('/api/views', async (req, res) => {
        try {
          await redisReady

          if (req.method === 'POST') {
            const ip = getClientIp(req)
            if (!ip) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ message: 'Unable to identify client ip' }))
              return
            }
            await redis.sAdd(viewIpSetKey, ip)
          }

          const count = await redis.sCard(viewIpSetKey)
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Cache-Control', 'no-store')
          res.end(JSON.stringify({ count }))
        } catch (error) {
          console.error('View counter error:', error)
          res.statusCode = 503
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ message: 'View counter is unavailable' }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [viewsApiPlugin()],
})
