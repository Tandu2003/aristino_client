import api from "../utils/apiCaller";

const getSliders = async () => {
  try {
    const response = await api.get("/v1/sliders");
    return response.data;
  } catch (error) {
    return [];
  }
};

export const Slider = {
  getSliders,
};
