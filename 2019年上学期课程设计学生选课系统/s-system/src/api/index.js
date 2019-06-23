import ajax from './ajax'

// 1. 基础路径
const BASE_URL = 'http://127.0.0.1:3001';

//登录
export const pwdLogin = (username, password)=>ajax(BASE_URL + '/api/login', {username, password}, 'POST');


//请求学生选课数据
export const getSelection = (number)=>ajax(BASE_URL + '/api/get_selection', {number});

//请求学生选课数据
export const getSelectionResult = (number)=>ajax(BASE_URL + '/api/get_selection_result', {number});

//学生选择课程
export const selectSourse = (number,name)=>ajax(BASE_URL + '/api/select_sourse', {number,name},"POST");

//学生退选课程
export const goWithdrawal = (number,name)=>ajax(BASE_URL + '/api/go_withdrawal', {number,name},'POST');


//请求老师课程表
export const getSelectTeacher = (name)=>ajax(BASE_URL + '/api/get_select_teacher', {name});

//获取登录的用户信息
export const getUserInfo = () => ajax(BASE_URL + '/api/user_info');
