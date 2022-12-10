export const getSavedCountries = () => {
    const savedCountries = localStorage.getItem('saved_countries')
      ? JSON.parse(localStorage.getItem('saved_countries'))
      : [];
  
    return savedCountries;
  };
  
  export const saveCountries = (country) => {
    if (country.length) {
      localStorage.setItem('saved_countries', JSON.stringify(country));
    } else {
      localStorage.removeItem('saved_countries');
    }
  };
  // export const getSavedImgs = () => {
  //   const savedImgs = localStorage.getItem('saved_countryImgs')
  //     ? JSON.parse(localStorage.getItem('saved_countryImgs'))
  //     : [];
  
  //   return savedImgs;
  // };
  
  // export const saveImgs = (imgs) => {
  //   if (imgs.length) {
  //     localStorage.setItem('saved_countryImgs', JSON.stringify(imgs));
  //   } else {
  //     localStorage.removeItem('saved_countryImgs');
  //   }
  // };
  
  