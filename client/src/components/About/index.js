import React from "react";
import './about.scss';
import happyFamily from '../../images/family_outside.jpg';
import retiredCruise from '../../images/watching_the_boats.jpg'
import spiLogo from '../../images/SPI_logo.jpg'

export default function About() {

    return (
        <>
            <div className='about'>
                <section>
                    <h2>About MIGRATE</h2>
                    <div className='aboutSection'>
                        <div className='aboutText'>
                            <p>Now is the perfect time to capitalize on an ever shrinking world. With the growing acceptance of remote work and the relative ease of international travel, where you live doesn't have to be where you are right now.</p>
                            <p>Whether you're curious about other cultures or just feel the need for a change, the potential options in this huge world can be daunting. Our goal is to provide you with information that can possibly help you make decisions about where you want to live, work, and maybe even raise a family.</p>
                        </div>
                        <div className='aboutPics'>
                            <figure class='landscapeAboutPic'>
                                <img src={retiredCruise} alt='retirees looking at large cruise ship' />
                                <figcaption>Photo by <a href="https://unsplash.com/@juliusyls">Julius Yls</a> on <a href="https://unsplash.com">Unsplash</a></figcaption>
                            </figure>
                            <figure className="familyAboutPic">
                                <img src={happyFamily} alt='happy family portrait' />
                                <figcaption>Photo by <a href="https://unsplash.com/@josuemichelphotography">Josue Michel</a> on <a href="https://unsplash.com">Unsplash</a></figcaption>
                            </figure>

                        </div>
                    </div>
                </section>
                <section>
                    <h2>The Data</h2>
                    <div className="spiSection">
                        <div className='spiLogo'>
                            <img src={spiLogo} alt='logo for Social Progress Imperative' />
                        </div>
                        <div className='spiText'>
                            <p>The raw data you see here is adapted from the work of the <a href="https://www.socialprogress.org/" target="_blank" rel="noreferrer">Social Progress Imperative.</a> They are a non-profit organization based in Washington, D.C. that works to provide communities and leaders with information they need to deal with major challenges from disease to climate change. They use this data to compile ratings in 36 different categories.</p>
                        </div>
                        <div className='spiText2'>
                            <p>We want to share this data with you in a way that will help give you insight in places that you may want to live or work. Keep in mind every person has different wants and needs so these recommendations are just that: recommedations. Ultimately you have to make the best decision for you and your family. We just hope we can help you with good information.</p>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}