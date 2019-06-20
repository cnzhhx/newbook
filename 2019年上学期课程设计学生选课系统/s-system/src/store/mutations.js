import {
    USER_INFO,
    GRTSELECTION,
    GRTSELECTIONRESULT
} from "./mutation-types"
import {getSelectionResult} from "../api";




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
    }
}
