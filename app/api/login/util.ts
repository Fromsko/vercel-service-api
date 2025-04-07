import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

// 获取用户
async function getUserByUsername(username: string): Promise<User | undefined> {
  const users: User[] = [
    { id: 1, username: 'admin', hashedPassword: await bcrypt.hash('admin', 10) },
    { id: 2, username: 'anotheruser', hashedPassword: await bcrypt.hash('securepass', 10) },
  ]
  return users.find((user) => user.username === username)
}

// verifyPassword 校验密码的函数
async function verifyPassword(plainPassword: string, hashedPassword?: string): Promise<boolean> {
  if (!hashedPassword) return false
  return await bcrypt.compare(plainPassword, hashedPassword)
}

// 定义通用 JSON 响应类型
interface ApiResponse<T> {
  message?: string;
  error?: string;
  data?: T;
}

// 封装成功响应
function SuccessResponse<T>(message: string, data?: T, status: number = 200) {
  return NextResponse.json<ApiResponse<T>>({ message, data }, { status });
}

// 封装错误响应
function ErrorResponse(error: string, status: number) {
  return NextResponse.json<ApiResponse<null>>({ error }, { status });
}


export {
  ErrorResponse,
  getUserByUsername, SuccessResponse, verifyPassword
}

