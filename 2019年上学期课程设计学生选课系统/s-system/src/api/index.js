import ajax from './ajax'

// 1. 基础路径
const BASE_URL = 'http://127.0.0.1:3001';

//登录
export const pwdLogin = (username, password)=>ajax(BASE_URL + '/api/login', {username, password}, 'POST');


//请求学生选课数据
export const getSelection = (number)=>ajax(BASE_URL + '/api/get_selection', {number});

//请求学生选课数据
export const getSelectionResult = (number)=>ajax(BASE_URL + '/api/get_selection_result', {number});
