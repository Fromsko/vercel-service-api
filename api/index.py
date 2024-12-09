from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from api.handler.auth import router as user_router
from api.handler.guard import router as guard_router


app = FastAPI(
    docs_url="/api/py/docs",
    openapi_url="/api/py/openapi.json"
)


app.include_router(guard_router, prefix="/api/py", tags=["Guard"])
app.include_router(user_router, prefix="/api/py/user", tags=["User"])
