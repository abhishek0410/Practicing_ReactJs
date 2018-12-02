import React , {Component}  from "react";

class Counter extends Component {

    getBadge(){
        return(this.props.counter.value===0? "badge badge-warning" : "badge badge-primary");
    };

    getCount(){
        return(this.props.counter.value);
    }

    render(){

        return(<div>
            <span class={this.getBadge()} >{this.getCount()}</span>
            <button onClick={()=> this.props.onIncrement(this.props.counter)} type="button" class="btn btn-success">Increment</button>
            <button onClick = {()=>this.props.onDelete(this.props.counter.id)} type="button" class="btn btn-danger">Delete</button>
             
        </div>);
        
    };
}

export default Counter;