import api from "./apiConfig.js";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hoots`;

export const getHoots = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const show = async (hootId) => {
  try {
    const res = await fetch(`${BASE_URL}/${hootId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

export const deleteHoot = async (hootId) => {
  try {
    const { data } = await api.delete(`${BASE_URL}/${hootId}`);
    if (data.err) throw new Error(data.err);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const create = async (hootFormData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hootFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const createComment = async (hootId, commentFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${hootId}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateHoot = async (hootId, formData) => {
  try {
    const { data } = await api.put(`${BASE_URL}/${hootId}`, formData);
    if (data.err) throw new Error(data.err);
    return data;
  } catch (e) {
    console.log(e);
  }
};
