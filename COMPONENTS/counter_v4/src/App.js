import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    counters : [
      {id : 1  , value : 10 },
      {id : 2  , value : 20 },
      {id : 3  , value : 30 },
      {id : 4  , value : 40 }
  ],
  }
  handleIncrement=(counter)=>{
    var counters_temp = [...this.state.counters];
    var index = counter.id;
    counters_temp[index-1].value++;
    this.setState({counters : counters_temp});
} 

handleDelete = (counterID)=>{
  console.log("We are in App.Js counter_v4-handleDelete" , counterID);
  const counters = this.state.counters.filter( c=>c.id!==counterID);
  this.setState({counters});
}
handleReset= ()=>{
  var counter_temp = this.state.counters.map((counter)=>{
      counter.value=0;
      return(counter);
  });
  this.setState({counters:counter_temp});
}

  render() {
    return (
      <div>
          <NavBar totalCounters = {this.state.counters.length}></NavBar>
          <Counters 
          counters = {this.state.counters}
          hndlIncr={this.handleIncrement}
          onDel ={this.handleDelete}
          onRes ={this.handleReset}
              >
          </Counters>
      </div>
    );
  }
}

export default App;
