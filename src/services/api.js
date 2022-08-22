import axios from "axios";

export const KenziehubAPI = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/sessions",
  timeout: 5000,
});
