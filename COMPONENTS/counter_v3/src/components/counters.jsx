import React , {Component} from 'react';
import Counter from  './counter';
class Counters extends Component{

    state = {
        counters : [{id : 1 , value :10},
        {id : 2 , value :20},
        {id : 3 , value :30},
        {id : 4 , value :40}

    ] };

    handleIncrement =(counter)=>{
      //  var counter_updated = this.state.counters ;
        var counters_temp = [...this.state.counters];
        var index = counters_temp.indexOf(counter);
        counters_temp[index].value++;
       // console.log("The index is ", index);
        this.setState({counters : counters_temp});

    }

    handleDelete =(counterID) =>{
        var counters_temp = this.state.counters.filter((c)=>
            c.id!==counterID
        );
        //console.log("Following is printed",counterID);
         this.setState({counters : counters_temp});
    }

    handleReset= () =>{
    console.log("handleReset is called ");
    const counters = this.state.counters.map((counter)=>{counter.value = 0; 
        return (counter); }
        );
        this.setState({counters });
    }


    render(){
        return(
            <div>
           <button onClick = {this.handleReset} type="button" class="btn btn-danger">Reset</button>
            {this.state.counters.map((something_random) => <Counter  
            key = {something_random.id} 
            onIncrement = {this.handleIncrement}
            onDelete = {this.handleDelete}
            counter = {something_random}>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;