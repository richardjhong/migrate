
import React, { useState, useEffect } from 'react';
import './SingleCountryHeader.scss';
import { useParams } from 'react-router-dom';



const SingleCountryHeader = () => {

  const { countryname: countryParam } = useParams();

  const [imgs, setImgs] = useState([]);
  useEffect(() => {
     fetch(`https://api.unsplash.com/search/photos?page=1&orientation=squarish&query=${countryParam}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        .then((response) => response.json())
        .then((items) => {
           console.log(items);
           const newImgs = [];
           items.results.forEach(item => {
             const newImg = {
               src: item.urls.regular,
               alt: item.alt_description,
             };
            newImgs.push(newImg);
       
           });
           setImgs(newImgs);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  

  return (
    <>
      {/* <div className='singleCountHeadCont'> */}
        <div className="singleCountryHead">

        {imgs.map((val,i) => {
              return (
                <img
                  key={i}
                  className=""
                  src={val.src}
                  alt={val.alt}
                />
              );
            })}
          </div>
          <div className='singleCountryHeadTitle'>
        <h2 >{countryParam}</h2>
          </div>
        </>
  );
};


export default SingleCountryHeader;
