import {
  hotRecommends,
  images,
  singer
} from "../api/index"

import {
  HOME_CASUAL,
  REQ_IMAGES,
  SINGER
} from "./mutation-types"

export default {

  //获取首页热门推荐
  async reqRecommends({commit}) {
    const result = await hotRecommends();
    commit(HOME_CASUAL, {hotRecommends: result.message.hotRecommends})
  },

  //获取首页轮播图
  async reqImages({commit}) {
    const result = await images();
    commit(REQ_IMAGES, {images: result.message.images})
  },

  //获取首页歌手
  async reqSinger({commit}) {
    const result = await singer();
    commit(SINGER, {singer: result.message.singers})
  }

}