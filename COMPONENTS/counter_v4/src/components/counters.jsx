import React , {Component} from "react";
import Counter from './counter';

class Counters extends  Component{

    //handleIncrement=(counter)=>{
    
    //handleDelete = (counterID)=>{
    
    //handleReset= ()=>{


    render(){
        return(
            <div>
                <button onClick = {this.props.onRes} type="button" class="btn btn-danger">Reset</button>
                {this.props.counters.map((counter)=>
                    <Counter 
                    key = {counter.id}
                    onIncrement = {this.props.hndlIncr}
                    onDelete = {this.props.onDel}
                    counter = {counter}
                    >  
                    </Counter>
            
                )}
            </div>
        );
    }

}
export default Counters;

