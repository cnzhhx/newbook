import ajax from './ajax'

// 1. 基础路径
const BASE_URL = 'http://127.0.0.1:3001';


export const pwdLogin = (username, password)=>ajax(BASE_URL + '/api/login', {username, password}, 'POST');
