import ajax from './ajax'

// 1. 基础路径
const BASE_URL = 'http://10.18.196.94';


export const hotRecommends = ()=>ajax(BASE_URL + '/api/hotRecommends');



export const pwdLogin = (username, password)=>ajax(BASE_URL + '/login', {username, password}, 'POST');
