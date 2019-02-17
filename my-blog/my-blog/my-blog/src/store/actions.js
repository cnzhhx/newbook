import {
    hotRecommends,
    liuyanDatas
} from "../api/index"

import {
    HOME_CASUAL,
    LIUYAN_DATAS
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
    }

}
