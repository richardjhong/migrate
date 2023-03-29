import React from "react";
import './HowTo.scss'

export default function HowToContent() {

   return (
      <>
         <main>
            <div className='howto'>
               <h1>How to Use Migrate</h1>
               <p>Migrate is a resource for the would-be emigrant, wanderer, or nomad. Here are some tips on how you can use Migrate to get the information you need about your potential new home:</p>
               <ol className='howToList'>

                  <li><h2>Start a search with a country in mind. </h2></li>
                  <ul>
                     <li>Type the name of the country into any search bar and hit search.</li>
                     <li>A new page will show up with tiles displaying a title of the component being measured, the country’s associated rating or ranking for that measurement and a relevant icon.</li>
                     <li>Clicking on the tile will populate more detailed country information and a graph with historical ratings for the measured component.</li>
                     <li>There are currently 12 tiles available per country which show how a country ranks on matters like Access to Basic Knowledge, Personal Safety, and Health and Wellness. Click them all or only the ones pertinent to you for a better understanding of the country you might one day call home.</li>
                  </ul>

                  <li><h2>Use our interactive map to see worldwide rankings at a glance</h2></li>
                  <ul>
                     <li>From any search page, click the button labeled "Open Interactive Map" to open an overlay map of the world.</li>
                     <li>See every nation with a ranking color-coded by their score.</li>
                     <li>Click on a country to open up more details about that country.</li>
                  </ul>

                  <li><h2>Not set on a destination, yet? Use our <a href="/form">Helper</a> to pinpoint a destination.</h2></li>
                  <ul>
                     <li>Simply choose what’s most important to you and Migrate's Helper will suggest a country based on your selection. </li>
                     <li>Click on the country name to see more information about the country.</li>
                  </ul>
                  <li><h2>Fine tune the criteria most important to you with our <a href="/form">Wizard</a>.</h2></li>
                  <ul>
                     <li>See the twelve categories used to determine overall nation rankings.</li>
                     <li>Adjust the sliders left or right to put more or less weight on a category.</li>
                     <li>Click the calculate button to get a revised list of the top ten countries based on your criteria.</li>
                  </ul>
                  <li><h2>For a more customized visit, <a href="/signup">create a user account</a> and have your 5 most recent searches stored on your dashboard.</h2></li>
                  <ul>
                     <li>To create a user account, click the sign up link at the top of the page.</li>
                     <li>Use your email address and password to log in each time you visit Migrate.</li>
                     <li>Remember where you left off by checking the dashboard tile with your recent search history.</li>
                     <li>You can also start a new search right from your dashboard.</li>
                  </ul>
               </ol>


               <p>We hope this helps you find your way around. Where in the world will you go next? </p>

            </div>
         </main>
      </>
   )
}
