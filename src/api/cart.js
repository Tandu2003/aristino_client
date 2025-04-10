import api from "../utils/apiCaller";

const getCart = async (userId) => {
  try {
    const response = await api.get(`/v1/carts/${userId}`);
    return response.data;
  } catch (error) {
    return [];
  }
};

const addCart = async (userId, productId, color, size) => {};

export const Cart = {
  getCart,
  addCart,
};
