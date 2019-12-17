
module.exports = {
  // !ssr / spa
  mode: 'universal', 
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'nuxt 首航',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  ** // !在 Nuxtjs 里配置全局的 CSS 文件、模块、库。 (每个页面都会被引入)
  */
  css: [
    { src: '@/assets/styles/reset.scss', lang: 'scss' }
  ],
  // !https://zh.nuxtjs.org/api/configuration-build/#styleresources
  // !在页面中注入一些变量和mixin而不必每次都导入它们
  styleResources: {
    scss: './assets/styles/variables.scss'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    // !分析并可视化构建后的打包文件 yarn build -a 
    // analyze: true //  Notice: Please do not deploy bundles built with analyze mode, it's only for analyzing purpose. 
  }
}
