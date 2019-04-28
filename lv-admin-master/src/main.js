import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "font-awesome/css/font-awesome.min.css"
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI, {
  size: 'small'
});
new Vue({
  render: h => h(App),
  store,
  router,
  provide:function(){
    return {
      menuEventBus:new Vue(),
      tabEventBus:new Vue()
    }
  }
}).$mount('#app')
