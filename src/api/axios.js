import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.fruityvice.com/api/fruit/all",
  headers: { "Content-Type": "application/json" }
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export default instance;
