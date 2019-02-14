import {
    hotRecommends
} from "../api/index"

import {
    HOME_CASUAL,
} from "./mutation-types"



export default {

    //获取首页推荐
    async reqRecommends({commit}) {
        const result = await hotRecommends();
        commit(HOME_CASUAL, {hotRecommends: result.message.hotRecommends})
    }



}
