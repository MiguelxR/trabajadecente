import axios from "axios";

const seguridadAPI = axios.create({
  baseURL: "http://88b5-181-66-151-79.ngrok.io/api-seguridad/",
});

export default seguridadAPI;
