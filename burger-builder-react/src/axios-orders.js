import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-9ef04.firebaseio.com/",
});

export default instance;
