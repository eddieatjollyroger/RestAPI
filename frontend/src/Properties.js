import React, { Component } from 'react';
import axios from "axios";

export default class Properties extends Component {
    constructor(){
        super();
        this.state = {
            properties: "no properties gotten yet"
        }
    }
    
    componentDidMount = () => {
        axios.get("/properties").then(response => {
            console.log(response);
        });
    };

    render() {
        return (
            <div>
            <button>Click me to refresh properties</button>
            <h3>Properties {this.state.properties}</h3>
            </div>
        )
    }
}