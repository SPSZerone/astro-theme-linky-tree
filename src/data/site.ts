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

/*

export const site = {
  seo: {
    title: 'John Doe @johndoe',
    ogTitle: 'John Doe',
    twitterTitle: 'John Doe',
    description:
      'Full Stack Developer, creando soluciones web desde 2015. Apasionado por React, Node.js y la tecnología open source ��',
    url: 'https://links.johndoe.dev',
    image: 'https://example.com/avatar-john-doe.png',
    siteName: 'John Doe',
    locale: 'en_US',
    twitterSite: '@johndoe',
    twitterCreator: '@johndoe',
  },

  featuredLink: {
    href: 'https://johndoe.dev/consulting',
    title: '1:1 Consulting',
    subtitle: 'Schedule a personalized session with me',
  },

  profile: {
    avatarSrc: 'https://s3.us-east-1.amazonaws.com/gndx.dev/linkytree-avatar.png',
    name: 'John Doe',
    handle: '@johndoe',
    bio: 'Full Stack Developer specializing in React and Node.js. Building modern and scalable web applications since 2015 🚀',
  },

  socialLinks: [
    {
      href: 'https://twitter.com/johndoe',
      ariaLabel: 'Twitter',
      icon: 'twitter',
    },
    {
      href: 'https://github.com/johndoe',
      ariaLabel: 'GitHub',
      icon: 'github',
    },
    {
      href: 'https://linkedin.com/in/johndoe',
      ariaLabel: 'LinkedIn',
      icon: 'linkedin',
    },
    {
      href: 'https://instagram.com/johndoe',
      ariaLabel: 'Instagram',
      icon: 'instagram',
    },
    {
      href: 'https://youtube.com/@johndoe',
      ariaLabel: 'YouTube',
      icon: 'youtube',
    },
  ] satisfies SiteSocialLink[],

  linkCards: [
    {
      href: 'https://johndoe.dev/blog',
      title: 'Blog',
      subtitle: 'Articles and tutorials about web development',
      icon: '📖',
      trailingIcon: '📖',
      style: 'background-color: rgba(250, 204, 21, 0.125); color: rgb(250, 204, 21);',
    },
    {
      href: 'https://johndoe.dev/podcast/',
      title: 'Podcast',
      subtitle: 'Conversations about technology and development',
      icon: '🎙️',
      trailingIcon: '🎙️',
      style: 'background-color: rgba(59, 130, 246, 0.125); color: rgb(59, 130, 246);',
    },
    {
      href: 'https://johndoe.dev/cursos',
      title: 'Courses',
      subtitle: 'Learn React and Node.js step by step',
      icon: '🎒',
      trailingIcon: '🎒',
      style: 'background-color: rgba(132, 204, 22, 0.125); color: rgb(132, 204, 22);',
    },
    {
      href: 'https://johndoe.dev/mediakit/',
      title: 'Sponsors (Media Kit)',
      subtitle: 'Collaborations and opportunities',
      icon: '🚀',
      trailingIcon: '🚀',
      style: 'background-color: rgba(244, 63, 94, 0.125); color: rgb(244, 63, 94);',
    },
  ] satisfies SiteLinkCard[],
} as const;
 */

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
    // handle: '@ https://me.seapianosnow.com/',
    // bio: '🧑‍💻 游戏全栈开发者 | 🎵古典音乐 🎹钢琴 🎻小提琴 大提琴 | 🪂 跳伞 🚴‍♀️骑行 🏃‍♂️跑步 🎾网球',
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
      href: 'https://darkness.me.seapianosnow.com',
      // title: 'Homepage style: Deep Space | 主页风格：深邃宇宙 (Modern Animations, Dark Aesthetics, Motion-Rich\nDark Tech / Sci-Fi, Futuristic, Cyber Neon, Deep Space / Starry, Immersive)',
      // subtitle: '现代动画，深色美学，动作丰富 | 暗黑科技，未来主义，赛博霓虹，深邃宇宙，沉浸式',
      title: 'Homepage style: Deep Space <br/> 主页风格：深邃宇宙',
      subtitle: '',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(59, 130, 246, 0.125); color: rgb(59, 130, 246);',
    },
    {
      href: 'https://anglefeint.me.seapianosnow.com',
      // title: 'Homepage style: Geek, Cyberpunk | 主页风格：赛博极客 (Language | Geek, Cyberpunk, Sci-Fi, Retro Terminal)',
      // subtitle: '语言 | 极客，赛博朋克，未来科幻，复古终端',
      title: 'Homepage style: Geek, Cyberpunk <br/> 主页风格：赛博极客',
      subtitle: '',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(132, 204, 22, 0.125); color: rgb(132, 204, 22);',
    },
    {
      href: 'https://twilight.me.seapianosnow.com',
      // title: 'Homepage style: Fresh & Aesthetic | 主页风格：清新唯美 (Language, Theme Color, Light/Dark Mode | Glassmorphism, Modern & Minimalist, Card-based Layout, Fresh & Aesthetic)',
      // subtitle: '语言，主题色，浅色/深色 | 毛玻璃拟态，现代简约，卡片式布局，清新唯美',
      title: 'Homepage style: Fresh & Aesthetic <br/> 主页风格：清新唯美',
      subtitle: '',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(250, 204, 21, 0.125); color: rgb(250, 204, 21);',
    },
    {
      href: 'https://astrogon.me.seapianosnow.com',
      // title: 'Homepage style: Soothing, Natural | 主页风格：治愈自然 (Light/Dark Mode | Glassmorphism, Soothing, Natural, Minimalist, Crisp, Modern, Functional)',
      // subtitle: '浅色/深色 | 毛玻璃特效，治愈，自然，极简，清爽，现代，实用',
      title: 'Homepage style: Soothing, Natural <br/> 主页风格：治愈自然',
      subtitle: '',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(244, 63, 94, 0.125); color: rgb(244, 63, 94);',
    },
  ] satisfies SiteLinkCard[],
} as const;
