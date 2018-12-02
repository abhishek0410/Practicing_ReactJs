import React , {Component} from 'react';
import Counter from './counter';

class Counters extends Component{
    
    state = {
        counters : [
            {id: 1 , value : 10},
            {id :2 , value : 20},
            {id: 3 , value : 30},
            {id :4 , value : 40} 
        ]
    };

    handleDelete = (id)=>{
        const counters_new = this.state.counters.filter(c=> c.id !== id );
        this.setState({counters : counters_new});
        console.log("We are here ",id);
        
    }
    render(){

        return(
            <div>
                {this.state.counters.map((something_random) => 
                <Counter key={something_random.id} onDelete={this.handleDelete} id ={something_random.id} value={something_random.value}/> )}
            </div>
        );
    }
}

export default Counters;