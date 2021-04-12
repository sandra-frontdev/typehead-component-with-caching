// Caching function
// Checking is cache supported
let isCacheSupported = "caches" in window; // Returning true or false
console.log(isCacheSupported);

// Function for initializing cache if cash doesn't exist, to arhieve this we're going to use promise
const setCache = function (cacheName, url) {
  caches.open(cacheName).then((cache) => {
    cache.add(url).then(() => {
      console.log("Data is cached");
    });
  });
};

export { setCache };
