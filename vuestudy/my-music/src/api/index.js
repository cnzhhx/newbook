import ajax from './ajax'

// 1. 基础路径
const BASE_URL = '/api';

// 2. 请求方法

// 请求热门推荐
export const hotRecommends = ()=>ajax(BASE_URL + '/api/hotRecommends');

//请求首页轮播图
export const images = ()=>ajax(BASE_URL + '/api/images');

//请求首页歌手
export const singer = ()=>ajax(BASE_URL + '/api/singer');

//请求歌单首页
export const GeRecommends = ()=>ajax(BASE_URL + '/api/GeRecommends');

//请求首页专辑数据
export const albums = ()=>ajax(BASE_URL + '/api/albums');


//请求短信验证码
export const getPhoneCode = (phone)=>ajax(BASE_URL + '/api/send_code', {phone});

//验证码登录
export const phoneCodeLogin = (phone, code)=>ajax(BASE_URL + '/api/login_code', {phone, code}, 'POST');


//用户名密码登录
export const pwdLogin = (name, pwd, captcha)=>ajax(BASE_URL + '/api/login_pwd', {name, pwd, captcha}, 'POST');

//获取登录的用户信息
export const getUserInfo = () => ajax(BASE_URL + '/api/user_info');

// 2.10 退出登录
export const getLogout = () => ajax(BASE_URL + '/api/logout');
