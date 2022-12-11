import React from "react";
import Header from "./Header"
import Footer from "./Footer"


export default function HowTo() {

    return (
     <>
      
      <Header />
         <div className='howto'>
            <h1>How to Use Migrate</h1>
               <p>Migrate is a resource for the would-be emigrant, wanderer, nomad. Here are some tips on how you can use Migrate to get the information you need about your potential new home:</p>
            <ol>

               <li>Start a search with a country in mind. Are you curious about the stats of a particular country? Type the name of the country into any search bar and hit search.</li>
                  <ul>
                     <li>A new page will show up with tiles displaying a title of the component being measured, the country’s associated rating or ranking for that measurement and a relevant icon.</li>
                     <li>Clicking on the tile will populate more detailed country information and a graph with historical ratings for the measured component.</li>
                     <li>There are currently 12 tiles available per country which show how a country ranks on matters like Access to Basic Knowledge, Personal Safety, and Health and Wellness. Click them all or only the ones pertinent to you for a better understanding of the country you might one day call home.</li>
                  </ul>

               <li>Not set on a destination, yet? Navigate to our country recommendation engine.</li>
                  <ul>
                     <li>Simply choose what’s most important to you and Migrate will suggest a country based on your selection. </li>
                     <li>Click on the country name to see more information about the country.</li>
                  </ul>
            </ol>
            <p>For a more customized visit, create a user account and have your recent searches stored on your dashboard. Here’s how:</p>
            <p>To create a user account, click the sign up link at the top of the page.</p>
               <ul>
                  <li>Use your email address and password to log in each time you visit Migrate.</li>
                  <li>Remember where you left off by checking the dashboard tile with your recent search history.</li>
                  <li>You can also start a new search right from your dashboard.</li>
               </ul>
         
               <p>We hope this helps you find your way around. Where in the world will you go next? </p>
           
      </div>
<Footer />
</>
    )
   }
      