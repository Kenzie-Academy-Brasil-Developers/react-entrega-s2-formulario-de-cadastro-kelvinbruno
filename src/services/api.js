import axios from "axios";

export const KenziehubAPI = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 5000,
});
