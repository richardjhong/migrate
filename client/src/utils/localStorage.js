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

  