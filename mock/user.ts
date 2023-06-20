function createUserList() {
  return [
    {
      userId: '1',
      avatar: '',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: '2',
      avatar: '',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'System Token',
    },
  ]
}

export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { userName, password } = body
      const checkerUser = createUserList().find(
        (user) => user.username === userName && user.password === password,
      )
      if (!checkerUser) {
        return { code: 201, data: { message: '账户或者密码不正确' } }
      }
      const { token } = checkerUser
      return { code: 200, data: { token } }
    },
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      const token = request.headers.token
      const checkerUser = createUserList().find((user) => user.token === token)
      if (!checkerUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      return { code: 200, data: { checkerUser } }
    },
  },
]
