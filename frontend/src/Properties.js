import React, { Component } from 'react';
import axios from "axios";

export default class Properties extends Component {
    constructor(){
        super();
        this.state = {
            properties: []
        }
    }
    handleButtonClickGet = () => {
        axios.get("/properties").then(response => {
            //console.log("oi" + response.data.properties);
        this.setState({
            properties: response.data.properties
        })
        //console.log(this.state.properties)
        }
        );
    };

    handleDelete = (propName) =>{
        var objectDel = {name: propName}
        console.log("objectDel" + objectDel)
        axios.delete("/properties", {data: objectDel}).then()
        this.handleButtonClickGet();
    };

    formatUnits = (arr) => {
        arr = arr.join(', ')
        return arr;
    }
    
    render() {
        const {properties} = this.state;
        return (
            <div>
            <button onClick={this.handleButtonClickGet}>Click me to get the properties</button>
            <h1>Properties:</h1> 
            {properties.map(property => <div> <br></br>{"Property Name: " +property.name}
            <button onClick={() => this.handleDelete(property.name)}>Delete</button>
            <div>{"Units: " +this.formatUnits(property.units)}</div></div>)}
            </div>
        )
    }
}