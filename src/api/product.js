import api from "../utils/apiCaller";

const getProducts = async () => {
  try {
    const response = await api.get("/v1/products");
    return response.data;
  } catch (error) {
    return [];
  }
};

export const Product = {
  getProducts,
};
