import axios from "axios";
import { setCache } from "../js/SetCacheFunction";
import { getCache } from "../js/GetCachedDataFunction";

let fruits = {};
let fruitName;

const proxyUrl = "https://salty-ridge-10349.herokuapp.com/";
const apiUrl = "https://www.fruityvice.com/api/fruit/all";

let fruitsArray = [];

const getFruits = async () => {
  try {
    const response = await axios.get(proxyUrl + apiUrl);
    fruits = response.data;
    fruitName = fruits.map((fruit) => fruit.name);

    fruitsArray = fruitName;
    console.log(fruitsArray);
    setCache("fruitItemCached", proxyUrl + apiUrl);
  } catch (error) {
    console.log("no fruits", error);
  }
};

caches
  .has("fruitItemCached")
  .then(function (hasCache) {
    if (!hasCache) {
      getFruits();
      console.log("Data from the api!");
    } else {
      const setCachedData = async function () {
        let data = await getCache("fruitItemCached", proxyUrl + apiUrl);
        let s = data.map((fruit) => fruit.name);
        return s;
      };

      fruitsArray = setCachedData();
      console.log("Data from the cache!");
    }
  })
  .catch(function () {});

export { fruitsArray };
