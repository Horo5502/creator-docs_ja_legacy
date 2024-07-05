import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VRChat CreatorDocs非公式日本語翻訳',
  tagline: 'Learn, create and share using our tools and documentation.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://horo5502.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/creator-docs_ja/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Horo5502', // Usually your GitHub org/user name.
  projectName: 'creator-docs_ja', // Usually your repo name.

  // !!!
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true
        },
        blog: {
          path: 'releases',
          routeBasePath: 'releases',
          blogTitle: 'VRChat SDK Releases',
          blogDescription: 'The latest VRChat SDK releases and patch notes.',
          showReadingTime: false,
          blogSidebarTitle: 'History',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-EWZ9D3QY7X',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'translationnotyet',
      content:
          '<b>このドキュメントは鋭意翻訳中です。正確な情報は英語版をご覧ください。</b>',
      backgroundColor: '#21af90',
      textColor: '#000',
      isCloseable: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: 'VRChat CreatorDocs非公式日本語翻訳',
      logo: {
        alt: 'VRChat logo_ja',
        src: 'img/logo.png',
      },
      items: [
        {to: '/worlds', label: 'Worlds', position: 'left'},
        {to: '/avatars', label: 'Avatars', position: 'left'},
        {to: '/about-this-site', label: 'このサイトについて', position: 'left'},
        // {to: '/releases', label: 'Releases', position: 'left'},
        {to: '/worlds/udonsharp', label: 'UdonSharp', position: 'right'},
        {to: '/vcc', label: 'Creator Companion', position: 'right'},
        {to: '/clientsim', label: 'ClientSim', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          // title: 'Docs',
          title: 'ドキュメント',
          items: [
            {to: 'worlds', label: 'Worlds'},
            {to: 'avatars', label: 'Avatars'},
          ],
        },
        {
          // title: 'Tools',
          title: 'ツール',
          items: [
            {to: '/worlds/udonsharp', label: 'UdonSharp'},
            {to: '/vcc', label: 'Creator Companion'},
            {to: '/clientsim', label: 'ClientSim'},
          ],
        },
        {
          // title: 'Community',
          title: 'コミュニティ',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/vrchat',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/vrchat',
            },
          ],
        },
        {
          // title: 'More',
          title: 'その他',
          items: [
            // {
            //   label: 'Releases',
            //   to: '/releases',
            // },
            {
              label: 'プライバシーポリシー',
              to: '/privacy-policy'
            },
            {
              label: 'このサイトのGitHub',
              href: 'https://github.com/horo5502/creator-docs_ja'
            }
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
