module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  //http api 통신 받기
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
