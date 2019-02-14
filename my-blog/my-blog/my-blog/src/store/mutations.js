import {
    HOME_CASUAL
} from "./mutation-types"


export default {

    //首页推荐
    [HOME_CASUAL](state, {hotRecommends}) {
        state.hotRecommends = hotRecommends;
    }

}
