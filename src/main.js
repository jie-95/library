import Vue from 'vue'
import App from './App.vue'

//引入bootstrap
import "bootstrap/dist/css/bootstrap.css" // 默认找文件夹下的index文件(但是这个不是所以需要写路径)
//axios
import axios from 'axios'
// 2. 基础地址
axios.defaults.baseURL = "http://www.liulongbin.top:3006"
// 3. axios方法添加到Vue的原型上
Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
