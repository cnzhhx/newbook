import {
    getSelection,
    getSelectionResult,
    getUserInfo
} from "../api/index"

import state from './state'

import {
    USER_INFO,
    GRTSELECTION,
    GRTSELECTIONRESULT,

} from "./mutation-types"


export default {

    //登录并同步用户的信息
    syncUserInfo({commit}, userInfo){
        commit(USER_INFO, {userInfo});
    },

    // 异步获取用户信息
    async getUserInfo({commit}){
        const result = await getUserInfo();
        if(result.success_code === 200){
            commit(USER_INFO, {userInfo: result.message});
        }
    },


    //获取学生选课数据
    async reqGetSelection({commit}) {
        const result = await getSelection(state.userInfo.number);
        commit(GRTSELECTION, {getSelection: result.message})
    },

    //获取学生选课数据结果
    async reqGetSelectionResult({commit}) {
        const result = await getSelectionResult(state.userInfo.number);
        commit(GRTSELECTIONRESULT, {getSelectionResult: result.message})
    },
}
