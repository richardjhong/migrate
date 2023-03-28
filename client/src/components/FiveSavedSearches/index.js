import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_COUNTRY_SPIYEAR } from "../../utils/queries";
import PolarChart from "../CountryPolarChart";
import { useNavigate } from "react-router-dom";
// import './FiveSavedSearches.scss'

export default function FiveSavedSearches(country) {
    const [countryData, setCountryData] = useState([]);
    console.log(country.country + ' from fivesearches component')
    const { loading, error, data } = useQuery(QUERY_COUNTRY_SPIYEAR, {
        variables: { country: country.country, spiyear: "2022" },
    });
    let navigate = useNavigate();


    useEffect(() => {
        if (data) {
            setCountryData(data.singleCountrySearchHistory);
        }
    }, [data]);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='savedSearchCard' >
            <div >
                <h2 className="">
                    <button onClick={() => {
                        navigate(`/SingleCountry/${countryData.country}`);
                    }
                    }>{countryData.country}</button>
                    
                </h2>
                <div className='dashCountryScore'>
                    <p>Overall Rank:{countryData.rank_score_spi}</p> <p>Score:{countryData.score_spi}</p>
                </div>
                <PolarChart
                    fields={
                        {
                            "opp": countryData.score_opp,
                            "fow": countryData.score_fow,
                            "bhn": countryData.score_bhn,
                        }
                    }
                />
            </div>
        </div>


    );

}