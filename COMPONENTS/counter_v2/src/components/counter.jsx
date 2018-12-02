//This is COUNTER_V2 , see the toolbar , see "WHAT IS WHERE" , here we will use "props" for the first
//time, just saying.
import React, {Component} from 'react';

class Counter extends Component{
state = {
    count : this.props.value ,
};
    getbadge(){
      return( this.count ===0 ? "badge badge-pill badge-warning": "badge badge-pill badge-primary");
    }
    handleIncrement =()=>{
            this.setState({count : this.state.count +1})
    }
    render(){
        return(
        <div>
            <span class = {this.getbadge()}>{this.state.count} </span>
            <button onClick = {this.handleIncrement} >Increment</button>  
            <button onClick ={()=>this.props.onDelete(this.props.id)} type="button" class="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }
}

export default Counter;         