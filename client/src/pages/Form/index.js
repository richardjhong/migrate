import React from 'react';
import './Form.scss';
import airplane from '../../images/airplaneArt.png';

let selectionOne = document.querySelector('.selectionOne');
let selectionTwo = document.querySelector('.selectionTwo');
let selectionThree = document.querySelector('.selectionThree');

  class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectionOne: '',
        selectionTwo: '',
        selectionThree: ''
        };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'select' ? target.select : target.value;
      const name = target.name;

      this.setState({
        [name]:value
      });
    }


    handleSubmit(event) {
    event.preventDefault();
     console.log(selectionOne.value);
    //  console.log(selectionTwo.value);
    //  console.log(selectionThree.value);

      if (selectionOne.value==='Africa') {
        return console.log('hello');
      }
    }

  
    render() {
      return (
        <div>
        <h1 className="title">FIND YOUR PERFECT COUNTRY MATCH</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <label className="region">
            Pick your desired region:
            <select className="selectionOne" type="select" value={this.state.selectionOne.value} onChange={this.handleInputChange}>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="Oceania">Oceania</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <br></br>
          <label className="optionOne">
            What's most important to you?:
            <select className="selectionTwo" type="select" value={this.state.selectionTwo.value} onChange={this.handleInputChange}>
              <option value="Food Quality">Food Quality</option>
              <option value="Clean Water">Clean Water</option>
              <option value="Access to Housing">Access to Housing</option>
              <option value="Safety">Safety</option>
              <option value="Free Press">Free Press</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Environmental Quality">Environmental Quality</option>
              <option value="Individual Rights">Individual Rights</option>
              <option value="Personal Freedom and Choice">Personal Freedom and Choice</option>
              <option value="Inclusiveness">Inclusiveness (LGBTQ+ Friendly)</option>
              <option value="Access to Advanced Education">Access to Advanced Education</option>
            </select>
            <br></br>
            <br></br>
          </label>
          <label className="optionTwo">
            What's most important to you?:
            <select className="selectionThree" type="select" value={this.state.selectionThree.value} onChange={this.handleInputChange}>
              <option value="Food Quality">Food Quality</option>
              <option value="Clean Water">Clean Water</option>
              <option value="Access to Housing">Access to Housing</option>
              <option value="Safety">Safety</option>
              <option value="Free Press">Free Press</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Environmental Quality">Environmental Quality</option>
              <option value="Individual Rights">Individual Rights</option>
              <option value="Personal Freedom and Choice">Personal Freedom and Choice</option>
              <option value="Inclusiveness">Inclusiveness (LGBTQ+ Friendly)</option>
              <option value="Access to Advanced Education">Access to Advanced Education</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <input className="submitButton" type="submit" value="Submit" />
        </form>

        <img className="airplane" src={airplane} alt="airplane"/>
        </div>
      );
    }

  }

  export default Form;