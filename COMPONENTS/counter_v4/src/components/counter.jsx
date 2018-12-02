import React , {Component} from "react";

class Counter extends Component{

getBadge =()=>{
    return(this.props.counter.value===0?"btn btn-warning":"btn btn-success");
}

getCounterValue=()=>{
    return(this.props.counter.value);
}
    
   render(){
       return(
           <div>
              <span class={this.getBadge()}>{this.getCounterValue()}</span> 
              <button onClick = {()=>this.props.onIncrement(this.props.counter)} type="button" class="btn btn-secondary">Increment</button>   
              <button onClick = {()=>this.props.onDelete(this.props.counter.id)} type="button" class="btn btn-danger">Delete</button>
           </div>
       );
   }
}

export default Counter;