import Vue from 'vue'
import Router from 'vue-router'

import First from "./../page/first/first"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/first",
            component: First
        }
    ]
})
