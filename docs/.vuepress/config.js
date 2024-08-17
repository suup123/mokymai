const { description } = require('../../package')

module.exports = {

  publicPath: process.env.NODE_ENV === "production" ? "/mokymai/" : "/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'IT Mokymai',
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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'icon', href: '/logo.png' }] // favicon
    // ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-XDVTG3JS66' }],
    // ['script', {}, `window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'G-XDVTG3JS66');`]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    //repo: '/mokymai/',
    // repoLabel: 'Contribute!',
    docsDir: 'docs',
    smoothScroll: true,
    nav: [
      { text: 'Pradžia', link: '/' },
      {
        text: 'Programavimas',
        items: [
          { text: 'Python', link: '/programavimas-python/' },
          //{ text: 'C++', link: '/programavimas-cpp/' },
          //{ text: 'Golang', link: '/programavimas-go/' },
        ]
      },
      {
        text: 'Front-end pradmenys',
        items: [
          { text: 'HTML', link: '/html/' },
          { text: 'CSS', link: '/css/' },
        ]
      },
      { text: 'Pasiūlymai', link: '/pasiulymai/' },
      { text: 'Apie mus',
        items: [
          { text: 'Tikslas', link: '/tikslas/' },
          { text: 'Kontaktai', link: '/kontaktai/' },
        ]
      },
    ],
    sidebar: {
      '/programavimas-python/': [
        {
          title: 'Programavimas Python',
          children: [
            '/programavimas-python/',
          ]
        },
        {
          title: 'Python Įvadas',
          children: [
            '/programavimas-python/python-ivadas/',
          ]
        },
        {
          title: 'Pagrindinės operacijos',
          children: [
            '/programavimas-python/pagrindines-operacijos/',
          ]
        },
        {
          title: 'Duomenų tipai',
          children: [
            '/programavimas-python/duomenu-tipai/',
          ]
        },
        {
          title: 'Valdymo struktūros',
          children: [
            '/programavimas-python/valdymo-strukturos/',
          ]
        },
        {
          title: 'Funkcijos',
          children: [
            '/programavimas-python/funkcijos/',
          ]
        },
      ],
      '/html': [
        {
          title: 'HTML istorija',
          children: [
            '/html/html-istorija/',
          ]
        },
        {
          title: 'HTML pradmenys',
          children: [
            '/html/html-pradmenys/',
          ]
        },
        {
          title: 'HTML žymės',
          children: [
            '/html/html-zymes/',
          ]
        },
        {
          title: 'HTML atributai',
          children: [
            '/html/html-atributai/',
          ]
        },
        {
          title: 'HTML spalvos',
          children: [
            '/html/html-spalvos/',
          ]
        },
        {
          title: 'HTML formos',
          children: [
            '/html/html-formos/',
          ]
        }
      ],
      '/css/': [
        {
          title: 'CSS',
          children: [
            '/css/',
          ]
        },
        {
          title: 'Įvadas į CSS',
          children: [
            '/css/ivadas-i-css/',
          ]
        },
        {
          title: 'Pagrindinė sintaksė',
          children: [
            '/css/pagrindine-sintakse/',
          ]
        },
        {
          title: 'Teksto stilius',
          children: [
            '/css/teksto-stilius/',
          ]
        },
        {
          title: 'Spalvos ir fonai',
          children: [
            '/css/spalvos-ir-fonai/',
          ]
        },
        {
          title: 'Išdėstymo pagrindai',
          children: [
            '/css/isdestymo-pagrindai/',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  // plugins: [
    // ['@vuepress/plugin-back-to-top'],
    // ['@vuepress/plugin-medium-zoom'],
  // ]
}
