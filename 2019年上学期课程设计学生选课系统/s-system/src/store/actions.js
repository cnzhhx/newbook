import {

} from "../api/index"

import {

} from "./mutation-types"


export default {

    //获取首页热门推荐
    async reqpwdLogin({commit}) {
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
        commit(ALBUM, {albums: result.message})
    },

    // 6. 同步用户的信息
    syncUserInfo({commit}, userInfo){
        commit(USER_INFO, {userInfo});
    },

    // 7. 异步获取用户信息
    async getUserInfo({commit}){
        const result = await getUserInfo();
        console.log(result);
        if(result.success_code === 200){
            commit(USER_INFO, {userInfo: result.message});
        }
    },

    // 8. 退出登录
    async Logout({commit}){
        const result = await getLogout();
        console.log(result);
        if(result.success_code === 200){
            commit(RESET_USER_INFO);
        }
    }
}
