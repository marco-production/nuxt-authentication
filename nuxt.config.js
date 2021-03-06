import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Laravel Nuxt | %s',
    title: 'Laravel Nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    baseApiUrl: 'http://127.0.0.1:8000/api'
  },

  axios: {
    baseURL: 'http://127.0.0.1:8000/api'
  },

  router: {
    //middleware: [/*'auth' , 'guest' */],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    'nuxt-i18n',
  ],  
  
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    parsePages: true,
    fallback: true,
    lazy: true, //Agregar desde carpeta externa
    langDir: 'locales/', //Ubicacion de la carpeta externa
    locales: [
      {
        code: 'en',
        file: 'en.json',
        iso: 'en',
      },
      {
        code: 'es',
        file: 'es.json',
        iso: 'es',
      },
    ],
    vueI18nLoader: true,
    vuex: {
      syncLocale: true,
      syncRouteParams: false,
    },
    baseUrl: process.env.BASE_URL,
    seo: false,
    /* detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    } */
  }
}
