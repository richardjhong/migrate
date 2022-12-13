import React, { useState } from 'react';
import './Form.scss';
import airplane from '../../images/airplaneArt.png';
import SearchSelect from "../../components/SearchSelect";
import { SummarySection } from "../../components/SummarySection";
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Form() {
  const [selectionOneValue, setSelectionOneValue] = useState("North America");
  const [selectionTwoValue, setSelectionTwoValue] = useState("Food Quality");
  // const [selectionThreeValue, setSelectionThreeValue] = useState("Food Quality");
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectionOneValue);
    console.log(selectionTwoValue);
    // console.log(selectionThreeValue);


    setFormIsSubmitted(true);
  }

  return (
    <>
    <Header />
    <main className="formMain">
    <h1 className="title">FIND YOUR PERFECT COUNTRY MATCH</h1>
    <form onSubmit={handleSubmit} className="form">
      <label className="region">
        Pick your desired region:
        <SearchSelect
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
      </label>
      <br></br>
      <br></br>
      <br></br>
      <label className="optionOne">
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
            { label: "Personal Freedom and Choice", value: "Personal Freedom and Choice" },
            { label: "Inclusiveness", value: "Inclusiveness" },
            { label: "Access to Advanced Education", value: "Access to Advanced Education" }
          ]}
          value={selectionTwoValue}
          setValue={setSelectionTwoValue}
        />
        <br></br>
        <br></br>
      </label>
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