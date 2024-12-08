'use client'
import { Button, Card, FloatingSelect, Input, Switch } from "@rtdui/core";
import { useState } from "react";

// 预定义样式选项
const variant = ["outline", "default", "ghost"];
const size = ["xs", "sm", "md", "lg", "xl"];
const radius = ["xs", "sm", "md", "lg", "xl", "circle"];
const titleAlignOptions = ["center", "left", "right"]; // 标题对齐选项

export default function LoginForm() {
  // 定义状态管理
  const [state, setState] = useState({
    variant: "outline",
    size: "sm",
    radius: "md",
    disabled: false,
    pointer: false,
    showStyleMenu: false,
    titleAlign: "center", // 添加标题对齐的状态
  });

  const [showPassword, setShowPassword] = useState(false);

  // 控制悬浮按钮菜单的显示/隐藏
  const toggleStyleMenu = () => setState((prev) => ({ ...prev, showStyleMenu: !prev.showStyleMenu }));

  return (
    <div className="relative">
      {/* 悬浮按钮 */}
      <button
        onClick={toggleStyleMenu}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg"
      >
        ⚙️
      </button>

      {/* 浮动样式菜单 */}
      {state.showStyleMenu && (
        <div className="absolute bottom-16 right-4 bg-white shadow-lg p-4 rounded-lg">
          <div className="flex flex-col gap-4">
            <FloatingSelect
              // label="Variant"
              data={variant}
              value={state.variant}
              onChange={(val) => setState((prev) => ({ ...prev, variant: val }))}
            />
            <FloatingSelect
              // label="Size"
              data={size}
              value={state.size}
              onChange={(val) => setState((prev) => ({ ...prev, size: val }))}
            />
            <FloatingSelect
              // label="Radius"
              data={radius}
              value={state.radius}
              onChange={(val) => setState((prev) => ({ ...prev, radius: val }))}
            />
            {/* 新增标题对齐选项 */}
            <FloatingSelect
            //   label="Title Align"
              data={titleAlignOptions}
              value={state.titleAlign}
              onChange={(val) => setState((prev) => ({ ...prev, titleAlign: val }))}
            />
            <Switch
              label="Disabled"
              checked={state.disabled}
              onChange={(val) => setState((prev) => ({ ...prev, disabled: val }))}
            />
            <Switch
              label="Show pointer"
              checked={state.pointer}
              onChange={(val) => setState((prev) => ({ ...prev, pointer: val }))} 
            />
          </div>
        </div>
      )}

      {/* 登录卡片 */}
      <div className="grid place-items-center h-screen bg-gray-100">
        <Card
          className="w-96 text-center"
          title="Login"
          shadow="lg"
          content={
            <div className="flex flex-col gap-4">
              {/* 用户名输入框 */}
              <Input
                className="w-full"
                placeholder="Username"
                variant={state.variant as any}
                size={state.size as any}
                radius={state.radius}
                disabled={state.disabled}
                pointer={state.pointer}
              />
              {/* 密码输入框 */}
              <Input
                className="w-full"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                variant={state.variant as any}
                size={state.size as any}
                radius={state.radius}
                disabled={state.disabled}
                pointer={state.pointer}
              />
              <div className="flex justify-between">
                {/* 显示密码切换 */}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword((prev) => !prev)}
                  />
                  Show Password
                </label>
                <Button color="primary" className={state.variant as any} disabled={state.disabled}>
                  Login
                </Button>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}

LoginForm.displayName = "LoginForm";
