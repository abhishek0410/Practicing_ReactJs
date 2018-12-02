//***************** */1.) UNDERSTANDING DIFFERENCE BETWEEN VAR AND  CONST.*********
//******************************************************************************* */
// import ReactDOM from 'react-dom';
// // function sayHello(){
// //     for (var i = 0 ; i<5;i++){
// //         console.log(i);
// //     }
// //     console.log(i +5);
// // }
// // sayHello();


//***************** */2.)UNDERSTANDING "THIS" keyword*******************************
//******************************************************************************* */
// const person = {
//     hello(){
//        console.log("Hello world, how is it going ");
//        console.log(this)
//    },
// }
// var hello1 = person.hello;
// hello1();


//***************** */3.)USING ARROW FUNCTIONS*******************************
//******************************************************************************* */
// const hello2 = ()=>{
//     console.log("Hellow world, this is hello from the arrow gunction");
// }

// hello2();

//***************** */4.)MAP METHOD IN REACT *******************************
//******************************************************************************* */
//4a.) First ,we will see how to use map WITHOUT USING ARROR FUNCTION: 

// var colors = ['red','blue','green'];

// // colors.map(function(c){
// //     console.log(c);
// // })

// //Now doing the above USING THE ARROW FUNCTION : 
// colors.map((c)=>{
//     console.log("This is using the arrow functions");
//     console.log(c);
// })

//***************** */5.)SPREAD OPERATOR ******************************************
//******************************************************************************* */

// var countries1 = ["Germnay","India","Australia"];
// var countries2 = ["USA","Canada","New Zeland"];

// //Concateneating : 
// var countries3 = [...countries1,...countries2];
// console.log(countries3);

//***************** */6.)CLASSES **************************************************
//******************************************************************************* */

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     walk(){   //While defining function inside the classes, you need not write "function"
//         console.log("Will you walk with me "+ this.name);
//    }
// }

// var person1 = new Person("Abhishek");
// person1.walk();

//***************** */7.)INHERITANCE **********************************************
//******************************************************************************* */


// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     walk(){   //While defining function inside the classes, you need not write "function"
//         console.log("Will you walk with me "+ this.name);
//    }
// }

// class Teacher extends Person{
    
//     constructor(name, subject){
//         super(name);
//         this.subject = subject;
//     }
//     teach(){
//         console.log("My name is "+ this.name+" and i teach" + this.subject);
//     }
// }

// var teacher1 = new Teacher("Abhishek","Machine Learning");
// teacher1.teach();

//***************** */8.)Defining a function  **********************************************
//******************************************************************************* *

// carPrice =(c)=>{
//     console.log("Car price is ", c);
// }

state = {
     counters : [
         {id : 1 , value :10 },
         {id :2 , value : 20},
         {id :3 , value : 30},
         {id :4 , value : 40}
     ],
 };

var new_counters = state.counters.map((c)=>{
          c.value = 0 ;
          return(c); 
});

console.log(new_counters);