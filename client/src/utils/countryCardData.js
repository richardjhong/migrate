import nutritionIcon from '../images/Nutrition-Basic-Needs.png';
import waterIcon from '../images/Water-Sanitation.png';
import shelterIcon from '../images/Shelter.png';
import safetyIcon from '../images/Safety.png';
import basicKnowIcon from '../images/Access-Knowledge.png';
import healthWellIcon from '../images/Health-Wellness.png';
import enivronQualityIcon from '../images/Environmental-Quality.png';

export const columnData=[
    {
        ImgSrc:nutritionIcon,
        ImgAlt:"food",
        src:{
            h3:"Nutrition and Basic Medical Care",
            category:"bhn",
            fieldName:"score_nbmc",
        },
        description:
           ['Infectious Diseases - Age-standardized Disability Adjusted Life Years per 100,000 people',
                                'Child Mortality Rate - Chance of dying before age 5 per 1000 live births',
                                'Child Stunting - prevalence of stunting (shorter than expected for age)',
                                'Maternal Mortality Rate - Maternal deaths per 100,000 livebirths in women 10-54 years',
                                'Undernourishment - Percentage of population consuming less than threshold energy needs.',
                                'Diet Low in Fruits and Vegetables - risk-weighted and age-standardized',
                            ],


        
    },
    {
        ImgSrc:waterIcon,
        ImgAlt:"water",
        src:{
            h3:"Water and Sanitation",
            category:"bhn",
            fieldName:"score_ws",
        },
        description:
            ['Access to Improved Sanitation - Proportion of population with access to improved toilets',
            'Access to Improved Water Sources - Proportion of population with access to improved water systems',
            'Unsafe Water, Sanitation and Hygiene - Disability-adjusted life years per 100,000 people based on unsafe water, sanitation, and hygiene',
            'Satisfaction with Water Quality - proportion of population',],

        
    },
    {
        ImgSrc:shelterIcon,
        ImgAlt:"shelter",
        src:{
            h3:"Shelter",
            category:"bhn",
            fieldName:"score_ws",
        },
        description:
            ['Household Air Pollution - Disability-adjusted Life Years caused by household solid fuels',
            'Disatisfaction with Housing Affordabiility - Proportion of population answering "dissatisfied"',
            'Access to Electricity - Percentage of population with access to electricity',
            'Use of Clean Fuels and Tech for cooking - Percentage of population primarily using clean fuels and tech for cooking',]
,

        
    },
    {
        ImgSrc:safetyIcon,
        ImgAlt:"personal safety",
        src:{
            h3:"Personal Safety",
            category:"bhn",
            fieldName:"score_ps",
        },
        description:
            ['Interpersonal Violence',
            'Transportation Related Injuries',
            'Political Killings and Torture',
            'Intimate Partner Violence',
            'Money Stolen']
,

        
    },
    {
        ImgSrc:basicKnowIcon,
        ImgAlt:"personal safety",
        src:{
            h3:"Personal Safety",
            category:"fow",
            fieldName:"score_abk",
        },
        description:
            ['Population with No Schooling',
            'Equal Access to Quality Education',
            'Primary School Enrollment',
            'Gender Parity in Secondary Attainment']
,

        
    },
    {
        ImgSrc:basicKnowIcon,
        ImgAlt:"access to information and communications",
        src:{
            h3:"Access to Information and Communications",
            category:"fow",
            fieldName:"score_aic",
        },
        description:
            ['Access to Online Governance',
            'Internet Users',
            'Mobile telephone subscriptions',
            'Alternative sources of information index']
,

        
    },
    {
        ImgSrc:healthWellIcon,
        ImgAlt:"health and wellness",
        src:{
            h3:"Health and Wellness",
            category:"fow",
            fieldName:"score_hw",
        },
        description:
            ['Life expectancy at 60 ',
            'Premature deaths from non-communicable diseases ',
            'Equal access to quality healthcare ',
            'Access to essential health services ',
            'Satisfaction with availability of quality healthcare',]
, 
    },
    {
        ImgSrc:enivronQualityIcon,
        ImgAlt:"environmental quality",
        src:{
            h3:"Environmental Quality",
            category:"fow",
            fieldName:"score_eq",
        },
        description:
            ['Outdoor air pollution',
            'Lead exposure ',
            'Particulate matter pollution ',
            'Species protection  ',
    ], 
    },
    {
        ImgSrc:enivronQualityIcon,
        ImgAlt:"personal rights",
        src:{
            h3:"Personal Rights",
            category:"opp",
            fieldName:"score_pr",
        },
        description:
            ['Access to justice ',
            'Freedom of religion ',
            'Political rights ',
            'Property rights for women ',
            'Freedom of peaceful assembly ',
            'Freedom of discussion',]
, 
    },
    {
        ImgSrc:basicKnowIcon,
        ImgAlt:"personal freedom and choice",
        src:{
            h3:"Personal Freedom and Choice ",
            category:"opp",
            fieldName:"score_pfc",
        },
        description:
            ['Satisfied demand for contraception ',
            'Perception of corruption ',
            'Early marriage ',
            'Young people not in education, employment or training ',
            'Vulnerable employment ',
            'Freedom of domestic movement',]
, 
    },
    {
        ImgSrc:basicKnowIcon,
        ImgAlt:"inclusiveness",
        src:{
            h3:"Inclusiveness",
            category:"opp",
            fieldName:"score_incl",
        },
        description:
            ['Equal protection index',
            'Equal access index',
            'Power distributed by sexual orientation',
            'Access to public services distributed by social group ',
            'Discrimination and violence against minorities ',
            'Acceptance of gays and lesbians ',]
, 
    },
    {
        ImgSrc:basicKnowIcon,
        ImgAlt:"access to advanced education",
        src:{
            h3:"Access to Advanced Education",
            category:"opp",
            fieldName:"score_aae",
        },
        description:
            ['Citable documents ',
            'Academic freedom ',
            'Women with advanced education ',
            'Expected years of tertiary schooling ',
            'Quality weighted universities  ',]
, 
    },

]