import axios from 'axios'

let base = '';

// 登录请求
export const requestLogin = async params => {
  const res = await axios.post(`${base}/Login`, params);
  return res.data;
}