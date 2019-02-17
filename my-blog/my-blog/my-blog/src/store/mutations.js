import {
    HOME_CASUAL,
    LIUYAN_DATAS
} from "./mutation-types"


export default {

    //首页推荐
    [HOME_CASUAL](state, {hotRecommends}) {
        state.hotRecommends = hotRecommends;
    },

    //留言数据
    [LIUYAN_DATAS](state, {liuyan_Datas}){
        state.LiuyanDatas = liuyan_Datas;
    }

}
