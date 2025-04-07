// 定义用户接口
interface User {
  id: number
  username: string
  hashedPassword?: string
}

// 定义登录请求的 body 类型
interface LoginRequestBody {
  username?: string
  password?: string
}

// 定义通用 JSON 响应类型
interface ApiResponse<T> {
  message?: string
  error?: string
  data?: T
}
