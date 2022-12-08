
 // Upsplash API call
 export const searchImage = async (query) => { 
    return fetch(`https://api.unsplash.com/search/photos?page=1&orientation=squarish&query=${query}&client_id=lKz4snBS1S2n10pi0v4VI7Yb8NleI7Q5OVXI0R6G42s`);
  };
