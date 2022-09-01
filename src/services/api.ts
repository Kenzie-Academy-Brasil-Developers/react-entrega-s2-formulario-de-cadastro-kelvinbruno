import axios from "axios";

export const KenziehubAPI = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
 
});

const token = window.localStorage.getItem("@kenziehub:token");
export const KenziehubAPIWithToken = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    Autorization: `Bearer ${token}`,
  },
  timeout: 5000,
});