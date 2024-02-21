export interface LoginFormData {
  username: string
  password: string
  // 验证码
  code: string
}

export type LoginResponseData = { token: string }
