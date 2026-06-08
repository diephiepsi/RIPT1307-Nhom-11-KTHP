import axios from "axios";
import { storage } from "./storage";

const clientBase =
  process.env.API_BASE_URL ||
  process.env.VITE_API_BASE_URL ||
  process.env.UMI_APP_API_URL ||
  "https://ript1307-backend.onrender.com/api";

export const api = axios.create({
  baseURL: clientBase,
  // 1. TĂNG TIMEOUT TỪ 15000 -> 30000ms (30 giây)
  // Để đủ thời gian chờ backend Render thức dậy trong lần gọi đầu tiên
  timeout: 30000,
});

// Request Interceptor: Gắn token vào mỗi request gửi đi
api.interceptors.request.use((config) => {
  const token = storage.getToken();

  if (token && config.headers) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
});

// 2. THÊM RESPONSE INTERCEPTOR: Xử lý lỗi trả về từ Backend
api.interceptors.response.use(
  (response) => {
    // Nếu request thành công, trả về response bình thường
    return response;
  },
  (error) => {
    // Nếu bị lỗi 401 (Chưa xác thực / Token hết hạn)
    if (error.response && error.response.status === 401) {
      console.warn(
        "Lỗi 401: Token không hợp lệ hoặc đã hết hạn. Đang chuyển hướng...",
      );

      // Xóa token cũ để dọn dẹp
      // Lưu ý: Đổi "clearToken" thành tên hàm xóa token thực tế trong file storage.ts của bạn
      if (storage.clearToken) {
        storage.clearToken();
      } else if (storage.removeToken) {
        storage.removeToken();
      }

      // Tự động đá người dùng về trang đăng nhập để ngắt vòng lặp API
      // Kiểm tra pathname để tránh lặp vô tận nếu đang ở sẵn trang login
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    // Ném lỗi ra ngoài để các hàm gọi API (catch) có thể xử lý thêm nếu cần
    return Promise.reject(error);
  },
);
