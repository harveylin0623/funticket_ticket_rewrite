// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3300
  },
  app: {
    head: {
      htmlAttrs: { lang: 'zh-tw' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ]
    }
  },
  components: {
    dirs: [
      {
        path: '~/components/Global',
        global: true
      }
    ]
  },
  modules: [
    '@nuxtjs/i18n',
    '@element-plus/nuxt',
    '@nuxtjs/robots',
    '@pinia/nuxt',
    'nuxt-gtag'
  ],
  css: [
    'swiper/css',
    '@/assets/scss/tailwind.scss',
    '@/assets/scss/element-plus/index.scss',
    '@/assets/scss/global.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  i18n: {
    langDir: 'locales',
    defaultLocale: 'zh-tw',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    // },
    locales: [
      {
        code: 'zh-tw',
        file: 'zh-tw.json'
      },
      {
        code: 'en',
        file: 'en.json'
      }
    ]
  },
  vite: {
    define: {
      'process.env': process.env
    }
  },
  robots: {
    disallow: [process.env.CURRENT_MODE === 'dev' ? '/' : '']
  },
  gtag: {
    id: '',
    enabled: false
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false }
})
