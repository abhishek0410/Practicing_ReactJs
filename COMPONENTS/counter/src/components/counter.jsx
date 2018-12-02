import React,{ Component } from 'react';
//import classes from '*.module.scss';

//************************This is the most basic one **************************************
//**************************************************************************************** */
// class Counter extends Component{
//     render(){
//         return( 
//         <React.Fragment>
//             <h1>Hello World</h1>
//             <button>Increment</button>
//         </React.Fragment>
//         );
//           }
// }

//************************2.)Here we add an expression **************************************
//**************************************************************************************** */

// class Counter extends Component{
//     status ={
//         value : 2,
//     };
//     render(){
//         return(
//             <React.Fragment>
//                 <h1> {this.status.value ===2? "HagHahAHA" : 0}</h1>
//                 <button>increment</button>
//             </React.Fragment>
//         );

//     }
// }
// export default Counter;

//************************3.)SOME MORE EXPERIMENTATION,ADDING AN IMAGE***********************
//**************************************************************************************** */

// class Counter extends Component{
//     state={
//         count:0,
//         imageUrl:"https://picsum.photos/200"
//     };
//     render(){
//         return(
//             <React.Fragment>
//                 <img src={this.state.imageUrl} alt=""/>
//                 <span  className = "badge badge-primary m-2"> {this.formatCount()} </span>
//                     <button className = "btn btn-secondary btn-sm"> Increment </button>
//             </React.Fragment>
//         );
//     }
//     formatCount(){
//      const {count} = this.state;
//      return count ===0? <h1>Zero</h1> : count;  
//     }
// }
// export default Counter;

//************************4.)"RENDERING" A CLASS DYNAMICALLY***********************
//**************************************************************************************** */

// class Counter extends Component{
//     state = {
//         count:1,
//     }
//     render(){
//         let b_strapClasses = "badge m-2 badge-";
//         b_strapClasses += this.state.count ===0? "warning":"primary";

//         return(
//         <div>
//             <span className={b_strapClasses}>{this.formatcount()}  </span>
//             <button> Increment</button>
//         </div>
//         );
//     }
//     formatcount(){
//         const {count} =this.state;
//         return count === 0? <h1>Zero </h1> :count; 
//     }
// }
// export default  Counter;

//*********************************5.)RENDERING LISTS***************************************
//**************************************************************************************** */

// class Counter extends Component{
    
//     getList(){
//         var tags  = ["tag1","tag2","tag3"];
//         return tags;
//     }
//     getCount(){
//         return 0;
//     }
//     formatcount(){
       
//         return (this.getCount() === 0? <h1>Zero</h1> : <h1>One</h1>);
//     }
//     getBadgeClass(){
//         return (this.getCount() === 0?"badge m-2 badge-warning" : "badge m-2 badge-primary");
//     }
//     render(){
//         return(
//             <div>
//                 <span className = {this.getBadgeClass()}>{this.formatcount()}</span>
//                 <button>Increment</button>
//             <ul>    {this.getList().map((x) => {
//                         return(<li>{x}</li>);
//                          })} 
//             </ul>
//             </div>
//         );
//     }
// }

// export default Counter;


//*********************************6.)HANDLING EVENTS***************************************
//**************************************************************************************** */

// class Counter extends Component{

//     onClick_Increment(){
//         console.log("Incremenet clicked");
//     }
//     getList(){
//         var tags  = ["tag1","tag2","tag3"];
//         return tags;
//     }
//     getCount(){
//         return 0;
//     }
//     formatcount(){
       
//         return (this.getCount() === 0? <h1>Zero</h1> : <h1>One</h1>);
//     }
//     getBadgeClass(){
//         return (this.getCount() === 0?"badge m-2 badge-warning" : "badge m-2 badge-primary");
//     }
//     render(){
//         return(
//             <div>
//                 <span className = {this.getBadgeClass()}>{this.formatcount()}</span>
//                 <button onClick ={this.onClick_Increment}>Increment</button>
//             <ul>    {this.getList().map((x) => {
//                         return(<li>{x}</li>);
//                          })} 
//             </ul>
//             </div>
//         );
//     }
// }

// export default Counter;

//*********************************7.)BINDING EVENT HANDLERS***************************************
//**************************************************************************************** */

// class Counter extends Component{

//     onClick_Increment = () =>{
//         console.log("Incremenet clicked " ,this);
//     }
//     getList(){
//         var tags  = ["tag1","tag2","tag3"];
//         return tags;
//     }
//     getCount(){
//         return 0;
//     }
//     formatcount(){
       
//         return (this.getCount() === 0? <h1>Zero</h1> : <h1>One</h1>);
//     }
//     getBadgeClass(){
//         return (this.getCount() === 0?"badge m-2 badge-warning" : "badge m-2 badge-primary");
//     }
//     render(){
//         return(
//             <div>
//                 <span className = {this.getBadgeClass()}>{this.formatcount()}</span>
//                 <button onClick ={this.onClick_Increment}>Increment</button>
//             <ul>    {this.getList().map((x) => {
//                         return(<li>{x}</li>);
//                          })} 
//             </ul>
//             </div>
//         );
//     }
// }

// export default Counter;

//*********************************12.)UPDATING THE STATE***************************************
//**************************************************************************************** */
class Counter extends Component{

    state = {
        count : 0 
    };
    
    constructor(){
        super();
    }
     
    onClick_Increment = () =>{
        this.setState({count: this.state.count + 1})c
       
    };
    getList(){
        var tags  = ["tag1","tag2","tag3"];
        return tags;
    }
    formatcount(){
        return (this.state.count === 0? <h1>Zero</h1> : this.state.count );
    }
    getBadgeClass(){
        return (this.state.count === 0?"badge m-2 badge-warning" : "badge m-2 badge-primary");
    }
    render(){
        return(
            <div>
                <span className = {this.getBadgeClass()}>{this.formatcount()}</span>
                <button onClick ={this.onClick_Increment}>Increment</button>
                <ul>{this.getList().map((x) => { return(<li>{x}</li>);})} </ul>
            </div>
        );
    }
}
export default Counter;