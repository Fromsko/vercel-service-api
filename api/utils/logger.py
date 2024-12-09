# log_config.py
import logging


def setup_logger(name: str, log_file: str = 'app.log', level=logging.DEBUG, log_to_file: bool = False):
    """
    配置并返回一个日志记录器

    :param name: 日志记录器名称
    :param log_file: 日志文件名
    :param level: 日志级别
    :param log_to_file: 是否启用文件记录，默认为 False
    :return: 配置好的 logger 对象
    """
    # 创建日志记录器
    logger = logging.getLogger(name)
    logger.setLevel(level)

    # 创建日志格式
    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s')

    # 控制台输出处理器
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.INFO)  # 控制台显示INFO及以上级别
    console_handler.setFormatter(formatter)

    # 添加控制台处理器
    logger.addHandler(console_handler)

    # 如果需要记录到文件，设置文件处理器
    if log_to_file:
        file_handler = logging.FileHandler(log_file)
        file_handler.setLevel(logging.DEBUG)  # 文件保存所有DEBUG及以上级别的日志
        file_handler.setFormatter(formatter)
        logger.addHandler(file_handler)

    return logger


__all__ = [
    "setup_logger"
]
