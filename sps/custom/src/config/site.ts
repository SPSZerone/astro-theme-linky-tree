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

export type Navigation = {
  path: string;
  label: string;
};

export const site = {
  theme: 'linky-tree',

  navEnable: false,
  homeSiteEnable: true,

  navigations: [
  ] satisfies Navigation[],

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
} as const;
