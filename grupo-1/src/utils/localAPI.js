import axios from "axios";

const localAPI = axios.create({
  baseURL: "http://localhost:1337/",
});

export default localAPI;
