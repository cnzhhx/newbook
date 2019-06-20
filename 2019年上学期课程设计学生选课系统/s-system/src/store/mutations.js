import {
    USER_INFO
} from "./mutation-types"




export default {
    //同步用户数据
    [USER_INFO](state, {userInfo}) {
        state.userInfo = userInfo;
    },
}
