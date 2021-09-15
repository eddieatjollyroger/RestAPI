import React, { Component } from 'react';

export default class PropertyForm extends Component {

  
render(){
  return (
    <div>
<form onSubmit={this.handleSubmit}>
            <label>
          Property Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
)}
}