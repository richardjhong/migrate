import CountryCards from "../CountryCards";
import "./SingleCountry.scss";

export default function SingleCountry() {

    return(
    <div className='containerCenter'>
        <div className='countryCardContainer'>
            <CountryCards />
        </div>
    </div>
    )
}