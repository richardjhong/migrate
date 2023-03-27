// import React, { useState, useEffect } from 'react';
import React from "react";
import "./UserComments.scss"
// import SearchCountry from '../SearchCountry';
// import { useSearch } from '../../utils/CountryContext';
// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COUNTRY_COMMENTS } from '../../utils/queries'



export default function UserComments() {


    const { countryname } = useParams();
    const { loading, data } = useQuery(QUERY_COUNTRY_COMMENTS, {
        variables: { country: countryname },
    });

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
                                    className='tickerTextContain'
                                >
                                    <div
                                        className='tickerText' key={i}>
                                        {comment._id} <br/> - 
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