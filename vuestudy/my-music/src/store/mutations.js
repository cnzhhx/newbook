import {
  HOME_CASUAL,
  REQ_IMAGES,
  SINGER,
  GE_RECOMMENDS,
  ALBUM,
  USER_INFO,
  RESET_USER_INFO
} from "./mutation-types"



export default {
  //首页热门推荐
  [HOME_CASUAL](state, {hotRecommends}){
    state.hotRecommends = hotRecommends;
  },

  //首页轮播图
  [REQ_IMAGES](state, {images}){
    state.images = images;
  },

  //首页歌手
  [SINGER](state, {singer}){
    state.singers = singer;
  },

  //歌单首页数据
  [GE_RECOMMENDS](state, {GeRecommends}){
    state.GeRecommends = GeRecommends;
  },

  //首页专辑
  [ALBUM](state, {albums}){
    state.albums = albums;
  },

  //同步用户数据
  [USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo;
  },

  [RESET_USER_INFO](state) {
    state.userInfo = {};
  }
}
