import Vue from 'vue'
import Router from 'vue-router'

import About from "./../page/about/about"
import Note from "./../page/note/note"
import Message from "./../page/message/message"
import First from "./../page/first/first"
import BFC from "./../page/blognote/BFC"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/first",
            component: First
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/note",
            component: Note,
            children: [
                //日常博客
                {path: '/note/bfc', component: BFC}
            ]
        },
        {
            path: "/message",
            component: Message
        }
        // {
        //     path: "/bfc",
        //     component: BFC
        // }
    ]
})
