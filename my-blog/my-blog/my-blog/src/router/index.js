import Vue from 'vue'
import Router from 'vue-router'

import About from "./../page/about/about"
import Note from "./../page/note/note"
import Message from "./../page/message/message"
import First from "./../page/first/first"

import BFC from "./../page/blognote/BFC"
import Inherit from "./../page/blognote/inherit"
import InheritNote from "./../page/blognote/inheritNote"
import Unknownjs1 from "./../page/blognote/Unknown-JS-1"
import Unknownjs2 from "./../page/blognote/Unknown-JS-2"
import Unknownjs3 from "./../page/blognote/Unknown-JS-3"

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
                {path: '/note/bfc', component: BFC},
                {path: '/note/inherit', component: Inherit},
                {path: '/note/inheritNote', component: InheritNote},
                {path: '/note/unknownjs1', component: Unknownjs1},
                {path: '/note/unknownjs2', component: Unknownjs2},
                {path: '/note/unknownjs3', component: Unknownjs3}
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
