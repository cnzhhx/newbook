import Vue from 'vue'
import Router from 'vue-router'

import selectCourses from '../page/selectCoures.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/selectCourses',
      name: 'selectCourses',
      component: selectCourses
    }
  ]
})
