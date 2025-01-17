import api from "../utils/apiCaller";

const getAccount = async () => {
  const response = await api.get("/v1/accounts");
  return response.data;
};
export const Account = {
  getAccount,
};
