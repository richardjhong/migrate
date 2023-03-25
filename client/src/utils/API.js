// Unsplash API call
export const searchImage = async (query) => { 
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&orientation=squarish&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  
    if (!response.ok) {
      throw new Error(`No images found for ${query}`);
    }
  
    const items = await response.json();
  
    const newImgs = [];
    items.results.forEach(item => {
      const newImg = {
        src: item.urls.regular,
        alt: item.alt_description,
      };
      newImgs.push(newImg);
    });
  
    const newSearch = {
      name: query,
      imgs: newImgs
    }
  
    return newSearch;
  }
  catch (err) {
    console.log(err);
  }
};
