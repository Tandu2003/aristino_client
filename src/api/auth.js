import api from "../utils/apiCaller";

const getLogin = async () => {
  const response = await api.get("/auth/login");
  return response;
};

const login = async (account) => {
  const response = await api.post("/auth/login", account);
  return response;
};

const register = async (account) => {
  const response = await api.post("/auth/register", account);
  return response;
};

const logout = async () => {
  const response = await api.post("/auth/logout");
  return response;
};

const loginGoogle = async (account) => {
  const response = await api.post("/auth/login-google", account);
  return response;
};

export const Auth = {
  getLogin,
  login,
  register,
  logout,
  loginGoogle,
};
