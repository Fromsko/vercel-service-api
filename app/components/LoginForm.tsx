'use client';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useLogin from '../hooks/useLogin';

export default function LoginForm() {
  const { login, error, loginSuccess, user, resetLoginState } = useLogin();
  const router = useRouter();

  const onFinish = async (values: any) => {
    await login(values);
  };

  useEffect(() => {
    if (loginSuccess && user) {
      message.success(`登录成功，欢迎 ${user.username}!`);
      router.push('/demo');
    } else if (error) {
      message.error("登录失败");
    }

    return () => {
      resetLoginState();
    };
  }, [loginSuccess, user, error, router, resetLoginState]);

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input
          prefix={<UserOutlined className="mr-2 text-gray-400" />}
          placeholder="请输入用户名"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="mr-2 text-gray-400" />}
          placeholder="请输入密码"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full rounded-md bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white font-semibold shadow-md transition duration-300"
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}