import {
  hotRecommends,
  images,
  singer,
  GeRecommends,
  albums
} from "../api/index"

import {
  HOME_CASUAL,
  REQ_IMAGES,
  SINGER,
  GE_RECOMMENDS,
  ALBUM
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
  },

  //获取首页歌手
  async reqGeRecommends({commit}) {
    const result = await GeRecommends();
    commit(GE_RECOMMENDS, {GeRecommends: result.message.GeRecommends})
  },

  //获取首页专辑
  async reqAlbum({commit}) {
    const result = await albums();
    commit(ALBUM, {albums: result.message.albums})
  }
}
