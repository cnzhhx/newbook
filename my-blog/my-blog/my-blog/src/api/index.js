import ajax from './ajax'

// 1. 基础路径
const BASE_URL = '/api';

//请求首页推荐数据
export const hotRecommends = ()=>ajax(BASE_URL + "/api/hotRecommends");

//提交留言信息
export const liuYan = (content, time)=>ajax(BASE_URL + '/api/liuYan', {content, time}, 'POST');

//请求首页推荐数据
export const liuyanDatas = ()=>ajax(BASE_URL + "/api/liuyanDatas");
