export type SiteSocialLink = {
  href: string;
  ariaLabel: string;
  icon: string;
};

export type SiteLinkCard = {
  href: string;
  title: string;
  subtitle: string;
  icon: string;
  trailingIcon: string;
  style: string;
};

export const site = {
  seo: {
    title: 'William Chen - 陈威 - SPS',
    ogTitle: '',
    twitterTitle: '',
    description:
      'Full Stack Game Developer',
    url: 'https://me.seapianosnow.com/',
    image: import.meta.env.BASE_URL + 'avatar.png',
    siteName: 'William Chen - 陈威',
    locale: 'en_US',
    twitterSite: '',
    twitterCreator: '',
  },

  featuredLink: {
    href: 'https://me.seapianosnow.com/',
    title: '🧑‍💻 Full-Stack Game Developer',
    subtitle: '‍🎵 Classical Music 🎹 Piano 🎻 Violin Cello | 🪂 Skydiving 🚴‍♀️ Cycling 🏃‍♂️ Running 🎾 Tennis',
  },

  profile: {
    avatarSrc: import.meta.env.BASE_URL + 'avatar.png',
    name: 'William Chen - 陈威 - SPS',
    handle: '@ https://me.seapianosnow.com/',
    bio: '🧑‍💻 游戏全栈开发者 | 🎵古典音乐 🎹钢琴 🎻小提琴 大提琴 | 🪂 跳伞 🚴‍♀️骑行 🏃‍♂️跑步 🎾网球',
  },

  socialLinks: [
    {
      href: 'https://github.com/SPSZerone',
      ariaLabel: 'GitHub',
      icon: 'github',
    },
  ] satisfies SiteSocialLink[],

  linkCards: [
    {
      href: 'https://darkness.me.seapianosnow.com',
      title: 'Homepage style: Dark Aesthetics | 主页风格：暗黑极客 (Modern Animations, Dark Aesthetics, Motion-Rich\nDark Tech / Sci-Fi, Futuristic, Cyber Neon, Deep Space / Starry, Immersive)',
      subtitle: '现代动画，阴暗美学，动作丰富 | 暗黑科技风，未来主义，赛博霓虹，深邃宇宙，沉浸式',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(59, 130, 246, 0.125); color: rgb(59, 130, 246);',
    },
    {
      href: 'https://anglefeint.me.seapianosnow.com',
      title: 'Homepage style: Geek, Cyberpunk | 主页风格：赛博极客 (Language | Geek, Cyberpunk, Sci-Fi, Retro Terminal)',
      subtitle: '语言 | 极客，赛博朋克，未来科幻，复古终端',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(132, 204, 22, 0.125); color: rgb(132, 204, 22);',
    },
    {
      href: 'https://twilight.me.seapianosnow.com',
      title: 'Homepage style: Fresh & Aesthetic | 主页风格：清新唯美 (Language, Theme Color, Light/Dark Mode | Glassmorphism, Modern & Minimalist, Card-based Layout, Fresh & Aesthetic)',
      subtitle: '语言，主题色，浅色/深色 | 毛玻璃拟态，现代简约，卡片式布局，清新唯美',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(250, 204, 21, 0.125); color: rgb(250, 204, 21);',
    },
    {
      href: 'https://astrogon.me.seapianosnow.com',
      title: 'Homepage style: Soothing, Natural | 主页风格：治愈自然 (Light/Dark Mode | Glassmorphism, Soothing, Natural, Minimalist, Crisp, Modern, Functional)',
      subtitle: '浅色/深色 | 毛玻璃特效，治愈，自然，极简，清爽，现代，实用',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(244, 63, 94, 0.125); color: rgb(244, 63, 94);',
    },
  ] satisfies SiteLinkCard[],
} as const;
