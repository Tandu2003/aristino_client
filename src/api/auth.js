import api from "../utils/apiCaller";

// Lấy thông tin người dùng
const getLogin = async (data) => {
  const response = await api.post("/auth/login", data);
  return response;
};

// Xử lý đăng nhập
const login = async (data) => {
  const response = await api.post("/auth/login", data);
  return response;
};

// Xử lý đăng xuất
const logout = async () => {
  const response = await api.post("/auth/logout");
  return response;
};

// Xử lý đăng ký
const register = async (data) => {
  const response = await api.post("/auth/register", data);
  return response;
};

export const Auth = {
  getLogin,
  login,
  logout,
  register,
};
