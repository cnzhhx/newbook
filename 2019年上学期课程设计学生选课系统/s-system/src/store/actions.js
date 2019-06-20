import {

} from "../api/index"

import {
    USER_INFO
} from "./mutation-types"


export default {

    // 1. 同步用户的信息
    syncUserInfo({commit}, userInfo){
        commit(USER_INFO, {userInfo});
    }

}
