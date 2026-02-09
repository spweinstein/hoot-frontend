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
    const res = await fetch(`${BASE_URL}/${hootId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
