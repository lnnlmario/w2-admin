import api from '@/utils/request'
import type * as Login from './types/login'

export const loginApi = (data: Login.LoginFormData): ApiResponseData<Login.LoginResponseData> =>
  api.post('/login', data)
