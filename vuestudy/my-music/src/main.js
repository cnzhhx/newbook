import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
