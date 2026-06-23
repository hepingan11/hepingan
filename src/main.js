import './style.css'
import { gsap } from 'gsap'
import createElement from 'lucide/dist/esm/createElement.mjs'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CodeXml,
  Eye,
  Globe2,
  Mail,
  MessageCircle,
} from 'lucide'

const makeSiteImage = ({ title, accent, secondary, pattern }) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#fffdf6"/>
          <stop offset="1" stop-color="${secondary}"/>
        </linearGradient>
        <filter id="soft"><feGaussianBlur stdDeviation="20"/></filter>
      </defs>
      <rect width="900" height="500" fill="url(#bg)"/>
      <circle cx="150" cy="100" r="105" fill="${accent}" opacity=".2" filter="url(#soft)"/>
      <circle cx="780" cy="390" r="140" fill="${secondary}" opacity=".7" filter="url(#soft)"/>
      ${
        pattern === 'notes'
          ? '<path d="M130 160h510M130 225h640M130 290h460M130 355h560" stroke="#263128" stroke-width="12" stroke-linecap="round" opacity=".42"/><rect x="118" y="112" width="650" height="300" rx="18" fill="none" stroke="#263128" stroke-width="5" opacity=".2"/>'
          : ''
      }
      ${
        pattern === 'apps'
          ? '<rect x="122" y="118" width="210" height="138" rx="18" fill="#fff" opacity=".72"/><rect x="356" y="118" width="420" height="138" rx="18" fill="#fff" opacity=".52"/><rect x="122" y="280" width="300" height="120" rx="18" fill="#fff" opacity=".6"/><rect x="446" y="280" width="330" height="120" rx="18" fill="#fff" opacity=".72"/>'
          : ''
      }
      ${
        pattern === 'code'
          ? '<path d="M300 150 180 250l120 100M600 150l120 100-120 100M492 128 408 372" fill="none" stroke="#263128" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" opacity=".42"/>'
          : ''
      }
      <text x="70" y="102" fill="#263128" font-family="Georgia, serif" font-size="42" font-weight="700">${title}</text>
      <path d="M70 126h170" stroke="${accent}" stroke-width="10" stroke-linecap="round"/>
    </svg>
  `
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const homepage = {
  people: [
    {
      name: '何平安',
      role: 'Hepingan',
      motto: '泪水打湿猪脚饭，又打湿了回锅肉',
      avatar: 'https://img-hepingan.oss-cn-hangzhou.aliyuncs.com/page1/avatar.jpg',
      avatarText: '平',
      accent: '#2f8f72',
      contacts: [
        { label: 'Email', value: '1641436566@qq.com', href: 'mailto:1641436566@qq.com', icon: Mail },
        { label: 'GitHub', value: 'Github @hepingan11', href: 'https://github.com/hepingan11', icon: CodeXml },
        { label: 'BiliBili', value: 'BiliBili @何平安啦', href: 'https://space.bilibili.com/443081814?spm_id_from=333.1007.0.0', icon: Globe2 },
      ],
    },
    {
      name: '鬼雾离',
      role: 'Guiwuli',
      motto: '夜晚的哭泣没有过🌃都是为了幸福',
      avatar: 'https://img-hepingan.oss-cn-hangzhou.aliyuncs.com/page1/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260608163127_199_2.jpg',
      avatarText: '伴',
      accent: '#d65f46',
      contacts: [
        { label: 'Email', value: '1973016127@qq.com', href: 'mailto:1973016127@qq.com', icon: Mail },
        { label: 'Telegram', value: 'Telegram @guiwuli11', href: 'https://t.me/guiwuli11', icon: MessageCircle },
        { label: '抖音', value: '抖音 @鬼雾离', href: 'https://www.douyin.com/user/MS4wLjABAAAA9RXamoTuzrO-3k9dPbQgKieXaEaT-ZHXaJqMfXHp4vUMGedg6dw7o_nJKO39FPFj?from_tab_name=main', icon: Globe2 }
      ],
    },
  ],
  sites: [
    {
      name: '天香园(博客)',
      url: 'https://ai.hepingan.top',
      href: 'https://ai.hepingan.top',
      summary: '技术博客和我的一些总结，以及你想了解我的更多',
      accent: '#2f8f72',
      // Replace image with any custom URL, imported asset, or generated data URL.
      image: 'https://img-hepingan.oss-cn-hangzhou.aliyuncs.com/page1/20260608172722731.png'
    },
    {
      name: '开源数字员工',
      url: 'https://github.com/hepingan11/Workflow-Chat',
      href: 'https://github.com/hepingan11/Workflow-Chat',
      summary: 'Openclaw与Dify、Codex的结合升级，多角色协作与LLM节点自动编排---下一代开源数字人系统，让每个人都能当老板',
      accent: '#d65f46',
      image: 'https://img2-hepinan.oss-cn-beijing.aliyuncs.com/picgo/20260531034731.png'
    },
    {
      name: 'API中转站',
      url: 'https://api.hepingan.top',
      href: 'https://api.hepingan.top',
      summary: '平时各种捣鼓+卡bug,GPT倍率低至0.1x,总能保持中转站持续使用，累计用户400+',
      accent: '#3f6fb5',
      image: 'https://img2-hepinan.oss-cn-beijing.aliyuncs.com/picgo/20260608180759.png'
    },
    {
      name: '鸡窝',
      url: 'http://clash.hepingan.top:8008',
      href: 'http://clash.hepingan.top:8008',
      summary: '服务器太多了，用哪吒监控搭个鸡窝,里面都是我的服务器',
      accent: '#b53fb3',
      image: 'https://img2-hepinan.oss-cn-beijing.aliyuncs.com/picgo/20260608180910.png'
    },
    {
      name: '模智盒(已下线)',
      url: 'http://8.137.103.102:9090/',
      href: 'http://8.137.103.102:9090/',
      summary: '时代的眼泪，2023年基于SpringAI、SpringCloud Ablibaba搭建的AI对话系统，Github源码:https://github.com/hepingan11/ModelBox',
      accent: '#b53fb3',
      image: 'https://img2-hepinan.oss-cn-beijing.aliyuncs.com/picgo/20260525003936.png'
    }
  ],
  notes: [
    { text: '什么？这两个人竟然是同一个人吗？', side: 'right' },
    { text: '梦想是研发出自己的产品，因为我只信得过自己...', side: 'left' },
    { text: '我曾自己开发过全能AIGC平台——《模智盒》(2024)、社区论坛类APP——《SuperPass》(2025.4)、创业社区小程序——《众创搭》(2025.11).....', side: 'left' },
    { text: '但是，好像都没有成功....', side: 'left' },
    { text: '上面的项目都已经开源，在hepingan11 Github里哦~', side: 'right' },
    { text: '有没有尝试往这两年很火的Agent方向发展？', side: 'right' },
    { type: 'sticker', src: 'https://img2-hepinan.oss-cn-beijing.aliyuncs.com/picgo/eyes.gif', alt: 'eyes', side: 'right' },
    { text: '有的呀，我在2025.6就开始学习了，从SpringAI/MCP/RAG到LangChain/Skill/Dify等，上面的开源数字员工和客服辅助AI不就是嘛，还有个自动简历匹配项目FastPosition', side: 'left' },
    { text: '不过有些项目是拿来面试用的哈哈哈', side: 'left' },
    { text: '听你说："一日外包人，终身外包情"，你经常接外包吗？', side: 'right' },
    { text: '大三下的时候就开始接了，第一批吃上vibe coding红利的人，当时单还太多了接不过来，我就自己开了家公司然后当外包中介去了，当时工作室有五六十号人呢~加上我自己之前的总营业额(一学期+暑假)快接近六七万吧', side: 'left' },
    { text: '不算特别多但至少不用找家里人要钱了', side: 'left' },
    { text: '最近才接完一两个合作，都是大单子的项目，都是一条龙服务，从设计到上线', side: 'left' },
    { text: '干外包最怕的是什么？', side: 'right' },
    { text: '最怕的就是做一半中途改需求呀！！！我缺个产品经理帮我敲定和对接需求', side: 'left' },
    { text: '中转站搞得怎么样', side: 'left' },
    { text: '中转站是我2026.5做的，一开始是想自己拿来反代的，随便宣传一下没想到用户还起来了，虽然收入就三位数', side: 'right' },
    { text: '天天研究怎么更省Token，还创了个OpenAI爆破小组，什么pp渠道卡Plus试用、Bug Team、Business Team优惠码、upi都搞过，最高峰一天蹬了1B token', side: 'right' },
    { type: 'sticker', src: 'https://img2-hepinan.oss-cn-beijing.aliyuncs.com/picgo/20260623020333.png', alt: 'eyes', side: 'right' },
    { text: '我看你抖音天天发些AI相关的，看来是真的想省Token'},
    { text: 'AI用得这么厉害，那你谈谈对码农的看法'},
    { type: 'sticker', src: 'https://img2-hepinan.oss-cn-beijing.aliyuncs.com/picgo/973f2455cfe86d04f85cc86978f08355.jpg', alt: 'eyes', side: 'left' },
    { text: '我认为AI时代Coding更看重的是Coding review、Debug、业务逻辑理解，当然最重要的还是一个好的Idea和行动力', side: 'right' },
    { text: '另外我自己平时没事的时候会去参加一些黑客松或比赛活动，比如我参加过的Monad Web3 Agent、Lets vision、MuShanghai Bittensor、Atomcode Agent Hackathon...', side: 'right' },
    { type: 'image', src: 'https://img-hepingan.oss-cn-hangzhou.aliyuncs.com/page1/155c3a3f403f9c5b4b1e19bde88c72bb_720.jpg', alt: 'eyes', side: 'right' },
    { text: '一方面参加这些可以得奖得钱，另一方面也能结识很多志同道合的朋友和增长自己的见识', side: 'right' },
    { text: '可以呀，那你平时除了计算机相关的还有什么兴趣爱好呢？', side: 'left' },
    { text: '我看你头像是流萤，你喜欢动漫吗？', side: 'left' },
    { text: '我喜欢在一个闲暇的周末出去旅游，想去远处，用相机去记录 | 光影无声 岁月如歌 |', side: 'right' },
    { text: '哈哈哈其实我不怎么看动漫就玩玩二游，我只是喜欢可爱的事物和人，二次元比较符合我的审美，喜欢撸猫撸狗', side: 'right' },
    { text: '毕竟代码和项目需求已经够冰冷了，还是希望有些可爱的事物和人来感化我', side: 'right' },
    { type: 'sticker', src: 'https://img-hepingan.oss-cn-hangzhou.aliyuncs.com/page1/142f1f665e1e1cfe828d36cc97285562.jpg', alt: 'eyes', side: 'right' },
    { text: '其实我是真不想宅，我喜欢去吃好吃的，去玩好玩的，去打卡没去过的地方，奈何一个人在外地上班没多少朋友，再加上有时候在干外包', side: 'right' },
    { text: '平时上班活也不多，摸鱼的时候就捣鼓这些AI了', side: 'right' },
    { text: 'How about you?', side: 'right' },
    { text: 'AI/IT research too', side: 'left' },
    { text: '关注一些理财、Web3、虚拟货币、嵌入式(机器人方向)、爱捣鼓爱折腾我好奇的事物', side: 'left' },
  ],
}

const iconToHtml = (Icon, className = 'icon') => {
  const element = createElement(Icon, { class: className, 'aria-hidden': 'true' })
  return element.outerHTML
}

const formatViewCount = (count) => Number(count).toLocaleString('zh-CN')

const updateViewCount = async () => {
  const counter = document.querySelector('.view-counter')
  const counterText = counter?.querySelector('span')

  if (!counter || !counterText) return

  try {
    const response = await fetch('/api/views', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    })

    if (!response.ok) throw new Error(`View counter request failed: ${response.status}`)

    const data = await response.json()
    const count = Number.parseInt(data.count, 10)

    if (!Number.isFinite(count)) throw new Error('Invalid view counter response')

    counter.setAttribute('aria-label', `访问 IP 数量 ${formatViewCount(count)}`)
    counterText.textContent = `浏览 ${formatViewCount(count)} 次`
  } catch (error) {
    console.error(error)
    counter.setAttribute('aria-label', '浏览次数暂不可用')
    counterText.textContent = '浏览 -- 次'
  }
}

const avatarMarkup = (person) =>
  person.avatar
    ? `<img src="${person.avatar}" alt="${person.name} 的头像" />`
    : `<div class="avatar-fallback" aria-hidden="true">
        <span>${person.avatarText}</span>
        <i></i>
      </div>`

const personCardMarkup = (person) => `
  <article class="person-card reveal tilt-card" style="--person-accent: ${person.accent}">
    <a class="avatar-wrap magnetic" href="${person.contacts[0].href}" target="_blank" rel="noreferrer" aria-label="${person.name} 的头像">
      ${avatarMarkup(person)}
    </a>
    <div class="person-copy">
      <p class="role">${person.role}</p>
      <h1>${person.name}</h1>
      <p class="person-motto">${person.motto}</p>
    </div>
    <div class="person-contact-list">
      ${person.contacts
        .map(
          (item) => `
            <a class="mini-contact magnetic" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${item.label}: ${item.value}">
              ${iconToHtml(item.icon)}
              <span>${item.value}</span>
            </a>
          `,
        )
        .join('')}
    </div>
  </article>
`

const normalizeMessage = (note) => {
  const message = typeof note === 'string' ? { text: note } : note
  const side = message.side === 'right' ? 'right' : 'left'
  const defaultPersonIndex = side === 'right' ? 1 : 0
  const personIndex = message.personIndex ?? defaultPersonIndex

  return {
    ...message,
    side,
    personIndex,
  }
}

const noteMessageMarkup = (message, index, messages) => {
  const person = homepage.people[message.personIndex] ?? homepage.people[0]
  const nextMessage = messages[index + 1]
  const isGroupEnd = !nextMessage || nextMessage.side !== message.side || nextMessage.personIndex !== message.personIndex
  const isImageMessage = message.type === 'image'
  const isStickerMessage = message.type === 'sticker'
  const bubbleClassName =
    isStickerMessage
      ? 'message-bubble message-sticker-bubble'
      : isImageMessage
        ? 'message-bubble message-image-bubble'
        : 'message-bubble'
  const bubbleContent = isStickerMessage
    ? `<img class="message-sticker" src="${message.src}" alt="${message.alt ?? '消息图片'}" loading="lazy" />`
    : isImageMessage
      ? `<button class="message-image-button" type="button" aria-label="放大查看图片"><img class="message-image" src="${message.src}" alt="${message.alt ?? '消息图片'}" loading="lazy" /></button>`
      : message.text

  return `
    <li class="message-item message-${message.side} ${isGroupEnd ? 'message-group-end' : 'message-group-middle'}" style="--message-accent: ${person.accent}">
      ${
        isGroupEnd
          ? `<img class="message-avatar" src="${person.avatar}" alt="${person.name} 的头像" loading="lazy" />`
          : '<span class="message-avatar-spacer" aria-hidden="true"></span>'
      }
      <span class="${bubbleClassName}">${bubbleContent}</span>
    </li>
  `
}

const notesMarkup = homepage.notes.map(normalizeMessage).map(noteMessageMarkup).join('')

const splashMarkup = () => `
  <div class="splash-screen" aria-hidden="true">
    <span class="splash-gate splash-gate-left"></span>
    <span class="splash-gate splash-gate-right"></span>
    <div class="splash-grid"></div>
    <div class="splash-core">
      <p class="splash-kicker">Personal Home</p>
      <div class="splash-logo">
        <img class="splash-avatar" src="${homepage.people[0].avatar}" alt="" />
        <i></i>
        <img class="splash-avatar" src="${homepage.people[1].avatar}" alt="" />
      </div>
      <h2>Hepingan / Guiwuli</h2>
      <div class="splash-progress"><span></span></div>
    </div>
  </div>
`

document.querySelector('#app').innerHTML = `
  ${splashMarkup()}
  <main class="home-shell">
    <div class="ambient" aria-hidden="true">
      <span class="beam beam-one"></span>
      <span class="beam beam-two"></span>
      <span class="grid-plane"></span>
    </div>

    <div class="view-counter reveal" aria-label="浏览次数加载中">
      ${iconToHtml(Eye)}
      <span>浏览 -- 次</span>
    </div>

    <section class="people-stage" aria-label="双人简介">
      ${homepage.people.map(personCardMarkup).join('')}
    </section>

    <section class="sites-stage" aria-label="共享网站列表">
      <button class="nav-arrow nav-prev magnetic" type="button" aria-label="上一个网站">
        ${iconToHtml(ArrowLeft)}
      </button>
      <div class="site-rail">
        ${homepage.sites
          .map(
            (site, index) => `
              <a class="site-card reveal tilt-card magnetic ${index === 0 ? 'is-active' : ''}" data-site-index="${index}" href="${site.href}" target="_blank" rel="noreferrer" style="--accent: ${site.accent}">
                <span class="site-image-frame">
                  <img class="site-image" src="${site.image}" alt="${site.name} 预览图" />
                </span>
                <span class="site-index">0${index + 1}</span>
                <strong>${site.name}</strong>
                <p>${site.summary}</p>
                <span class="site-link">
                  ${iconToHtml(Globe2)}
                  ${site.url}
                  ${iconToHtml(ArrowUpRight, 'icon arrow')}
                </span>
              </a>
            `,
          )
          .join('')}
      </div>
      <button class="nav-arrow nav-next magnetic" type="button" aria-label="下一个网站">
        ${iconToHtml(ArrowRight)}
      </button>
    </section>

    <section class="plain-list-stage" aria-label="补充说明">
      <ul>
        ${notesMarkup}
      </ul>
    </section>
  </main>
  <div class="image-preview" aria-hidden="true">
    <button class="image-preview-backdrop" type="button" aria-label="关闭图片预览"></button>
    <img class="image-preview-img" src="" alt="" />
  </div>
`

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
let activeSite = 0
const siteRail = document.querySelector('.site-rail')
const sitesStage = document.querySelector('.sites-stage')
let wheelVelocity = 0
let wheelFrame = null

const animateMessage = (message) => {
  if (!message || message.dataset.messageAnimated === 'true') return
  message.dataset.messageAnimated = 'true'

  if (reduceMotion) {
    gsap.set(message, { autoAlpha: 1, clearProps: 'visibility' })
    return
  }

  gsap.fromTo(message, {
    autoAlpha: 0,
    x: message.classList.contains('message-left') ? -42 : 42,
    y: 18,
    scale: 0.84,
    rotate: message.classList.contains('message-left') ? -2 : 2,
  }, {
    autoAlpha: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    duration: 0.42,
    ease: 'back.out(1.7)',
    clearProps: 'opacity,visibility,transform',
  })
}

const observeMessages = () => {
  const messages = [...document.querySelectorAll('.plain-list-stage li')]

  if (messages.length === 0) return

  gsap.set(messages, { autoAlpha: 0 })

  if (!('IntersectionObserver' in window)) {
    messages.forEach(animateMessage)
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        animateMessage(entry.target)
        observer.unobserve(entry.target)
      })
    },
    {
      threshold: 0.36,
      rootMargin: '0px 0px -8% 0px',
    },
  )

  messages.forEach((message) => observer.observe(message))
}

const imagePreview = document.querySelector('.image-preview')
const imagePreviewImage = document.querySelector('.image-preview-img')

const closeImagePreview = () => {
  if (!imagePreview || !imagePreviewImage) return

  imagePreview.classList.remove('is-open')
  imagePreview.setAttribute('aria-hidden', 'true')
  imagePreviewImage.removeAttribute('src')
  imagePreviewImage.alt = ''
}

document.querySelectorAll('.message-image-button').forEach((button) => {
  button.addEventListener('click', () => {
    const image = button.querySelector('.message-image')

    if (!imagePreview || !imagePreviewImage || !image) return

    imagePreviewImage.src = image.currentSrc || image.src
    imagePreviewImage.alt = image.alt
    imagePreview.classList.add('is-open')
    imagePreview.setAttribute('aria-hidden', 'false')
  })
})

document.querySelector('.image-preview-backdrop')?.addEventListener('click', closeImagePreview)

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeImagePreview()
})

gsap.defaults({
  duration: reduceMotion ? 0 : 0.78,
  ease: 'power3.out',
})

const setActiveSite = (nextIndex) => {
  const cards = [...document.querySelectorAll('.site-card')]
  activeSite = (nextIndex + cards.length) % cards.length
  cards.forEach((card, index) => card.classList.toggle('is-active', index === activeSite))

  const target = cards[activeSite]
  const targetLeft = target.offsetLeft - (siteRail.clientWidth - target.clientWidth) / 2

  if (!reduceMotion) {
    gsap.to(siteRail, {
      scrollLeft: targetLeft,
      duration: 0.62,
      ease: 'power3.inOut',
      overwrite: 'auto',
    })
    gsap.fromTo(
      target,
      { y: 12, scale: 0.985 },
      { y: 0, scale: 1, duration: 0.42, overwrite: 'auto' },
    )
  } else {
    siteRail.scrollLeft = targetLeft
  }
}

document.querySelector('.nav-prev').addEventListener('click', () => setActiveSite(activeSite - 1))
document.querySelector('.nav-next').addEventListener('click', () => setActiveSite(activeSite + 1))

siteRail.addEventListener('scroll', () => {
  const cards = [...document.querySelectorAll('.site-card')]
  const railCenter = siteRail.scrollLeft + siteRail.clientWidth / 2
  const closestIndex = cards.reduce((bestIndex, card, index) => {
    const bestCard = cards[bestIndex]
    const cardCenter = card.offsetLeft + card.clientWidth / 2
    const bestCenter = bestCard.offsetLeft + bestCard.clientWidth / 2
    return Math.abs(cardCenter - railCenter) < Math.abs(bestCenter - railCenter) ? index : bestIndex
  }, 0)

  activeSite = closestIndex
  cards.forEach((card, index) => card.classList.toggle('is-active', index === activeSite))
})

const tickWheelScroll = () => {
  if (Math.abs(wheelVelocity) < 0.35) {
    wheelVelocity = 0
    wheelFrame = null
    return
  }

  const maxScrollLeft = siteRail.scrollWidth - siteRail.clientWidth
  const nextScrollLeft = Math.max(0, Math.min(maxScrollLeft, siteRail.scrollLeft + wheelVelocity))
  siteRail.scrollLeft = nextScrollLeft
  wheelVelocity *= nextScrollLeft === 0 || nextScrollLeft === maxScrollLeft ? 0.38 : 0.86
  wheelFrame = requestAnimationFrame(tickWheelScroll)
}

sitesStage.addEventListener(
  'wheel',
  (event) => {
    if (siteRail.scrollWidth <= siteRail.clientWidth) return

    const rawDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
    const modeMultiplier = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? siteRail.clientWidth : 1
    const delta = rawDelta * modeMultiplier
    const maxScrollLeft = siteRail.scrollWidth - siteRail.clientWidth
    const canScrollLeft = delta < 0 && siteRail.scrollLeft > 0
    const canScrollRight = delta > 0 && siteRail.scrollLeft < maxScrollLeft

    if (!canScrollLeft && !canScrollRight) return
    event.preventDefault()

    if (reduceMotion) {
      siteRail.scrollLeft = Math.max(0, Math.min(maxScrollLeft, siteRail.scrollLeft + delta))
      return
    }

    wheelVelocity += delta * 0.72
    wheelVelocity = Math.max(-92, Math.min(92, wheelVelocity))

    if (!wheelFrame) {
      wheelFrame = requestAnimationFrame(tickWheelScroll)
    }
  },
  { passive: false },
)

document.querySelectorAll('.nav-arrow').forEach((button) => {
  const direction = button.classList.contains('nav-prev') ? -1 : 1

  button.addEventListener('pointerenter', () => {
    if (reduceMotion) return
    gsap.to(button, {
      x: direction * 8,
      scale: 1.08,
      duration: 0.32,
      ease: 'power3.out',
      overwrite: 'auto',
    })
    gsap.to(button.querySelector('.icon'), {
      x: direction * 3,
      duration: 0.32,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  })

  button.addEventListener('pointerleave', () => {
    gsap.to(button, {
      x: 0,
      scale: 1,
      duration: 0.48,
      ease: 'elastic.out(1, 0.42)',
      overwrite: 'auto',
    })
    gsap.to(button.querySelector('.icon'), {
      x: 0,
      duration: 0.42,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  })

  button.addEventListener('click', () => {
    if (reduceMotion) return
    gsap.fromTo(
      button,
      { scale: 0.94 },
      { scale: 1.08, duration: 0.34, ease: 'elastic.out(1, 0.35)', overwrite: 'auto' },
    )
  })
})

document.querySelectorAll('.avatar-wrap').forEach((avatar) => {
  avatar.addEventListener('pointerenter', () => {
    if (reduceMotion) return
    gsap.fromTo(
      avatar,
      { rotation: 0 },
      {
        rotation: 360,
        duration: 0.82,
        ease: 'power3.inOut',
        overwrite: 'auto',
      },
    )
  })
})

if (!reduceMotion) {
  const splashScreen = document.querySelector('.splash-screen')

  if (splashScreen) {
    gsap.set('.home-shell', { autoAlpha: 0, scale: 0.985 })

    gsap
      .timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => splashScreen.remove(),
      })
      .from('.splash-grid', { autoAlpha: 0, scale: 1.08, duration: 0.7 })
      .from('.splash-kicker', { autoAlpha: 0, y: 14, duration: 0.45 }, '-=0.34')
      .from('.splash-avatar', { autoAlpha: 0, y: 34, scale: 0.78, rotateY: 34, stagger: 0.11, duration: 0.64 }, '-=0.18')
      .from('.splash-logo i', { scaleX: 0, duration: 0.48, transformOrigin: 'center' }, '-=0.28')
      .from('.splash-core h2', { autoAlpha: 0, y: 12, duration: 0.42 }, '-=0.24')
      .to('.splash-progress span', { scaleX: 1, duration: 0.82, ease: 'power2.inOut' }, 0.22)
      .to('.splash-core', { scale: 0.96, autoAlpha: 0, duration: 0.38, ease: 'power2.in' }, '+=0.08')
      .to('.splash-gate-left', { xPercent: -106, duration: 0.68, ease: 'power4.inOut' }, '-=0.08')
      .to('.splash-gate-right', { xPercent: 106, duration: 0.68, ease: 'power4.inOut' }, '<')
      .to(splashScreen, { autoAlpha: 0, duration: 0.28 }, '-=0.18')
      .to('.home-shell', { autoAlpha: 1, scale: 1, duration: 0.56, clearProps: 'opacity,visibility,transform' }, '-=0.46')
      .from(
        '.reveal',
        {
          autoAlpha: 0,
          y: 24,
          scale: 0.985,
          stagger: 0.07,
          clearProps: 'transform,visibility',
        },
        '-=0.22',
      )
      .call(observeMessages)
  } else {
    gsap.from('.reveal', {
      autoAlpha: 0,
      y: 24,
      scale: 0.985,
      stagger: 0.07,
      clearProps: 'transform,visibility',
      onComplete: observeMessages,
    })
  }

  gsap.to('.beam-one', {
    x: 46,
    y: -14,
    rotation: 7,
    repeat: -1,
    yoyo: true,
    duration: 7,
    ease: 'sine.inOut',
  })

  gsap.to('.beam-two', {
    x: -34,
    y: 22,
    rotation: -8,
    repeat: -1,
    yoyo: true,
    duration: 8.5,
    ease: 'sine.inOut',
  })

  if (document.querySelector('.avatar-fallback i')) {
    gsap.to('.avatar-fallback i', {
      xPercent: 24,
      repeat: -1,
      yoyo: true,
      duration: 3.2,
      ease: 'sine.inOut',
    })
  }
} else {
  document.querySelector('.splash-screen')?.remove()
  observeMessages()
}

document.querySelectorAll('.magnetic:not(.nav-arrow):not(.avatar-wrap)').forEach((element) => {
  element.addEventListener('pointermove', (event) => {
    if (reduceMotion) return
    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2

    gsap.to(element, {
      x: x * 0.1,
      y: y * 0.1,
      duration: 0.35,
      overwrite: 'auto',
    })
  })

  element.addEventListener('pointerleave', () => {
    gsap.to(element, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.35)' })
  })
})

document.querySelectorAll('.tilt-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (reduceMotion) return
    const rect = card.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    gsap.to(card, {
      rotationY: x * 6,
      rotationX: y * -6,
      z: 12,
      duration: 0.32,
      overwrite: 'auto',
      transformPerspective: 900,
    })
  })

  card.addEventListener('pointerleave', () => {
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      z: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    })
  })
})

window.addEventListener('pointermove', (event) => {
  if (reduceMotion) return
  const x = (event.clientX / window.innerWidth - 0.5) * 14
  const y = (event.clientY / window.innerHeight - 0.5) * 14

  gsap.to('.grid-plane', {
    x,
    y,
    duration: 0.8,
    overwrite: 'auto',
  })
})

updateViewCount()
