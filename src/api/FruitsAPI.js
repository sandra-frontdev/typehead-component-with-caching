import axios from "axios";
import { setCache } from "../js/SetCacheFunction";
import { getCache } from "../js/GetCachedDataFunction";

let fruits = {};
let fruitName;

const proxyUrl = "https://salty-ridge-10349.herokuapp.com/";
const apiUrl = "https://www.fruityvice.com/api/fruit/all";

const getFruits = async () => {
  try {
    const response = await axios.get(proxyUrl + apiUrl);
    fruits = response.data;
    fruitName = fruits.map((fruit) => fruit.name);
    setCache("fruitsResults");
    return fruitName;
  } catch (error) {
    console.log("no fruits", error);
  }
};

let fruitsArray = [];

caches
  .has("fruitsResults")
  .then(function (hasCache) {
    if (!hasCache) {
      fruitsArray = getFruits();
      console.log("Data from the api!");
    } else {
      const setCachedData = async function () {
        let data = await getCache("fruitsResults", proxyUrl + apiUrl);
        let s = data.map((fruit) => fruit.name);
        return s;
      };

      fruitsArray = setCachedData();
      console.log("Data from the cache!");
    }
  })
  .catch(function () {});

export { fruitsArray };
