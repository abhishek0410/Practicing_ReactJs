import React , {Component} from "react";
import Counter from './counter';

class Counters extends Component{
    state = {
        counters : [
            {id : 1 , value :10 },
            {id :2 , value : 20},
            {id :3 , value : 30},
            {id :4 , value : 40}
        ],
    };
    handleDelete = (id) => {
        const counter_new = this.state.counters.filter((c)=> c.id!== id);
        this.setState({counters : counter_new});
    };    
    handleReset = () =>{
        const counter_new = this.state.counters.map((c)=> {
        c.value  = 0 ;
        return (c);
        }
        );
        this.setState({counters:counter_new});
    } ;

    
    render(){
        return(
            <div>
             <button onClick={this.handleReset} type="button" class="btn btn-success">Reset</button>
                {this.state.counters.map((something_random)=>
                 <Counter id = {something_random.id} key = {something_random.id} value = {something_random.value} onDelete = {this.handleDelete}>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;