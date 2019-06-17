import Vue from 'vue'
import Router from 'vue-router'

import selectCourses from '../page/selectCoures.vue'
import selection from '../page/student/selection.vue'
import result from '../page/student/result.vue'
import withdrawal from '../page/student/withdrawal.vue'
import first from '../page/first/first.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/selectCourses',
      name: 'selectCourses',
      component: selectCourses,
      children: [
          //推荐
          {path: '/selectCourses/result', component: result},
          {path: '/selectCourses/withdrawal', component: withdrawal},
          {path: '/selectCourses/first', component: first},
          {path: '/selectCourses/selection', component: selection}

      ]
    }
  ]
})
