// var webpack =require('webapck');

module.exports = {
   devtool: 'eval-source-map',
  entry: {
     
     //index:__dirname + "/main.js",
     //banner:__dirname + "/src/index/main.js",
      //login:__dirname + "/src/login/main.js",
      //sign:__dirname + "/src/sign/main.js",
      //lists:__dirname + "/src/lists/main.js",
      //info_lists:__dirname + "/src/info_lists/main.js",
    //room:__dirname + "/src/room/main.js",
    demo:__dirname + "/src/demo/main.js",
    //pc3_1:__dirname + "/src/pc3_1/main.js",
    //pc4:__dirname + "/src/pc4/main.js",
    // pc2_2:__dirname + "/src/pc2_2/main.js",
    //pc2:__dirname + "/src/pc2/main.js",
    //pc7:__dirname + "/src/pc7/main.js",
    //pc7_1:__dirname + "/src/pc7_1/main.js",
   //pc8:__dirname + "/src/pc8/main.js",
    // pc8_1:__dirname + "/src/pc8_1/main.js",
  },
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "[name].js"//打包后输出文件的文件名
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url?limit=25000'
      },
     //   { test: /\.js$/, 
     //    exclude: /node_modules/,
     //   loader: "babel?presets[]=es2015"
     // },
      // { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  },
  resolve: {

  alias: {
    'vue$': 'vue/dist/vue.js'
  }
}
  
   



}