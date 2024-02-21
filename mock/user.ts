import { MockMethod } from 'vite-plugin-mock'

function createFakeUserList() {
  return [
    {
      id: 1,
      username: 'admin',
      password: '111111',
      realName: 'super_admin',
      token: 'fakeToken1'
    }
  ]
}

export default [
  // mock 用户登录
  {
    url: '/api/login',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const userList = createFakeUserList()
      const user = userList.find(
        (item) => item.username === username && item.password === item.password
      )
      if (!user) {
        return { code: 40003, message: '登录失败' }
      }

      return { code: 20000, message: '登录成功', ...user }
    }
  }
] as MockMethod[]
