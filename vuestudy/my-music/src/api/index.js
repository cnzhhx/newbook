import ajax from './ajax'

// 1. 基础路径
const BASE_URL = 'http://127.0.0.1:3000';

// 2. 请求方法

// 请求热门推荐
export const hotRecommends = ()=>ajax(BASE_URL + '/api/hotRecommends');

//请求首页轮播图
export const images = ()=>ajax(BASE_URL + '/api/images');

//请求首页歌手
export const singer = ()=>ajax(BASE_URL + '/api/singer');







