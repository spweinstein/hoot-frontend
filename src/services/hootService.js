import { data } from "react-router";
import api from "./apiConfig.js";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hoots`;

export const getHoots = async () => {
  try {
    const { data } = await api.get("/hoots");
    if (data.err) throw new Error(data.err);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const show = async (hootId) => {
  try {
    const { data } = await api.get(`${BASE_URL}/${hootId}`);
    if (data.err) throw new Error(data.err);
    return data;
  } catch (error) {
    console.log(error);
  }
};
