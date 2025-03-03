import api from "../utils/apiCaller";

const getWishlist = async (userId) => {
  try {
    const response = await api.get(`/v1/wishlists/${userId}`);
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

const toggleWishlist = async (userId, productId) => {
  try {
    const response = await api.patch(`/v1/wishlists/${userId}/${productId}`);
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const Wishlist = {
  getWishlist,
  toggleWishlist,
};
