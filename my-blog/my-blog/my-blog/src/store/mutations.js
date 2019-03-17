import {
    HOME_CASUAL,
    LIUYAN_DATAS,
    All_NOTES
} from "./mutation-types"


export default {

    //首页推荐
    [HOME_CASUAL](state, {hotRecommends}) {
        state.hotRecommends = hotRecommends.reverse();
    },

    //留言数据
    [LIUYAN_DATAS](state, {liuyan_Datas}){
        state.LiuyanDatas = liuyan_Datas.reverse();
    },

    //所有的笔记
    [All_NOTES](state, {allNotes}){
        state.allNotes = allNotes.reverse();
    }
}
