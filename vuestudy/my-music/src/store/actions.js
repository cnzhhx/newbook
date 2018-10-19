import {
  GeRecommends,
} from "../api/index"

import {
  HOME_CASUAL,
} from "./mutation-types"

export default {

  //获取首页推荐轮播图
  async reqRecommends({commit}) {
    const result = await GeRecommends();
    commit(HOME_CASUAL, {homecasual: result.message.GeRecommends})
  },


}
