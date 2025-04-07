'use client';
import { Card } from 'antd';
import LoginForm from '../components/LoginForm';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 select-none">
      <div className="flex w-full max-w-7xl items-center justify-center">
        <Card
          className="w-96 p-6 shadow-xl rounded-lg bg-white/90 backdrop-blur-sm"
          title={<div className="text-xl font-semibold text-gray-800">欢迎登录</div>}
          bordered={false}
        >
          <LoginForm />
        </Card>
      </div>
    </div>
  );
}