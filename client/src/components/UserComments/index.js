import React, { useState, useEffect } from 'react';
import "./UserComments.scss"

import SearchCountry from '../SearchCountry';
import { useSearch } from '../../utils/CountryContext';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COUNTRY_COMMENTS } from '../../utils/queries'



export default function UserComments() {

  const { countryname } = useParams();
  const { loading, data } = useQuery(QUERY_COUNTRY_COMMENTS, {
    variables: { country: countryname },
  }
  );


  if (data) {
    console.log(data);

  }


  return (


    <div className='tickerWrapper'>
      <div className='tickerContent'>
        {(loading || data.commentCountry === null) ? (
          <div>Loading...</div>
        ) : (
          <>
            {data.commentCountry.map((comment, i) => {
              return (
                <div
                  key={i}
                  className='tickerText'
                >
                  <div
                  className='tickerText' key={i}>
                    {comment.commentText} - 
                    <span
                    className='tickerAuthor' key={i}
                    >
                      {comment.commentAuthor}
                    </span>
                  </div>
                </div>
              );
            })}


          </>
        )}

      </div>
    </div>

  )

}