import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useQuery } from "@apollo/client";
import { QUERY_COUNTRY_ADJUST } from "../../utils/queries";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import './Wizard.scss'

export default function Wizard() {

    const [buttonClicked, setButtonClicked] = useState(false);
    const [refreshData, setRefreshData] = useState(false)

    const handleClick = () => {
        setButtonClicked(true);
        setRefreshData(!refreshData);
    };

    return (
        <>
            <Header />
            <div id='wizContainer'>
                <section className='wizDirections'>
                    <h2>Ranking Wizard</h2>
                    <p>In order to refine your choices, use the sliders below to adjust the weight given to each category. When you're happy with the weights assigned to each category, press the calculate button below the sliders. Your choices will recalculate every country scores based on your personal weights and return your top 5 countries. </p>
                    <p>NOTE: This will only show you countries that have values for all of the categories. If a country is missing any data, it won't show up in any requests.</p>
                    <p>Don't worry. There are no 'zeroes' in the Wizard. Even if you move a slider all the way to the left, it will still take it into account. You're just giving more or less weight to certain categories.</p>
                </section>
                <div className='wizSliders'>
                    <section className='humanNeeds'>
                        <label htmlFor="nbmcUser">Nutrition and Basic Medical Care</label>
                        <input type="range" id="nbmcUser" name="Nutrition and Basic Medical Care" min="1" max="5" step="1" defaultValue="3.0" />
                        <label htmlFor="wsUser">Water and Sanitation</label>
                        <input type="range" id="wsUser" name="Water and Sanitation" min="1" max="5" step="1" defaultValue="3.0" />
                        <label htmlFor="shUser">Shelter</label>
                        <input type="range" id="shUser" name="Nutrition and Basic Medical Care" min="1" max="5" step="1" defaultValue="3.0" />
                        <label htmlFor="psUser">Personal Safety</label>
                        <input type="range" id="psUser" name="Nutrition and Basic Medical Care" min="1" max="5" step="1" defaultValue="3.0" />
                    </section>
                    <section className='wellbeing'>
                        <label htmlFor="abkUser">Access to Basic Knowledge</label>
                        <input type="range" id="abkUser" name="Access to Basic Knowledge" min="1" max="5" step="1" defaultValue="3.0" />
                        <label htmlFor="aicUser">Access to Information and Communications</label>
                        <input type="range" id="aicUser" name="Access to Inhformation and Communications" min="1" max="5" step="1" defaultValue="3.0" />
                        <label htmlFor="hwUser">Health and Wellness</label>
                        <input type="range" id="hwUser" name="Health and Wellness" min="1" max="5" step="1" defaultValue="3.0" />
                        <label htmlFor="eqUser">Environmental Quality</label>
                        <input type="range" id="eqUser" name="Environmental Quality" min="1" max="5" step="1" defaultValue="3.0" />
                    </section>

                    <section className='opportunity'>
                        <label htmlFor="prUser">Personal Rights</label>
                        <input type="range" id="prUser" name="Personal Rights" min="1" max="5" step="1" defaultValue="3.0" />
                        <label htmlFor="pfcUser">Personal Freedom and Choice</label>
                        <input type="range" id="pfcUser" name="Personal Freedom and Choice" min="1" max="5" step="1" defaultValue="3" />
                        <label htmlFor="inclUser">Inclusiveness</label>
                        <input type="range" id="inclUser" name="Inclusiveness" min="1" max="5" step="1" defaultValue="3.0" />
                        <label htmlFor="aaeUser">Access to Advanced Education</label>
                        <input type="range" id="aaeUser" name="Access to Advanced Education" min="1" max="5" step="1" defaultValue="3.0" />
                    </section>
                    <section className="calcButton">
                        <button onClick={handleClick}>Calculate</button>
                    </section>
                </div>
                {(buttonClicked ? <CountryRecs /> : <></>)}
            </div>
            <Footer />
        </>
    )
}

// function StoredCountryRecs(props) {
//     let navigate = useNavigate();
//     let topTen=JSON.parse(localStorage.getItem('topNationWizard'))
//     return (
//         <div className='topTenResults'>
//             <h2>Revised Country Rankings</h2>
            
//             {topTen.map((country, i) => (
//                 <div className='topTenCard' key={i}>

//                     <button className='topCountryButton' onClick={() => navigate(`/SingleCountry/${country.countryName}`)} ><h2>{country.countryName}</h2><span className='clickDirections'>Click for more information...</span></button>


//                     <div className='revSPI'><h3>Revised score: {country.revisedSPI}</h3></div>
//                     <div className='origSPI'><h3>Original score: {country.origSPI}</h3></div>
//                 </div>
//             ))}
//         </div>
//     )
// }

function CountryRecs() {
    let navigate = useNavigate();
    let topTen = [];
    let revisedCountryRanks = [];
    
    const nbmcUser = document.getElementById('nbmcUser');
    const wsUser = document.getElementById('wsUser');
    const shUser = document.getElementById('shUser');
    const psUser = document.getElementById('psUser');
    const abkUser = document.getElementById('abkUser');
    const aicUser = document.getElementById('aicUser');
    const hwUser = document.getElementById('hwUser');
    const eqUser = document.getElementById('eqUser');
    const prUser = document.getElementById('prUser');
    const pfcUser = document.getElementById('pfcUser');
    const inclUser = document.getElementById('inclUser');
    const aaeUser = document.getElementById('aaeUser');
    const [spiyear, setSpiyear] = useState("2022");
    const { loading, error, data } = useQuery(QUERY_COUNTRY_ADJUST, {
        variables: { spiyear: spiyear },
    });

    let countryData = null;

    if (data) {
        countryData = data.countriesAdjust;
        for (let i = 0; i < countryData.length; i++) {
            let revNmbc = (countryData[i].bhn.score_nbmc) * nbmcUser.value;
            let revPs = (countryData[i].bhn.score_ps) * psUser.value;
            let revSh = (countryData[i].bhn.score_sh) * shUser.value;
            let revWs = (countryData[i].bhn.score_ws) * wsUser.value;
            let revAbk = (countryData[i].fow.score_abk) * abkUser.value;
            let revAic = (countryData[i].fow.score_aic) * aicUser.value;
            let revEq = (countryData[i].fow.score_eq) * eqUser.value;
            let revHw = (countryData[i].fow.score_hw) * hwUser.value;
            let revAae = (countryData[i].opp.score_aae) * aaeUser.value;
            let revIncl = (countryData[i].opp.score_incl) * inclUser.value;
            let revPfc = (countryData[i].opp.score_pfc) * pfcUser.value;
            let revPr = (countryData[i].opp.score_pr) * prUser.value;
            let revSPI = ((revNmbc + revPs + revSh + revWs + revAbk + revAic + revEq + revHw + revAae + revIncl + revPfc + revPr) / 12).toFixed(2);
            revisedCountryRanks.push({ revisedSPI: revSPI, countryName: countryData[i].country, origSPI: countryData[i].score_spi });

        }
        revisedCountryRanks.sort((a, b) => b.revisedSPI - a.revisedSPI);
        topTen = revisedCountryRanks.slice(0, 10);
        localStorage.setItem("topNationWizard", JSON.stringify(topTen));


        return (
            <div className='topTenResults'>
                <h2>Revised Country Rankings</h2>
                
                {topTen.map((country, i) => (
                    <div className='topTenCard' key={i}>

                        <button className='topCountryButton' onClick={() => navigate(`/SingleCountry/${country.countryName}`)} ><h2>{country.countryName}</h2><span className='clickDirections'>Click for more information...</span></button>


                        <div className='revSPI'><h3>Revised score: {country.revisedSPI}</h3></div>
                        <div className='origSPI'><h3>Original score: {country.origSPI}</h3></div>
                    </div>
                ))}
            </div>
        )

    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

}