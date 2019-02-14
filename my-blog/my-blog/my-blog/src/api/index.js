import ajax from './ajax'

// 1. 基础路径
const BASE_URL = '/api';

// export const hotRecommends = ()=>ajax(BASE_URL + '/api/hotRecommends');

export const hotRecommends = ()=>ajax(BASE_URL + "/api/hotRecommends");
