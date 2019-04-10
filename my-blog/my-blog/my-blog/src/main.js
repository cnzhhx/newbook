import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(ElementUI);
Vue.use(MuseUI);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
