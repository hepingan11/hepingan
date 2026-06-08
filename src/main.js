import './style.css'
import { gsap } from 'gsap'
import createElement from 'lucide/dist/esm/createElement.mjs'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CodeXml,
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
      motto: '用代码铸造自己的赛博乌托邦',
      avatar: 'https://img-hepingan.oss-cn-hangzhou.aliyuncs.com/page1/avatar.jpg',
      avatarText: '平',
      accent: '#2f8f72',
      contacts: [
        { label: 'Email', value: '1641436566@qq.com', href: 'mailto:1641436566@qq.com', icon: Mail },
        { label: 'GitHub', value: 'Github @hepingan11', href: 'https://github.com/hepingan11', icon: CodeXml },
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
      image: makeSiteImage({
        title: 'Blog',
        accent: '#2f8f72',
        secondary: '#dff2e8',
        pattern: 'notes',
      }),
    },
    {
      name: '开源数字员工',
      url: 'https://github.com/hepingan11/Workflow-Chat',
      href: 'https://github.com/hepingan11/Workflow-Chat',
      summary: 'Openclaw与Dify、Codex的结合升级，多角色协作与LLM节点自动编排---下一代开源数字人系统，让每个人都能当老板',
      accent: '#d65f46',
      image: makeSiteImage({
        title: 'Workflow Chat',
        accent: '#d65f46',
        secondary: '#ffe4d8',
        pattern: 'apps',
      }),
    },
    {
      name: 'API中转站',
      url: 'https://api.hepingan.top',
      href: 'https://api.hepingan.top',
      summary: '平时各种捣鼓+卡bug,GPT倍率限时0.001x',
      accent: '#3f6fb5',
      image: makeSiteImage({
        title: 'Guiwuli API',
        accent: '#3f6fb5',
        secondary: '#e3ecff',
        pattern: 'code',
      }),
    },
    {
      name: '鸡窝',
      url: 'http://clash.hepingan.top',
      href: 'http://clash.hepingan.top',
      summary: '服务器太多了，用哪吒监控搭个鸡窝',
      accent: '#b53fb3',
      image: makeSiteImage({
        title: 'Clash Dashboard',
        accent: '#b53fa7',
        secondary: '#e3ecff',
        pattern: 'code',
      }),
    },
    {
      name: '模智盒',
      url: 'http://8.137.103.102:9090/',
      href: 'http://8.137.103.102:9090/',
      summary: '时代的眼泪，2023年基于SpringAI、SpringCloud Ablibaba搭建的AI对话系统，Github源码:https://github.com/hepingan11/ModelBox',
      accent: '#b53fb3',
      image: makeSiteImage({
        title: 'ModelBox',
        accent: '#b53fa7',
        secondary: '#e3ecff',
        pattern: 'code',
      }),
    }
  ],
}

const iconToHtml = (Icon, className = 'icon') => {
  const element = createElement(Icon, { class: className, 'aria-hidden': 'true' })
  return element.outerHTML
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
    <a class="avatar-wrap magnetic" href="${person.contacts[0].href}" aria-label="${person.name} 的头像">
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
            <a class="mini-contact magnetic" href="${item.href}" aria-label="${item.label}: ${item.value}">
              ${iconToHtml(item.icon)}
              <span>${item.value}</span>
            </a>
          `,
        )
        .join('')}
    </div>
  </article>
`

document.querySelector('#app').innerHTML = `
  <main class="home-shell">
    <div class="ambient" aria-hidden="true">
      <span class="beam beam-one"></span>
      <span class="beam beam-two"></span>
      <span class="grid-plane"></span>
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
  </main>
`

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
let activeSite = 0
const siteRail = document.querySelector('.site-rail')
const sitesStage = document.querySelector('.sites-stage')
let wheelVelocity = 0
let wheelFrame = null

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
  gsap.from('.reveal', {
    autoAlpha: 0,
    y: 24,
    scale: 0.985,
    stagger: 0.07,
    clearProps: 'transform,visibility',
  })

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
