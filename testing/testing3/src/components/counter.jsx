import React, {Component}  from "react";

class Counter extends Component{
    state = {
        count : this.props.value,
     //count:0,
        };
    getBadge(){
        console.log("I am in the getBadge");
        return(this.state.count ===0 ?"badge badge-warning" : "badge badge-primary" );
    }
    getCount(){ 
        return(this.state.count ===0?"Zero":this.state.count);
    }
    handleIncrement =() => {
        this.setState({count:this.state.count+1} ); 
    }
    render(){
        return(
            <div>
                <span class={this.getBadge()} >{this.getCount()}</span>
                <button onClick={this.handleIncrement} type="button" class="btn btn-success">Increment</button>
                <button onClick = {()=>this.props.onDelete(this.props.id)} type="button" class="btn btn-danger">Delete</button>
            </div>
        );
    }
}

export default Counter;
