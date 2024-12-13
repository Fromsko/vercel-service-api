from pickledb import PickleDB, load as dbload
from typing import Optional

# 创建数据库
db: PickleDB = dbload('db_file.db', True)


def save_user(user_id: int, username: str, email: str, role: str, password: str) -> bool:
    # 保存用户数据
    user_data = {
        'id': user_id,
        'username': username,
        'role': role,
        'password': password
    }
    return db.set(f"user:{user_id}", user_data)


def get_user_by_username(username: str) -> Optional[dict]:
    # 获取用户数据
    users = db.getall()  # 获取所有记录
    for key, user_data in users:
        if user_data.get('username') == username:
            return user_data
    return None


def get_captcha(captcha_id: str) -> Optional[str]:
    # 获取验证码数据
    return db.get(f"captcha:{captcha_id}")


def save_captcha(captcha_id: str, captcha: str) -> bool:
    # 保存验证码
    return db.set(f"captcha:{captcha_id}", captcha)


__all__ = [
    "save_user",
    "get_user_by_username",
    "save_captcha",
    "get_captcha"
]
