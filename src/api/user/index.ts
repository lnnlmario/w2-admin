import api from '@/utils/request'
import type * as Login from './types/login'

export const login = (data: Login.LoginFormData) => api.post('/login', data)
