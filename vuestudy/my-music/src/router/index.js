import Vue from 'vue'
import Router from 'vue-router'

import Found from './../page/found/found'
import Down from './../page/down/down'
import Friend from './../page/friend/friend'
import My from './../page/my/my'

import Anchor from './../page/found/anchor/anchor'
import Dvd from './../page/found/dvd/dvd'
import RankingList from './../page/found/ranking list/rankingList'
import Singer from './../page/found/singer/singer'
import SongSheet from './../page/found/song sheet/songSheet'
import Recommend from './../page/found/recommend/recommend'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/found',
      component: Found,
      children: [
        //推荐
        {path: '/found/recommend', component: Recommend},
        {path: '/found/anchor', component: Anchor},
        {path: '/found/dvd', component: Dvd},
        {path: '/found/rankingList', component: RankingList},
        {path: '/found/singer', component: Singer},
        {path: '/found/songSheet', component: SongSheet}
      ]
    },
    {
      path: '/down',
      component: Down,
    },
    {
      path: '/my',
      component: My,
    },
    {
      path: '/friend',
      component: Friend,
    },
    {
      path: '/',
      redirect: '/found/recommend'
    }
  ]})
