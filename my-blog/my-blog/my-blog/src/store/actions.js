import {
    hotRecommends,
    liuyanDatas,
    allNotes
} from "../api/index"

import {
    HOME_CASUAL,
    LIUYAN_DATAS,
    All_NOTES
} from "./mutation-types"



export default {

    //获取首页推荐  最新文章   点击排行
    async reqRecommends({commit}) {
        const result = await hotRecommends();
        commit(HOME_CASUAL, {hotRecommends: result.message.hotRecommends})
    },

    async reqLiuyanDatas({commit}) {
        const result = await liuyanDatas();
        commit(LIUYAN_DATAS, {liuyan_Datas: result.message})
    },

    //获取首页推荐  最新文章   点击排行
    async reqAllNotes({commit}) {
        const result = await allNotes();
        commit(All_NOTES, {allNotes: result.message.allNotes})
    },
}
