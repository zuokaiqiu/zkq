// import axios from 'axios'
// // 利用axios的create方法去创建axios 实例

// let request = axios.create({
//   // 基础url
//   baseUrl: import.meta.env.VITE_APP_BASE_URL, //基础路径上会携带/api
//   timeout: 5000,
// })

// // request实例添加请求与响应拦截器
// request.interceptors.request.use((config) => {
//   // config 配置对象， headers请求头， 经常给服务器携带公共参数
//   // 返回配置对象
//   return config
// })

// request.interceptors.response.use((response) => {
//     // 成功回调
//     // 简化数据
//     return response.data
// },(error) => {

// })

import axios from 'axios'
// 创建 axios 实例
import { ElMessage } from 'element-plus'
const request = axios.create({
  // 基本路径  例如开发环境都会带上/api
  //   baseURL: import.meta.env.VITE_APP_BASE_API,
  baseURL: '/api',
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // headers 会携带上公共的请求参数
  console.log(config)
  return config
})

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let message = ''
    const code = error.response.status
    switch (code) {
      case 201:
        message = '请求未授权'
        break
      case 304:
        message = '没有访问权限'
        break
      case 404:
        message = '请求地址不正确'
        break
      case 500:
        message = '服务器异常'
        break
      default:
        message = '网络错误'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)

export default request
