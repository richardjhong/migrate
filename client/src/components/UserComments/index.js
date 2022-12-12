
import React, { useState, useEffect } from 'react';
import "./UserComments.scss"

import SearchCountry from '../../components/SearchCountry';
import { useSearch } from '../../utils/CountryContext';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COUNTRY_COMMENTS} from '../../utils/queries'


// const Comments = () => {
//     const { countryname } = useParams();
//     const { loading, data } = useQuery(QUERY_COUNTRY_COMMENTS, {
//     variables: {country: countryname},
//     }
//     );
// }

// const comments=[{commentText: 'I really love the festivals in Galway', commentAuthor:'Mark'}, {commentText:'You can get by with English in Paris, but you might struggle in the countryside.', commentAuthor:'Buffy'}, {commentText:"Best Indian food in the UK is Dishoom, so move somewhere close to there.", commentAuthor:"River"}]
// const ticker = comments.map(({commentText, commentAuthor}) => 
//     (<div key={commentText +'1'}><div className='tickerText' key={commentText +'2'}>{commentText} - <span className='tickerAuthor' key={commentText +'3'}>{commentAuthor}</span></div></div>)
// )
// console.log(comments)

export default function UserComments() {

        const { countryname } = useParams();
        const { loading, data } = useQuery(QUERY_COUNTRY_COMMENTS, {
        variables: {country:countryname},
        }
        );
 
//testing
    console.log(data)
    
    const ticker = !loading && data.map(({commentText, commentAuthor}) => 
    (<div key={commentText +'1'}><div className='tickerText' key={commentText +'2'}>{commentText} - <span className='tickerAuthor' key={commentText +'3'}>{commentAuthor}</span></div></div>)
 )
 console.log('ticker')
 

    // const { searches } = useSearch();
    // const { country: countryParam } = useParams();
    // const navigate = useNavigate();

    // let index = '';
    // if (countryParam) {
    //     index = searches.findIndex(country => country.name === countryParam);
    // }

    return (


        <div className='tickerWrapper'>
            <div className='tickerContent'>
            {/* {loading || ticker===undefined ? (
            <div>Loading...</div>
          ) : (
            {ticker}
              
            
          )} */}
                
            </div>
        </div>
    )

}

