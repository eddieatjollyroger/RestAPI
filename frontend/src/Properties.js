import React, { Component } from 'react';
import axios from "axios";

export default class Properties extends Component {
    constructor(){
        super();
        this.state = {
            properties: [{name: "",
             units:[]
            }]
        }
    }
    
    handleButtonClickGet = () => {
        axios.get("/properties").then(response => {
            //console.log(response.data.properties);
        this.setState({
            properties: response.data.properties
        })
        //console.log(this.state.properties)
        }
        );
    };

    formatUnits = (arr) => {
        arr = arr.join(', ')
        console.log(arr)
        return arr;
    }
    
    render() {
        const {properties} = this.state;
        return (
            <div>
            <button onClick={this.handleButtonClickGet}>Click me to get the properties</button>
            <h1>Properties:</h1> 
            {properties.map(property => <div> <br></br>{"Property Name: " +property.name}<div>{"Units: " +this.formatUnits(property.units)}</div></div>)}
            </div>
        )
    }
}