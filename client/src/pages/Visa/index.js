import Header from "../../components/Header";

import Footer from "../../components/Footer";
import visaImage from "../../images/global-residence-index-yMhTgr2zdVM-unsplash.jpg"
import './Visa.scss'


export default function Visa() {

    return (

        <>
            <Header />
            <main className='visaMain'>
                <div className="visaContainer">
                    <section className="visaInfo">
                        <h2>Next steps...</h2>
                        <p>Remember, you can't just pick up and move to another country without their permission. You will need to get a Visa if you want to live or work in another country that you're not a citizen of. </p>
                        <p>Visa requirements vary by nation and change on a yearly basis, so keeping you up-to-date with accurate information is beyond the scope of what we can do here. This is just a source to help you make decisions.</p>
                    </section>
                        <div className="visaImage">
                        <figure>
                            <img src={visaImage} alt="open visa with stamps" />
                            <figcaption>Photo by <a href="https://unsplash.com/@globalresidenceindex">Global Residence Index</a> on <a href="https://unsplash.com">Unsplash</a>
                            </figcaption>
                        </figure>
                        </div>
                    <section className="visaInfoRecs">
                        <h2>The next step is up to you.</h2>
                        <p>There are many options for work visas and permanent residence visas. If you're get a job with a company in another country, they can often sponsor you to live there with a work visa. Sometimes you may qualify for a Visa is one of your direct relatives was a citizen of a country. There are even Golden Visas in some countries that will provide you with a Permanent Residence Visa if you simply invest in the country or buy a home there as your new primary residence. Then again if you have a European Union Passport, you can live and work in any of the Schengen Countries.</p>
                        <p>While all these options exist, in all honesty, most of them are not easy to navigate on your own. We highly recommend you do your own research and contact other sources who can help you on your journey.</p>

                        <p>Here are a few resources to get you started: </p>
                        <ul>
                            <li><a href="https://www.gov.uk/browse/visas-immigration/settle-in-the-uk" traget="_blank" rel='referrer'>United Kingdom Visa Information</a></li>
                            <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html" target="_blank" rel="noreferrer">Canadian Immigration</a></li>
                            <li><a href="https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/irish-residence-permit/" target="_blank" rel="noreferrer">Irish Residence</a></li>
                            <li><a href="https://internationalliving.com/" target="_blank" rel="noreferrer">International Living</a></li>
                        </ul>
                   </section>
                    
                </div>
            </main>
            <Footer />
        </>
    )
}