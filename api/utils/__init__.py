import random
import string

from .logger import setup_logger
from .simple_db import save_user, get_user_by_username, save_captcha, get_captcha
from .models import RegisterParams, LoginParams, RespCaptchaType, RespTokenType, ResponseData


def generate_captcha() -> str:
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))


__all__ = [
    "setup_logger",
    "save_user", "get_user_by_username", "save_captcha", "get_captcha",
    "RegisterParams", "LoginParams", "RespCaptchaType", "RespTokenType", "ResponseData"
]
