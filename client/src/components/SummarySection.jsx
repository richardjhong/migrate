import React from "react"
import '../pages/Form/Form.scss';
import { useNavigate } from 'react-router-dom';


const food = 'The Global Food Security Index takes into account: affordability, availability, quality, safety, sustainability, and adaptation to provide a complete picture of a nations food security. ';
const water = 'Millions of people around the globe struggle with access to clean water. This can be extremely important when choosing a new home. In fact, as many as 1 in 3 people globally do not have access to clean drinking water. An Environmental Performance Index can be applied to each country to measure their quality of drinking water. The EPI calculates a score out of 100, wiith 100 being the highest rank a country can receive. ';
const housing = 'The housing affordability index takes into account the average income within a country and compares it to the average cost of housing. This index serves as an overview of housing availability for the average citizen. ';
const safe = 'The Global Peace Index ranks the safest and most peaceful countries in the world. This report is published annually by the Institute for Economics and Peace, which defines itself as "an independent, non-partisan, non-profit organization dedicated to shifting the world\'s focus to peace as a positive, achievable and tangible measure of human wellbeing and progress." The report researches countries to determine which are the safest and which are the most dangerous. A total of 163 countries are featured in the GPI report, which ranks each country\'s level of safety or danger based upon 23 different indicators. The indicators used to compile the GPI include the number of internal and external violent conflicts, level of distrust, political instability, potential for terrorist acts, number of homicides, and military expenditures as a percentage of GDP. These indicators are grouped into three broad categories: Ongoing International Conflict, Societal Safety and Security, and Militarization, and a score is calculated for each of the 163 nations featured in the report. The lower the score, the higher the nation is ranked in terms of safety. ';
const press = 'The World Press Freedom Index is a publication by the Reporters without Borders (RSF) as an advocacy tool based on the principles of emulation between states. RSF has been ranking countries according to the degree of the freedom of the press since 2002. The influence of the RSF report is growing with many heads of states and governments taking note of the publication. The index ranks countries based on the evaluation of pluralism, independence of the media, the legislative framework in the country, and the safety of journalists. The degree of freedom is determined by analyzing the response of experts to the questions devised by the RSF. The data gathered is combined with the number of abuses and acts of violence meted on journalists. The complete tally of abuses and violence on journalists and media houses are kept by experts who are assigned to the different regions. In the interpretation of the freedom index result, the higher the figure, the worse the situation ';
const include = 'The Othering & Belonging Institute\’s Inclusiveness Index measures equity without regard for national wealth or economic conditions by focusing on policies, laws, and outcomes. The inclusiveness index takes into account: outgroup violence, political representation, income inequality, anti-discrimination laws, rates of incarceration, and immigration. ';
const edu = 'The OECD measures education level by comparing the percentage of each country\'s residents ages 25 to 64 who have completed some form of tertiary education: a two-year or four-year degree or a vocational program. ';
const health = 'CEOWorld Magazine\'s Health Care Index "is a statistical analysis of the overall quality of the health care system, including health care infrastructure; health care professionals (doctors, nursing staff, and other health workers) competencies; cost (USD p.a.per capita); quality medicine availability, and government readiness." Each country is given a score for each of the above factors and then a total score out of 100. ';
const enviro = 'Compiled annually by Yale University\'s Center for Environmental Law & Policy, the Environmental Performance Index (EPI) is a statistical method of computing the collective environmental impact of all of a country\’s policies combined. The 2020 Environmental Performance Index ranks 180 countries across 32 performance indicators related to environmental health and ecosystem vitality, from the amount of particulate pollution in the air and the purity of drinking water to the health of fish stocks and the management of wetlands. Each country is scored out of 100. ';
const free = 'The Cato Institute in Washington D.C. and the Fraser Institute in Vancouver, Canada co-published the annual Human Freedom Index Report for 2021, which helps observe relationships between freedom and other social and economic phenomena. The Human Freedom Index Report for 2021 ranked 165 countries and territories in two distinct categories: Personal Freedom and Economic Freedom, which are then combined to form the final Human Freedom score. '



export let SummarySection = ({ selections }) => {
    let navigate = useNavigate();

    //North America -FOOD QUALITY
    if (selections.first === "North America" && selections.second === 'Food Quality') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Canada`);
                        }}>CANADA</button>
                  </h1>
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
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Canada`);
                        }}>CANADA</button>
                  </h1>
                <p>{water} Canada has an overall EPI ranking of 88/100. Canada has the best drinking water in North America and 24th globally.</p>
            </div>
        )
    }
    //North America -ACCESS TO HOUSING
    if (selections.first === "North America" && selections.second === 'Access to Housing') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Puerto%20Rico`);
                        }}>PUERTO RICO</button>
                  </h1>
                <p>{housing} Puerto Rico has the most affordable housing in North America.</p>
            </div>
        )
    }
    //North America -SAFETY
    if (selections.first === "North America" && selections.second === 'Safety') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Canada`);
                        }}>CANADA</button>
                  </h1>
                <p>{safe} Canada has a GPI rating of 1.389</p>
            </div>
        )
    }
    //North America -Free Press
    if (selections.first === "North America" && selections.second === 'Free Press') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Costa%20Rica`);
                        }}>COSTA RICA</button>
                  </h1>
                <p>{press} Costa Rica has a PFI of 11.10, ranking 6th globally.</p>
            </div>
        )
    }
    //North America -Healthcare
    if (selections.first === "North America" && selections.second === 'Healthcare') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Canada`);
                        }}>CANADA</button>
                  </h1>
                <p>{health} Canada ranks 14th in the world on the Health Care Index.</p>
            </div>
        )
    }
    //North America -Environmental Quality
    if (selections.first === "North America" && selections.second === 'Environmental Quality') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Canada`);
                        }}>CANADA</button>
                  </h1>
                <p>{enviro} Canada has an EPI of 71.00, ranking 20th globally.</p>
            </div>
        )
    }
    //North America -Individual Rights
    if (selections.first === "North America" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Canada`);
                        }}>CANADA</button>
                  </h1>
                <p>{free} Canada has a Human Freedom Index of 8.85, making them the 6th freest country in the world.</p>
            </div>
        )
    }
    //North America -Inclusiveness
    if (selections.first === "North America" && selections.second === 'Inclusiveness') {
        return (
            <div>
              <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Canada`);
                        }}>CANADA</button>
                  </h1>
                <p>{include} Canada has an inclusiveness index of 69.42/100</p>
            </div>
        )
    }
    //North America -Access to Advanced Education
    if (selections.first === "North America" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
               <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Canada`);
                        }}>CANADA</button>
                  </h1>
                <p>{edu} Canada is the most educated country globally, with 56.71% of adults meeting the OECD criteria.</p>
            </div>
        )
    }
    //South America -FOOD QUALITY
    if (selections.first === "South America" && selections.second === 'Food Quality') {
        return (
            <div>
                   <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Chile`);
                        }}>CHILE</button>
                  </h1>
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
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Chile`);
                        }}>CHILE</button>
                  </h1>
                <p>{water} Chile has an overall EPI ranking of 68.1/100. Chile has the best drinking water in South America and 38th globally.</p>
            </div>
        )
    }
    //South America -ACCESS TO HOUSING
    if (selections.first === "South America" && selections.second === 'Access to Housing') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Bolivia`);
                        }}>BOLIVIA</button>
                  </h1>
                <p>{housing} Bolivia has the most affordable housing in South America.</p>
            </div>
        )
    }
    //South America -SAFETY
    if (selections.first === "South America" && selections.second === 'Safety') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Uruguay`);
                        }}>URUGUAY</button>
                  </h1>
                <p>{safe} URUGUAY has a GPI rating of 1.795</p>
            </div>
        )
    }
    //South America -Free Press
    if (selections.first === "South America" && selections.second === 'Free Press') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Uruguay`);
                        }}>URUGUAY</button>
                  </h1>
                <p>{press} Uruguay has a PFI of 15.88, ranking 20th globally.</p>
            </div>
        )
    }
    //South America -Healthcare
    if (selections.first === "South America" && selections.second === 'Healthcare') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Chile`);
                        }}>CHILE</button>
                  </h1>
                <p>{health} Chile ranks 37th in the world on the Health Care Index.</p>
            </div>
        )
    }
    //South America -Environmental Quality
    if (selections.first === "South America" && selections.second === 'Environmental Quality') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Chile`);
                        }}>CHILE</button>
                  </h1>
                <p>{enviro} Chile has an EPI of 55.3, ranking 58.2 globally.</p>
            </div>
        )
    }
    //South America -Individual Rights
    if (selections.first === "South America" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Chile`);
                        }}>CHILE</button>
                  </h1>
                <p>{free} Chile has a Human Freedom Index of 8.44, making them the 28th freest country in the world.</p>
            </div>
        )
    }
   //South America -Inclusiveness
   if (selections.first === "South America" && selections.second === 'Inclusiveness') {
    return (
        <div>
            <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Argentina`);
                        }}>ARGENTINA</button>
                  </h1>
            <p>{include} Argentina has an inclusiveness index of 62.8/100.</p>
        </div>
    )
    }
    //South America -Access to Advanced Education
    if (selections.first === "South America" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Chile`);
                        }}>CHILE</button>
                  </h1>
                <p>{edu} Chile and Uruguay continue to lead the ranking as the best education systems in Latin America, but their performance is on average two years behind of OECD students.</p>
            </div>
        )
    }
    //Europe -FOOD QUALITY
    if (selections.first === "Europe" && selections.second === 'Food Quality') {
        return (
            <div>
                  <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Finland`);
                        }}>FINLAND</button>
                  </h1>
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
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Switzerland`);
                        }}>SWITZERLAND</button>
                  </h1>
                <p>{water} Luckily,Switzerland has some of the cleanest water in the world. Switzerland boasts an impressive 100/100 EPI score, tied with Finland, Iceland, the Netherlands, Norway, and the United Kingdom. </p>
            </div>
        )
    }
    //Europe -ACCESS TO HOUSING
    if (selections.first === "Europe" && selections.second === 'Access to Housing') {
        return (
            <div>
                  <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Denmark`);
                        }}>DENMARK</button>
                  </h1>
                <p>{housing} Denmark has the most affordable housing in Europe. However, it is important to note that there are protections against purchasing property if you are not a citizen.</p>
            </div>
        )
    }
    //Europe -SAFETY
    if (selections.first === "Europe" && selections.second === 'Safety') {
        return (
            <div>
                  <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Iceland`);
                        }}>ICELAND</button>
                  </h1>
                <p>{safe} Iceland has a GPI rating of 1.107, making it the safest country in the world.</p>
            </div>
        )
    }
    //Europe -Free Press
    if (selections.first === "Europe" && selections.second === 'Free Press') {
        return (
            <div>
                   <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Finland`);
                        }}>FINLAND</button>
                  </h1>
                <p>{press} Finland has a PFI of 8.59, ranking 1st globally.</p>
            </div>
        )
    }
    //Europe -Healthcare
    if (selections.first === "Europe" && selections.second === 'Healthcare') {
        return (
            <div>
                 <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Denmark`);
                        }}>DENMARK</button>
                  </h1>
                <p>{health} Denmark ranks first in the world on the Health Care Index.</p>
            </div>
        )
    }
    //Europe -Environmental Quality
    if (selections.first === "Europe" && selections.second === 'Environmental Quality') {
        return (
            <div>
                 <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Denmark`);
                        }}>DENMARK</button>
                  </h1>
                <p>{enviro} Denmark has an EPI of 82.50, ranking 1st globally.</p>
            </div>
        )
    }
    //Europe -Individual Rights
    if (selections.first === "Europe" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                  <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Switzerland`);
                        }}>SWITZERLAND</button>
                  </h1>
                <p>{free} Switzerland has a Human Freedom Index of 9.11, making them the freest country in the world.</p>
            </div>
        )
    }
   //Europe -Inclusiveness
   if (selections.first === "Europe" && selections.second === 'Inclusiveness') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Netherlands`);
                        }}>THE NETHERLANDS</button>
                  </h1>
                <p>{include} The Netherlands has an inclusiveness index of 100/100, making it the most inclusive country in the world.</p>
            </div>
        )
    }
    //Europe -Access to Advanced Education
    if (selections.first === "Europe" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Finland`);
                        }}>FINLAND</button>
                  </h1>
                <p>{edu} 43.6% of Finish residents meet this criteria, placing them 8th on the list globally.</p>
            </div>
        )
    }
    //Asia -FOOD QUALITY
    if (selections.first === "Asia" && selections.second === 'Food Quality') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Japan`);
                        }}>JAPAN</button>
                  </h1>
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
                 <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Japan`);
                        }}>JAPAN</button>
                  </h1>
                <p>{water} Japan has an EPI ranking of 95.0 out of 100.</p>
            </div>
        )
    }
    //Asia -ACCESS TO HOUSING
    if (selections.first === "Asia" && selections.second === 'Access to Housing') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Saudi%20Arabia`);
                        }}>SAUDI ARABIA</button>
                  </h1>
                <p>{housing} Saudi Arabia has the most affordable housing in the world.</p>
            </div>
        )
    }
    //Asia -SAFETY
    if (selections.first === "Asia" && selections.second === 'Safety') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Singapore`);
                        }}>SINGAPORE</button>
                  </h1>
                <p>{safe} Singapore has a GPI rating of 1.326</p>
            </div>
        )
    }
    //Asia -Free Press
    if (selections.first === "Asia" && selections.second === 'Free Press') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/South%20Korea`);
                        }}>SOUTH KOREA</button>
                  </h1>
                <p>{press} South Korea has a PFI of 28.58, ranking 70th globally.</p>
            </div>
        )
    }
    //Asia -Healthcare
    if (selections.first === "Asia" && selections.second === 'Healthcare') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Singapore`);
                        }}>SINGAPORE</button>
                  </h1>
                <p>{health} Singapore ranks 15th in the world on the Health Care Index.</p>
            </div>
        )
    }
    //Asia -Environmental Quality
    if (selections.first === "Asia" && selections.second === 'Environmental Quality') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Japan`);
                        }}>JAPAN</button>
                  </h1>
                <p>{enviro} Japan has an EPI of 75.1, ranking 12th globally.</p>
            </div>
        )
    }
    //Asia -Individual Rights
    if (selections.first === "Asia" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Japan`);
                        }}>JAPAN</button>
                  </h1>
                <p>{free} Japan has a Human Freedom Index of 8.73, making them the 15th freest country in the world.</p>
            </div>
        )
    }
     //Asia -Inclusiveness
   if (selections.first === "Asia" && selections.second === 'Inclusiveness') {
    return (
        <div>
            <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Japan`);
                        }}>JAPAN</button>
                  </h1>
            <p>{include} Japan has an inclusiveness index of 59.93/100.</p>
        </div>
    )
    }
    //Asia -Access to Advanced Education
    if (selections.first === "Asia" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Japan`);
                        }}>JAPAN</button>
                  </h1>
                <p>{edu} Japan has the second-highest percentage of 51.44% globally.</p>
            </div>
        )
    }
    //AFRICA -FOOD QUALITY
    if (selections.first === "Africa" && selections.second === 'Food Quality') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Morocco`);
                        }}>MOROCCO</button>
                  </h1>
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
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Mauritius`);
                        }}>MAURITIUS</button>
                  </h1>
                <p>{water} Mauritius has an overall EPI ranking of 65.5/100. Mauritius has the best drinking water in Africa and 44th globally.</p>
            </div>
        )
    }
    //AFRICA -ACCESS TO HOUSING
    if (selections.first === "Africa" && selections.second === 'Access to Housing') {
        return (
            <div>
                 <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/South%20Africa`);
                        }}>SOUTH AFRICA</button>
                  </h1>
                <p>{housing} South Africa has the most affordable housing in Africa and is the second most affordable country to buy a home in the world.</p>
            </div>
        )
    }
    //AFRICA -SAFETY
    if (selections.first === "Africa" && selections.second === 'Safety') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Mauritius`);
                        }}>MAURITIUS</button>
                  </h1>
                <p>{safe} Mauritius has a GPI rating of 1.57.</p>
            </div>
        )
    }
    //AFRICA -Free Press
    if (selections.first === "Africa" && selections.second === 'Free Press') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Namibia`);
                        }}>NAMIBIA</button>
                  </h1>
                <p>{press} Namibia has a PFI of 15.15, ranking 17th globally.</p>
            </div>
        )
    }
    //AFRICA -Healthcare
    if (selections.first === "Africa" && selections.second === 'Healthcare') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Mauritius`);
                        }}>MAURITIUS</button>
                  </h1>
                <p>{health} MAURITIUS ranks 44th in the world on the Health Care Index.</p>
            </div>
        )
    }
    //AFRICA -Environmental Quality
    if (selections.first === "Africa" && selections.second === 'Environmental Quality') {
        return (
            <div>
                 <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Seychelles`);
                        }}>SEYCHELLES</button>
                  </h1>
                <p>{enviro} Seychelles has an EPI of 58.2, ranking 38th globally.</p>
            </div>
        )
    }
    //AFRICA -Individual Rights
    if (selections.first === "Africa" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Mauritius`);
                        }}>MAURITIUS</button>
                  </h1>
                <p>{free} Mauritius has a Human Freedom Index of 8.07, making them the 46th freest country in the world.</p>
            </div>
        )
        }
     //Africa -Inclusiveness
   if (selections.first === "Africa" && selections.second === 'Inclusiveness') {
    return (
        <div>
            <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/South%20Africa`);
                        }}>SOUTH AFRICA</button>
                  </h1>
            <p>{include} South Africa has an inclusiveness index of 63.70/100.</p>
        </div>
    )
}
    //AFRICA -Access to Advanced Education
    if (selections.first === "Africa" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
               <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Mauritius`);
                        }}>MAURITIUS</button>
                  </h1>
                <p>{edu} Mauritius has a 44% tertiary enrollment, making it the most educated country on the continent.</p>
            </div>
        )
    }
    
    //Oceania -FOOD QUALITY
    if (selections.first === "Oceania" && selections.second === 'Food Quality') {
        return (
            <div>
                 <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/New%20Zealand`);
                        }}>NEW ZEALAND</button>
                  </h1>
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
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Australia`);
                        }}>AUSTRALIA</button>
                  </h1>
                <p>{water} Australia has an overall EPI ranking of 87/100. Australia has the best drinking water in Oceania and 25th globally.</p>
            </div>
        )
    }
    //Oceania -ACCESS TO HOUSING
    if (selections.first === "Oceania" && selections.second === 'Access to Housing') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Australia`);
                        }}>AUSTRALIA</button>
                  </h1>
                <p>{housing} Australia has the most affordable housing in Oceania and ranks 15th globally for housing affordability.</p>
            </div>
        )
    }
    //Oceania -SAFETY
    if (selections.first === "Oceania" && selections.second === 'Safety') {
        return (
            <div>
                     <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/New%20Zealand`);
                        }}>NEW ZEALAND</button>
                  </h1>
                <p>{safe} New Zealand has a GPI rating of 1.269, making it the second safest country in the world.</p>
            </div>
        )
    }
    //Oceania -Free Press
    if (selections.first === "Oceania" && selections.second === 'Free Press') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Samoa`);
                        }}>SAMOA</button>
                  </h1>
                <p>{press} Samoa has a FPI of 18.80, ranking 29th globally.</p>
            </div>
        )
    }
    //Oceania -Healthcare
    if (selections.first === "Oceania" && selections.second === 'Healthcare') {
        return (
            <div>
                    <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/New%20Zealand`);
                        }}>NEW ZEALAND</button>
                  </h1>
                <p>{health} New Zealand ranks 6th in the world on the Health Care Index.</p>
            </div>
        )
    }
    //Oceania -Environmental Quality
    if (selections.first === "Oceania" && selections.second === 'Environmental Quality') {
        return (
            <div>
                <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Australia`);
                        }}>AUSTRALIA</button>
                  </h1>
                <p>{enviro} Australia has an EPI of 74.9, ranking 13th globally.</p>
            </div>
        )
    }
    //Oceania -Individual Rights
    if (selections.first === "Oceania" && selections.second === 'Personal Freedom and Choice') {
        return (
            <div>
                     <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/New%20Zealand`);
                        }}>NEW ZEALAND</button>
                  </h1>
                <p>{free} New Zealand has a Human Freedom Index of 9.01, making them the 2nd freest country in the world.</p>
            </div>
        )
    }
     //Oceania -Inclusiveness
   if (selections.first === "Oceania" && selections.second === 'Inclusiveness') {
    return (
        <div>
            <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Australia`);
                        }}>AUSTRALIA</button>
                  </h1>
            <p>{include} Australia has an inclusiveness index of 63.61/100.</p>
        </div>
    )
    }
    //Oceania -Access to Advanced Education
    if (selections.first === "Oceania" && selections.second === 'Access to Advanced Education') {
        return (
            <div>
                     <h1><button onClick={()=>{console.log('clicked');
                         navigate(`/SingleCountry/Australia`);
                        }}>AUSTRALIA</button>
                  </h1>
                <p>{edu} 43.74% of Australians meet this criteria, placing them 7th on the list.</p>
            </div>
        )
    }
}