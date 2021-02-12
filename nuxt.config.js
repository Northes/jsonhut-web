export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JsonHut - A simple JSON store for your web or mobile app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ''
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css',
    'ant-design-vue/dist/antd.css',
    'codemirror/lib/codemirror.css',
    'codemirror/theme/ayu-mirage.css',
    'codemirror/theme/solarized.css',
    'codemirror/addon/scroll/simplescrollbars.css',
    'codemirror/addon/hint/show-hint.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/vue-highlight',
    '@/plugins/vue-clipboard2',
    {
      src: '~plugins/vue-codemirror',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  loading: {
    color: '#1890ff'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://api.jsonhut.com' // Used as fallback if no runtime config is provided
    baseURL: 'http://127.0.0.1:8080'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
