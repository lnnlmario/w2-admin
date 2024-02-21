import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/modules/user'

const store = useUserStore()

// 创建axios实例
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000
})

// request拦截器
instance.interceptors.request.use(
  (config) => {
    if (store.token) {
      config.headers['X-Token'] = store.token
    }
    return config
  },
  (error) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response拦截器
instance.interceptors.response.use(
  (response: any) => {
    const res = response.data

    // code不为20000认为返回结果有问题
    if (res.code !== 20000) {
      ElMessage.error(res.message || '请求失败')

      // TODO: 403xx token出现问题, 返回登录页
    } else {
      return res
    }
  },
  (error) => {
    console.error(error)
    ElMessage.error(error.message || '请求失败')
    return Promise.reject(error)
  }
)

export default instance
