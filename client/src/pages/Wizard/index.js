import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './Wizard.scss'


export default function Wizard() {
    
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
                        <input type="range" id="nbmcUser" name="Nutrition and Basic Medical Care" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                        <label htmlFor="wsUser">Water and Sanitation</label>
                        <input type="range" id="wsUser" name="Water and Sanitation" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                        <label htmlFor="shUser">Shelter</label>
                        <input type="range" id="shUser" name="Nutrition and Basic Medical Care" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                        <label htmlFor="psUser">Personal Safety</label>
                        <input type="range" id="psUser" name="Nutrition and Basic Medical Care" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                    </section>
                    <section className='wellbeing'>
                        <label htmlFor="abkUser">Access to Basic Knowledge</label>
                        <input type="range" id="abkUser" name="Access to Basic Knowledge" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                        <label htmlFor="aicUser">Access to Information and Communications</label>
                        <input type="range" id="aicUser" name="Access to Inhformation and Communications" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                        <label htmlFor="hwUser">Health and Wellness</label>
                        <input type="range" id="hwUser" name="Health and Wellness" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                        <label htmlFor="eqUser">Environmental Quality</label>
                        <input type="range" id="eqUser" name="Environmental Quality" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                    </section>
                        
                    <section className='opportunity'>
                        <label htmlFor="prUser">Personal Rights</label>
                        <input type="range" id="prUser" name="Personal Rights" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                        <label htmlFor="pfcUser">Personal Freedom and Choice</label>
                        <input type="range" id="pfcUser" name="Personal Freedom and Choice" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                        <label htmlFor="inclUser">Inclusiveness</label>
                        <input type="range" id="inclUser" name="Inclusiveness" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                        <label htmlFor="aaeUser">Access to Advanced Education</label>
                        <input type="range" id="aaeUser" name="Access to Advanced Education" min=".6" max="1.4" step=".2" defaultValue="1.0"/>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}