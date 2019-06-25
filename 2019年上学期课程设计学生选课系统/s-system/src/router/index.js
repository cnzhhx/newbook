import Vue from 'vue'
import Router from 'vue-router'

import selectCourses from '../page/selectCoures.vue'
import selection from '../page/student/selection.vue'
import result from '../page/student/result.vue'
import withdrawal from '../page/student/withdrawal.vue'
import first from '../page/first/first.vue'
import watch from '../page/teacher/watch.vue'
import ClassAdjustment from '../page/teacher/ClassAdjustment.vue'
import courses from '../page/Administrator/courses.vue'
import garde from '../page/Administrator/garde.vue'
import users from '../page/Administrator/users.vue'
import addUsers from '../page/Administrator/addUsers.vue'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/selectCourses',
            name: 'selectCourses',
            component: selectCourses,
            children: [
                {path: '/selectCourses/result', component: result},
                {path: '/selectCourses/withdrawal', component: withdrawal},
                {path: '/selectCourses/first', component: first},
                {path: '/selectCourses/selection', component: selection},
                {path: '/selectCourses/watch', component: watch},
                {path: '/selectCourses/ClassAdjustment', component: ClassAdjustment},
                {path: '/selectCourses/courses', component: courses},
                {path: '/selectCourses/garde', component: garde},
                {path: '/selectCourses/users', component: users},
                {path: '/selectCourses/users/addUsers', component: addUsers}
            ]
        }
    ]
})
