import React, { Component } from 'react';
import axios from "axios";

export default class PropertyForm extends Component {
    constructor() {
    super();
    this.formObject = {
      name: "",
      units:[]
  }
    this.state = {
      value: '',
      unit0: '',
      unit1: '',
      unit2: '',
      unit3: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeUnit0 = this.handleChangeUnit0.bind(this);
    this.handleChangeUnit1 = this.handleChangeUnit1.bind(this);
    this.handleChangeUnit2 = this.handleChangeUnit2.bind(this);
    this.handleChangeUnit3 = this.handleChangeUnit3.bind(this);
    this.handleChangeUnit4 = this.handleChangeUnit4.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChangeUnit0(event) {
    this.setState({unit0: event.target.value});
  }
  handleChangeUnit1(event) {
    this.setState({unit1: event.target.value});
  }
  handleChangeUnit2(event) {
    this.setState({unit2: event.target.value});
  }
  handleChangeUnit3(event) {
    this.setState({unit3: event.target.value});
  }
  handleChangeUnit4(event) {
    this.setState({unit4: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
     if (!this.state.value || !this.state.unit0){
      alert("Every property needs at least 1 unit!");
      return;
    }
    else{
      
      alert('Property: ' + this.state.value + " was added, click the button to get the updated list");
   
      this.formObject.name = this.state.value
      this.setState({value: ""})
    
      this.formObject.units = [];
      this.formObject.units.push(this.state.unit0)
      this.setState({unit0: ''})
    
    if (this.state.unit1){
      this.formObject.units.push(this.state.unit1)
      this.setState({unit1: ''})
    }
    if (this.state.unit2){
      this.formObject.units.push(this.state.unit2)
      this.setState({unit2: ''})
    }
    if (this.state.unit3){
      this.formObject.units.push(this.state.unit3)
      this.setState({unit3: ''})
    }
    if (this.state.unit4){
      this.formObject.units.push(this.state.unit4)
      this.setState({unit4: ''})
    }
    
    this.handleButtonClickPost(this.formObject)

    //event.preventDefault();
  }
}

    
    handleButtonClickPost = (object) => {
        axios.post("/properties", object).then(response => {
            console.log("post" + response.data);
        })
    };

render(){
  return (
    <div>
<form onSubmit={this.handleSubmit}>
          <h5>Insert a new property!</h5>
            <label>
          Property Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <br></br>
        <label>
          Property Unit:
          <input type="text" value={this.state.unit0} onChange={this.handleChangeUnit0}/>
        </label>
        <br></br>
        <label>
          Property Unit:
          <input type="text" value={this.state.unit1} onChange={this.handleChangeUnit1}/>
        </label>
        <br></br>
        <label>
          Property Unit:
          <input type="text" value={this.state.unit2} onChange={this.handleChangeUnit2}/>
        </label>
        <br></br>
        <label>
          Property Unit:
          <input type="text" value={this.state.unit3} onChange={this.handleChangeUnit3}/>
        </label>
        <br></br>
        <label>
          Property Unit:
          <input type="text" value={this.state.unit4} onChange={this.handleChangeUnit4}/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
      </div>
)}
}