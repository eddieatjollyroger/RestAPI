import React, { Component } from 'react';
import axios from "axios";
import Properties from './Properties';

export default class PropertyForm extends Component {
    constructor() {
    super();
    this.formObject = {
      name: "",
      units:[]
  }
  this.state = {
    value: '',
    unit0: "",
    unit1: "",
    unit2: "",
    unit3: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value + " click the button to get refreshed list");
    if (!this.state.value){
      return;
    }
    else{
      this.formObject.name = this.state.value
      this.handleButtonClickPost(this.formObject)
    }
    event.preventDefault();
  }

    
    handleButtonClickPost = (object) => {
        axios.post("/properties", object).then(response => {
            console.log(response.data.properties);
        })
    };

render(){
  return (
    <div>
<form onSubmit={this.handleSubmit}>
            <label>
          Property Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <label>
          Property Unit:
          <input type="text" value={this.formObject.unit0}/>
        </label>
        <label>
          Property Unit:
          <input type="text" value={this.formObject.unit1}/>
        </label>
        <label>
          Property Unit:
          <input type="text" value={this.formObject.unit2}/>
        </label>
        <label>
          Property Unit:
          <input type="text" value={this.formObject.unit3}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={this.handleButtonClickPost}>Click me to add a property</button>
      </div>
)}
}