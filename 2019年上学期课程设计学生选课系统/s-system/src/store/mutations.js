import {
    USER_INFO,
    GRTSELECTION,
    GRTSELECTIONRESULT,
    GETSELECTTEACHER,
    GETALLINFO
} from "./mutation-types"
import {getAllInfo} from "../api";



export default {

    //同步用户数据
    [USER_INFO](state, {userInfo}) {
        state.userInfo = userInfo;
    },

    //获取选课数据
    [GRTSELECTION](state, {getSelection}) {
        state.getSelection = getSelection;
    },


    //获取选课数据结果
    [GRTSELECTIONRESULT](state, {getSelectionResult}) {
        state.getSelectionResult = getSelectionResult;
    },

    //请求老师课程表
    [GETSELECTTEACHER](state, {getSelectTeacher}) {
        state.getSelectTeacher = getSelectTeacher;
    },

    //请求管理员所有数据
    [GETALLINFO](state, {getAllInfo}) {
        state.getAllInfo = getAllInfo;
    }
}
