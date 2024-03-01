import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const api = {
  getCategory: () => {
    const response = axios.get(`${BASE_URL}/category`);
    return response;
  },
  addCategory: (data) => {
    const response = axios.post(`${BASE_URL}/category`, data);
    return response;
  },
};
