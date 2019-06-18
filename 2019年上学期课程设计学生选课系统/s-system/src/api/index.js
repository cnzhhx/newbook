import ajax from './ajax'

// 1. 基础路径
const BASE_URL = 'http://127.0.0.1:3001';


export const hotRecommends = ()=>ajax(BASE_URL + '/api/hotRecommends');



export const pwdLogin = (name, pwd)=>ajax(BASE_URL + '/api/login_pwd', {name, pwd}, 'POST');
