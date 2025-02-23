import api from "../utils/apiCaller";

const getProducts = async () => {
  const response = await api.get("/v1/products");
  return response.data;
};

export const Product = {
  getProducts,
};
