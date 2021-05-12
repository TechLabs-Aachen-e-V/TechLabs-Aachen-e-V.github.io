export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Radar | <Semester> | TechLabs Aachen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  router: {
    base:
      process.env.NODE_ENV === "development" ? process.env.BASE_URL : "/radar/"
  }, // where <subfolder> is the subfolder!

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-tippy.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  image: {
    staticFilename: '/router/nuxt/images/[name]-[hash][ext]',
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
  ],

  googleFonts: {
    families: {
      Livvic: [300, 400, 600, 700],
    },
    display: 'swap',
    download: true,
    subsets: 'latin',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // https://www.npmjs.com/package/@nuxtjs/markdownit
  markdownit: {
    runtime: true, // Support `$md()`
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/nuxt/',
  },
}
