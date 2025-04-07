import axios from 'axios';
import { useState } from 'react';

const LOGIN_API_ENDPOINT = '/api/login';

interface LoginError extends Error { }

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<LoginError | null>(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [user, setUser] = useState<any>(null);

  const login = async (credentials: any) => {
    setIsLoading(true);
    setError(null);
    setLoginSuccess(false);
    setUser(null);

    try {
      const response = await axios.post(LOGIN_API_ENDPOINT, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setIsLoading(false);
      setLoginSuccess(true);
      setUser(response.data.data);
      console.log('登录成功:', response.data);
      return response.data;
    } catch (err: any) {
      setIsLoading(false);
      const loginError: LoginError = {
        name: 'LoginError',
        message: "登录失败"
      };
      setError(loginError);
      console.error('登录失败:', err);
      throw err;
    }
  };

  const resetLoginState = () => {
    setLoginSuccess(false);
    setUser(null);
    setError(null);
    setIsLoading(false);
  };

  return {
    login,
    isLoading,
    error,
    loginSuccess,
    user,
    resetLoginState,
  };
}

export default useLogin;