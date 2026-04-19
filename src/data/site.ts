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
      subtitle: 'Select Language, Change Theme Color, Light/Dark Mode',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(250, 204, 21, 0.125); color: rgb(250, 204, 21);',
    },
    {
      href: 'https://darkness.me.seapianosnow.com',
      title: 'Theme - Darkness',
      subtitle: '',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(59, 130, 246, 0.125); color: rgb(59, 130, 246);',
    },
    {
      href: 'https://astrogon.me.seapianosnow.com',
      title: 'Theme - Astrogon',
      subtitle: '',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(132, 204, 22, 0.125); color: rgb(132, 204, 22);',
    },
    {
      href: 'https://anglefeint.me.seapianosnow.com',
      title: 'Theme - Anglefeint',
      subtitle: '',
      icon: '',
      trailingIcon: '',
      style: 'background-color: rgba(244, 63, 94, 0.125); color: rgb(244, 63, 94);',
    },
  ] satisfies SiteLinkCard[],
} as const;
