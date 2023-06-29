export interface loginForm {
  userName: string
  password: string
}

interface dataType {
  token: string
}
export interface loginResponseData {
  code: number
  data: dataType
}

// 定义服务器放回相关数据类型

export interface useResponseData {
  code: number
  data: user
}

interface user {
  checkerUser: object
}

// interface userInfo {
//   userId: string
//   avatar: string
//   userName: string
//   password: string
//   desc: string
//   roles: string[]
// }
