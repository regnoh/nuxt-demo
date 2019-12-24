
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
    '@/assets/font/iconfont.css', // ?不起作用
    { src: '@/assets/styles/reset.scss', lang: 'scss' },
    { src: 'gleaf/packages/theme-chalk/src/index.scss', lang: 'scss' },
    'gleaf-extend/lib/style/index.css',
  ],
  // !https://zh.nuxtjs.org/api/configuration-build/#styleresources
  // !在页面中注入一些变量和mixin而不必每次都导入它们
  styleResources: {
    scss: './assets/styles/variables.scss',
  },
  /*
  ** Plugins to load before mounting the App
  !https://zh.nuxtjs.org/api/configuration-plugins/#plugins-%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE
  !每次你需要使用 Vue.use() 时，你需要在 plugins/ 目录下创建相应的插件文件，并在 nuxt.config.js 中的 plugins 配置项中配置插件的路径
  */
  plugins: [
    { src: "~/plugins/lang.js", ssr: true },
    { src: '~/plugins/font', ssr: false },
    { src: '~/plugins/gleaf', ssr: true }, // !ssr: 默认为 true, (false: 该文件只会在客户端被打包引入)。
    { src: '~/plugins/gleaf-extend', ssr: false },
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
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  
  optimizedImages: {
    optimizeImages: true
  },
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
