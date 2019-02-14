import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router'
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
