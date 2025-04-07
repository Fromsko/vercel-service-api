import { AUTH_ERRORS } from "@/app/config/errors";
import { ErrorResponse, getUserByUsername, SuccessResponse, verifyPassword } from './util';

export async function GET(request: Request) {
  return SuccessResponse("Hello from Next.js 14");
}

export async function POST(request: Request) {
  const body: LoginRequestBody = await request.json();
  const { username, password } = body;

  console.log("body", body);

  if (!username || !password) {
    return ErrorResponse(AUTH_ERRORS.USERNAME_PASSWORD_EMPTY, 400);
  }

  try {
    const user = await getUserByUsername(username);

    if (!user) {
      return ErrorResponse(AUTH_ERRORS.USER_NOT_FOUND, 401);
    }

    const isPasswordValid = await verifyPassword(password, user.hashedPassword);

    if (isPasswordValid) {
      const userData = { id: user.id, username: user.username };
      return SuccessResponse('登录成功', userData);
    } else {
      return ErrorResponse(AUTH_ERRORS.PASSWORD_INCORRECT, 401);
    }

  } catch (error: any) {
    console.error('登录校验失败:', error);
    return ErrorResponse(AUTH_ERRORS.SERVER_ERROR, 500);
  }
}