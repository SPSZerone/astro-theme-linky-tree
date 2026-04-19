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
    title: 'William Chen - 陈威',
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
    href: '',
    title: '',
    subtitle: '',
  },

  profile: {
    avatarSrc: import.meta.env.BASE_URL + 'avatar.png',
    name: 'William Chen - 陈威',
    handle: '',
    bio: '',
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
      href: 'https://twilight.me.seapianosnow.com',
      title: 'Theme - Twilight',
      subtitle: 'Language, Theme Color, Light/Dark Mode\nGlassmorphism, Modern & Minimalist, Card-based Layout, Fresh & Aesthetic'
            + '\n语言，主题色，浅色/深色\n毛玻璃拟态，现代简约，卡片式布局，清新唯美',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(250, 204, 21, 0.125); color: rgb(250, 204, 21);',
    },
    {
      href: 'https://darkness.me.seapianosnow.com',
      title: 'Theme - Darkness',
      subtitle: 'Modern Animations, Dark Aesthetics, Motion-Rich\nDark Tech / Sci-Fi, Futuristic, Cyber Neon, Deep Space / Starry, Immersive'
            + '\n现代动画，阴暗美学，动作丰富\n暗黑科技风，未来主义，赛博霓虹，深邃宇宙，沉浸式',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(59, 130, 246, 0.125); color: rgb(59, 130, 246);',
    },
    {
      href: 'https://astrogon.me.seapianosnow.com',
      title: 'Theme - Astrogon',
      subtitle: 'Language | Geek, Cyberpunk, Sci-Fi, Retro Terminal'
          + '\n语言 | 极客，赛博朋克，未来科幻，复古终端',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(132, 204, 22, 0.125); color: rgb(132, 204, 22);',
    },
    {
      href: 'https://anglefeint.me.seapianosnow.com',
      title: 'Theme - Anglefeint',
      subtitle: 'Light/Dark Mode | Glassmorphism, Soothing, Natural, Minimalist, Crisp, Modern, Functional'
          + '\n浅色/深色 | 毛玻璃特效，治愈，自然，极简，清爽，现代，实用',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(244, 63, 94, 0.125); color: rgb(244, 63, 94);',
    },
  ] satisfies SiteLinkCard[],
} as const;
