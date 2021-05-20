module.exports = {
  configureWebpack: {
    resolve: {
      extensions:['.vue','.js','.css'],
      // @ 表示Src
      // store、router可以不用配置，因为可以通过this.$router和this.$store访问
      alias: {
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        // 'router': '@/router',
        // 'store': '@/store',
      }
    }
  }
};