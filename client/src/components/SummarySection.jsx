import React from "react"
import '../pages/Form/Form.scss';

const food = 'The Global Food Security Index takes into account: affordability, availability, quality, safety, sustainability, and adaptation to provide a complete picture of a nations food security. ';
const water = 'Millions of people around the globe struggle with access to clean water. This can be extremely important when choosing a new home. In fact, as many as 1 in 3 people globally do not have access to clean drinking water. An Environmental Performance Index can be applied to each country to measure their quality of drinking water. The EPI calculates a score out of 100, wiith 100 being the highest rank a country can receive. ';
const housing = 'The housing affordability index takes into account the average income within a country and compares it to the average cost of housing. This index serves as an overview of housing availability for the average citizen. ';

export let SummarySection = ({ selections }) => {
    //North America -FOOD QUALITY
    if (selections.first === "North America" && selections.second === 'Food Quality') {
        return (
            <div>
                <h1>CANADA</h1>
                <p>If food quality is the most important factor in selecting a new home, Canada would be the best fit for you. {food} 
                Canada ranks 7th in the world overall and 1st in North America in terms of food security. 
                Not only does Canada have an extremely stable supply of food, but The Canadian Food Inspection Agency 
                also provides a strong framework for food safety in the country. Because Canada is such a hot spot for immigrants, 
                larger cities like Toronto and Montreal cultivate a variety of international food selections and are home to some 
                of the best restaurants in the world.</p>
            </div>
        )
    }
    //North America -CLEAN WATER
    if (selections.first === "North America" && selections.second === 'Clean Water') {
        return (
            <div>
                <h1>CANADA</h1>
                <p>{water} Canada has an overall EPI ranking of 88/100. Canada has the best drinking water in North America and 24th globally.</p>
            </div>
        )
    }
    //North America -ACCESS TO HOUSING
    if (selections.first === "North America" && selections.second === 'Access to Housing') {
        return (
            <div>
                <h1>PUERTO RICO</h1>
                <p>{housing} Puerto Rico has the most affordable housing in North America.</p>
            </div>
        )
    }
    //North America -SAFETY
    if (selections.first === "North America" && selections.second === 'Safety') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //North America -Free Press
    if (selections.first === "North America" && selections.second === 'Free Press') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //North America -Healthcare
    if (selections.first === "North America" && selections.second === 'Healthcare') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //North America -Environmental Quality
    if (selections.first === "North America" && selections.second === 'Environmental Quality') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //North America -Individual Rights
    if (selections.first === "North America" && selections.second === 'Individual Rights') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //North America -Personal Freedom and Choice
    if (selections.first === "North America" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //North America -Access to Advanced Education
    if (selections.first === "North America" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //South America -FOOD QUALITY
    if (selections.first === "South America" && selections.second === 'Food Quality') {
        return (
            <div>
                <h1>CHILE</h1>
                <p>If food quality is the most important factor in selecting a new home, Chile would be the best fit for you. {food} 
                Chile ranks 25th in the world overall and 1st in South America in terms of food security.
                Due to Chile's high income level- less than 3% of the population suffers from undernourishment.
                Although you likely wouldn't have to worry about the accessibility of food in Chile, the country does fall a little
                short in providing high nutrient food.
                  </p>
            </div>
        )
    }
    //South America -CLEAN WATER
    if (selections.first === "South America" && selections.second === 'Clean Water') {
        return (
            <div>
                <h1>CHILE</h1>
                <p>{water} Chile has an overall EPI ranking of 68.1/100. Chile has the best drinking water in South America and 38th globally.</p>
            </div>
        )
    }
    //South America -ACCESS TO HOUSING
    if (selections.first === "South America" && selections.second === 'Access to Housing') {
        return (
            <div>
                <h1>BOLIVIA</h1>
                <p>{housing} Bolivia has the most affordable housing in South America.</p>
            </div>
        )
    }
    //South America -SAFETY
    if (selections.first === "South America" && selections.second === 'Safety') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //South America -Free Press
    if (selections.first === "South America" && selections.second === 'Free Press') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //South America -Healthcare
    if (selections.first === "South America" && selections.second === 'Healthcare') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //South America -Environmental Quality
    if (selections.first === "South America" && selections.second === 'Environmental Quality') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //South America -Individual Rights
    if (selections.first === "South America" && selections.second === 'Individual Rights') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //South America -Personal Freedom and Choice
    if (selections.first === "South America" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //South America -Access to Advanced Education
    if (selections.first === "South America" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Europe -FOOD QUALITY
    if (selections.first === "Europe" && selections.second === 'Food Quality') {
        return (
            <div>
                <h1>FINLAND</h1>
                <p>Finland not only ranks 1st in Europe in overall food security, but first in the globe. {food} 
                Finland has extraordinarily high nutrition standards and imports quite a few products.
                In addition to their high quality of food, Finland also teaches nutrition in their school systems to ensure a food educated populous.</p>
            </div>
        )
    }
    //Europe -CLEAN WATER
    if (selections.first === "Europe" && selections.second === 'Clean Water') {
        return (
            <div>
                <h1>SWITZERLAND</h1>
                <p>{water} Luckily,Switzerland has some of the cleanest water in the world. Switzerland boasts an impressive 100/100 EPI score, tied with Finland, Iceland, the Netherlands, Norway, and the United Kingdom. </p>
            </div>
        )
    }
    //Europe -ACCESS TO HOUSING
    if (selections.first === "Europe" && selections.second === 'Access to Housing') {
        return (
            <div>
                <h1>DENMARK</h1>
                <p>{housing} Denmark has the most affordable housing in Europe. However, it is important to note that there are protections against purchasing property if you are not a citizen.</p>
            </div>
        )
    }
    //Europe -SAFETY
    if (selections.first === "Europe" && selections.second === 'Safety') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Europe -Free Press
    if (selections.first === "Europe" && selections.second === 'Free Press') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Europe -Healthcare
    if (selections.first === "Europe" && selections.second === 'Healthcare') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Europe -Environmental Quality
    if (selections.first === "Europe" && selections.second === 'Environmental Quality') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Europe -Individual Rights
    if (selections.first === "Europe" && selections.second === 'Individual Rights') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Europe -Personal Freedom and Choice
    if (selections.first === "Europe" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Europe -Access to Advanced Education
    if (selections.first === "Europe" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Asia -FOOD QUALITY
    if (selections.first === "Asia" && selections.second === 'Food Quality') {
        return (
            <div>
                <h1>JAPAN</h1>
                <p>Japan ranks 1st in Asia and 6th globally in terms of food security. {food} 
                Pollution is the largest issue that Japan faces in terms of food security.
                The country's food education programs, however, are some of the best in the world.
                Additionally, Japan boosts one of the lowest obesity ratings in the world, which
                is often contributed their focus on nutrition.
                </p>
            </div>
        )
    }
    //Asia -CLEAN WATER
    if (selections.first === "Asia" && selections.second === 'Clean Water') {
        return (
            <div>
                <h1>JAPAN</h1>
                <p>{water} Japan has an EPI ranking of 95.0 out of 100.</p>
            </div>
        )
    }
    //Asia -ACCESS TO HOUSING
    if (selections.first === "Asia" && selections.second === 'Access to Housing') {
        return (
            <div>
                <h1>SAUDI ARABIA</h1>
                <p>{housing} Saudi Arabia has the most affordable housing in the world.</p>
            </div>
        )
    }
    //Asia -SAFETY
    if (selections.first === "Asia" && selections.second === 'Safety') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Asia -Free Press
    if (selections.first === "Asia" && selections.second === 'Free Press') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Asia -Healthcare
    if (selections.first === "Asia" && selections.second === 'Healthcare') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Asia -Environmental Quality
    if (selections.first === "Asia" && selections.second === 'Environmental Quality') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Asia -Individual Rights
    if (selections.first === "Asia" && selections.second === 'Individual Rights') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Asia -Personal Freedom and Choice
    if (selections.first === "Asia" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Asia -Access to Advanced Education
    if (selections.first === "Asia" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //AFRICA -FOOD QUALITY
    if (selections.first === "Africa" && selections.second === 'Food Quality') {
        return (
            <div>
                <h1>MOROCCO</h1>
                <p>Morocco ranks first in Africa in terms of food security, however, 57th globally. {food}
                The obesity rating in Morocco is close to a quarter of the population.
                Generally, people of lower economic status can have difficulty securing food.
                The largest barriers to food insecurity in Morocco come from government commitment to
                food security policies and the volatility of their agricultural production.</p>
            </div>
        )
    }
    //AFRICA -CLEAN WATER
    if (selections.first === "Africa" && selections.second === 'Clean Water') {
        return (
            <div>
                <h1>MAURITIUS</h1>
                <p>{water} Mauritius has an overall EPI ranking of 65.5/100. Mauritius has the best drinking water in Africa and 44th globally.</p>
            </div>
        )
    }
    //AFRICA -ACCESS TO HOUSING
    if (selections.first === "Africa" && selections.second === 'Access to Housing') {
        return (
            <div>
                <h1>South Africa</h1>
                <p>{housing} South Africa has the most affordable housing in Africa and is the second most affordable country to buy a home in the world.</p>
            </div>
        )
    }
    //AFRICA -SAFETY
    if (selections.first === "Africa" && selections.second === 'Safety') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //AFRICA -Free Press
    if (selections.first === "Africa" && selections.second === 'Free Press') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //AFRICA -Healthcare
    if (selections.first === "Africa" && selections.second === 'Healthcare') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //AFRICA -Environmental Quality
    if (selections.first === "Africa" && selections.second === 'Environmental Quality') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //AFRICA -Individual Rights
    if (selections.first === "Africa" && selections.second === 'Individual Rights') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //AFRICA -Personal Freedom and Choice
    if (selections.first === "Africa" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //AFRICA -Access to Advanced Education
    if (selections.first === "Africa" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    
    //Oceania -FOOD QUALITY
    if (selections.first === "Oceania" && selections.second === 'Food Quality') {
        return (
            <div>
                <h1>NEW ZEALAND</h1>
                <p>New Zealand ranks 14th globally and 1st in the Oceania region in terms of food security. {food}
                New Zealand actively works to make their food affordable and sustainable, however, they fall
                slightly behind on nutritional standards.</p>
            </div>
        )
    }
    //Oceania -CLEAN WATER
    if (selections.first === "Oceania" && selections.second === 'Clean Water') {
        return (
            <div>
                <h1>AUSTRALIA</h1>
                <p>{water} Australia has an overall EPI ranking of 87/100. Australia has the best drinking water in Oceania and 25th globally.</p>
            </div>
        )
    }
    //Oceania -ACCESS TO HOUSING
    if (selections.first === "Oceania" && selections.second === 'Access to Housing') {
        return (
            <div>
                <h1>AUSTRALIA</h1>
                <p>{housing} Australia has the most affordable housing in Oceania and ranks 15th globally for housing affordability.</p>
            </div>
        )
    }
    //Oceania -SAFETY
    if (selections.first === "Oceania" && selections.second === 'Safety') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Oceania -Free Press
    if (selections.first === "Oceania" && selections.second === 'Free Press') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Oceania -Healthcare
    if (selections.first === "Oceania" && selections.second === 'Healthcare') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Oceania -Environmental Quality
    if (selections.first === "Oceania" && selections.second === 'Environmental Quality') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Oceania -Individual Rights
    if (selections.first === "Oceania" && selections.second === 'Individual Rights') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Oceania -Personal Freedom and Choice
    if (selections.first === "Oceania" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
    //Oceania -Access to Advanced Education
    if (selections.first === "Oceania" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
                <h1>Ghana</h1>
                <p>Ghana is a beautiful country in West Africa</p>
            </div>
        )
    }
}