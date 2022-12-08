

 // Upsplash API call
 export const searchImage = async (query) => { 
    return fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  };
