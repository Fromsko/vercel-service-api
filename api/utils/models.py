# models.py
from pydantic import BaseModel
from typing import Literal, Optional


class User(BaseModel):
    id: int
    username: str
    email: str
    role: Literal['admin', 'user']


class RegisterParams(BaseModel):
    username: str
    password: str
    captcha: str
    captchaID: str


class LoginParams(BaseModel):
    username: str
    password: str


class RespCaptchaType(BaseModel):
    captcha: str
    captchaID: str


class RespTokenType(BaseModel):
    Token: str
    UserID: str


class RespErrType(BaseModel):
    type: str
    err: str


class ResponseData(BaseModel):
    code: int
    msg: str
    data: RespTokenType | RespCaptchaType
    err: Optional[RespErrType] = None
