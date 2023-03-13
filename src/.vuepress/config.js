const { description } = require('../../package')

module.exports = {
  base: '/vo-nhap/',
  /* thư mục output build, root là docs */
  dest: 'dist',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vở nháp',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Chung',
        link: '/general/',
      },
      {
        text: 'React',
        link: '/react/'
      },
      {
        text: 'Vue',
        link: '/vue/'
      },
      {
        text: 'JavaScript',
        link: '/javascript/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/general/': [
        {
          title: 'Chung',
          collapsable: true,
          children: [
            '',
            'lodash',
          ]
        }
      ],
      '/react/': [
        {
          title: 'React',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
      '/vue/': [
        {
          title: 'Vue',
          collapsable: true,
          children: [
            '',
            'composition_api',
            'vben'
          ]
        }
      ],
      '/javascript/': [
        {
          title: 'Vue',
          collapsable: true,
          children: [
            '',
            'array',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
