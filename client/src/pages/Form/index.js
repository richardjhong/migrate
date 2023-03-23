import React, { useState } from 'react';
import './Form.scss';
import airplane from '../../images/airplaneDest.svg';
import SearchSelect from '../../components/SearchSelect';
import SummarySection from '../../components/SummarySection';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Form() {
  const [selectionOneValue, setSelectionOneValue] = useState("North America");
  const [selectionTwoValue, setSelectionTwoValue] = useState("Food Quality");
  // const [selectionThreeValue, setSelectionThreeValue] = useState("Food Quality");
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();

    setFormIsSubmitted(true);
  }

  return (
    <>
    <Header />
    <main className="formMain">
    <h1 className="title">FIND YOUR PERFECT COUNTRY MATCH</h1>
    <form onSubmit={handleSubmit} className="form">
      <label className="region" for="regionOptions">
        Pick your desired region:</label>
        <br/>
        <SearchSelect id='regionOptions'
          options={[
            { label: "North America", value: "North America" },
            { label: "South America", value: "South America" },
            { label: "Europe", value: "Europe" },
            { label: "Asia", value: "Asia" },
            { label: "Africa", value: "Africa" },
            { label: "Oceania", value: "Oceania" },
          ]}
          value={selectionOneValue}
          setValue={setSelectionOneValue}
        />
      <br/>
      <label className="optionOne" for="choiceOption">
        What's most important to you?:</label>
        <br/>
        <SearchSelect id="choiceOption"
          options={[
            { label: "Food Quality", value: "Food Quality" },
            { label: "Clean Water", value: "Clean Water" },
            { label: "Access to Housing", value: "Access to Housing" },
            { label: "Safety", value: "Safety" },
            { label: "Free Press", value: "Free Press" },
            { label: "Healthcare", value: "Healthcare" },
            { label: "Environmental Quality", value: "Environmental Quality" },
            { label: "Personal Freedom and Choice", value: "Personal Freedom and Choice" },
            { label: "Inclusiveness", value: "Inclusiveness" },
            { label: "Access to Advanced Education", value: "Access to Advanced Education" }
          ]}
          value={selectionTwoValue}
          setValue={setSelectionTwoValue}
        />
      
      {/* <label className="optionTwo">
        What's most important to you?:
        <SearchSelect
          options={[
            { label: "Food Quality", value: "Food Quality" },
            { label: "Clean Water", value: "Clean Water" },
            { label: "Access to Housing", value: "Access to Housing" },
            { label: "Safety", value: "Safety" },
            { label: "Free Press", value: "Free Press" },
            { label: "Healthcare", value: "Healthcare" },
            { label: "Environmental Quality", value: "Environmental Quality" },
            { label: "Individual Rights", value: "Individual Rights" },
            { label: "Personal Freedom and Choice", value: "Personal Freedom and Choice" },
            { label: "Inclusiveness", value: "Inclusiveness" },
            { label: "Access to Advanced Education", value: "Access to Advanced Education" }
          ]}
          value={selectionThreeValue}
          setValue={setSelectionThreeValue}
        />
      </label>
      <br></br>
      <br></br> */}
      <input className="submitButton button" type="submit" value="Submit" />
    </form>

    <img className="airplane" src={airplane} alt="airplane"/>
    {formIsSubmitted && <SummarySection selections={{ first: selectionOneValue, second: selectionTwoValue}} />}
    </main>
    <Footer />
    </>
  );
}

export default Form;