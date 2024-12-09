from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse

# 创建 API 路由
router = APIRouter()


@router.api_route("")
async def index():
    return {"message": "Hello from FastAPI"}


@router.api_route("/{full_path:path}")
async def capture_routes(request: Request, full_path: str):
    """
    捕获所有以 /api/py/ 开头的路径
    """
    return JSONResponse(
        content={"message": f"未找到该路由: {full_path}"},
        status_code=200
    )

__all__ = [
    "router"
]
