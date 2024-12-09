package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"testing"
)

const apiBase = "http://localhost:8000/api/py/user"

// 定义数据结构以匹配 FastAPI 接口的请求和响应
type RegisterParams struct {
	Username  string `json:"username"`
	Password  string `json:"password"`
	Captcha   string `json:"captcha"`
	CaptchaID string `json:"captchaID"`
}

type LoginParams struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type ResponseData struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data"`
	Err  interface{} `json:"err,omitempty"`
}

func TestCaptcha(t *testing.T) {
	// 测试生成验证码的接口
	resp, err := http.Get(apiBase + "/captcha")
	if err != nil {
		t.Fatalf("Failed to request captcha: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("Unexpected status code: got %v, want %v", resp.StatusCode, http.StatusOK)
	}

	var result ResponseData
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		t.Fatalf("Failed to decode response: %v", err)
	}

	captcha, ok := result.Data.(map[string]interface{})
	if !ok {
		t.Fatalf("Unexpected captcha response format")
	}

	if captcha["captcha"] == "" || captcha["captchaID"] == "" {
		t.Fatalf("Captcha response missing required fields")
	}
	t.Logf("Captcha generated: %v", captcha)
}

func TestRegister(t *testing.T) {
	// 测试注册接口
	captchaResp, err := http.Get(apiBase + "/captcha")
	if err != nil {
		t.Fatalf("Failed to request captcha: %v", err)
	}
	defer captchaResp.Body.Close()

	var captchaResult ResponseData
	if err := json.NewDecoder(captchaResp.Body).Decode(&captchaResult); err != nil {
		t.Fatalf("Failed to decode captcha response: %v", err)
	}
	captcha := captchaResult.Data.(map[string]interface{})

	registerParams := RegisterParams{
		Username:  "testuser",
		Password:  "password123",
		Captcha:   captcha["captcha"].(string),
		CaptchaID: captcha["captchaID"].(string),
	}

	reqBody, _ := json.Marshal(registerParams)
	resp, err := http.Post(apiBase+"/register", "application/json", bytes.NewReader(reqBody))
	if err != nil {
		t.Fatalf("Failed to request register: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("Unexpected status code: got %v, want %v", resp.StatusCode, http.StatusOK)
	}

	var result ResponseData
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		t.Fatalf("Failed to decode response: %v", err)
	}

	if result.Code != 200 {
		t.Fatalf("Unexpected response code: got %v, want %v", result.Code, 200)
	}
	t.Logf("Registration successful: %v", result.Data)
}

func TestLogin(t *testing.T) {
	// 测试登录接口
	loginParams := LoginParams{
		Username: "testuser",
		Password: "password123",
	}

	reqBody, _ := json.Marshal(loginParams)
	resp, err := http.Post(apiBase+"/login", "application/json", bytes.NewReader(reqBody))
	if err != nil {
		t.Fatalf("Failed to request login: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("Unexpected status code: got %v, want %v", resp.StatusCode, http.StatusOK)
	}

	var result ResponseData
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		t.Fatalf("Failed to decode response: %v", err)
	}

	if result.Code != 200 {
		t.Fatalf("Unexpected response code: got %v, want %v", result.Code, 200)
	}
	t.Logf("Login successful: %v", result.Data)
}
