# user.py
import random
import string

from fastapi import APIRouter, HTTPException

from api.utils import (
    generate_captcha,
    save_user, get_user_by_username, save_captcha, get_captcha,
    RegisterParams, LoginParams, RespCaptchaType, RespTokenType, ResponseData
)

# 创建 API 路由
router = APIRouter()


class UserAPI:
    @staticmethod
    @router.post("/register", response_model=ResponseData)
    async def register(params: RegisterParams):
        # 检查验证码是否正确
        captcha = get_captcha(params.captchaID)
        if not captcha or captcha != params.captcha:
            return ResponseData(code=400, msg="Invalid captcha", data=None, err={"type": "captcha", "err": "Incorrect captcha"})

        # 检查用户名是否已经存在
        existing_user = get_user_by_username(params.username)
        if existing_user:
            return ResponseData(code=400, msg="Username already taken", data=None, err={"type": "user", "err": "Username already taken"})

        # 保存用户信息
        user_id = random.randint(1000, 9999)  # 简化用户ID生成
        if save_user(user_id, params.username, "user@example.com", "user", params.password):
            return ResponseData(
                code=200,
                msg="Registration successful",
                data=RespTokenType(Token="dummy_token", UserID=str(user_id))
            )
        raise HTTPException(status_code=500, detail="Error saving user")

    @staticmethod
    @router.post("/login", response_model=ResponseData)
    async def login(params: LoginParams):
        # 检查用户是否存在
        user = get_user_by_username(params.username)
        if not user or user['password'] != params.password:
            return ResponseData(code=400, msg="Invalid credentials", data=None, err={"type": "auth", "err": "Invalid username or password"})

        return ResponseData(
            code=200,
            msg="Login successful",
            data=RespTokenType(Token="dummy_token", UserID=str(user['id']))
        )

    @staticmethod
    @router.get("/captcha", response_model=RespCaptchaType)
    async def get_captcha_endpoint():
        captcha_id = ''.join(random.choices(
            string.ascii_uppercase + string.digits, k=8))  # 简化captchaID生成
        captcha = generate_captcha()
        save_captcha(captcha_id, captcha)
        return RespCaptchaType(captcha=captcha, captchaID=captcha_id)


__all__ = [
    "router"
]
