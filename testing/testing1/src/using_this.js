//In this code , we will use the "this " keyword, and show how it is different from the this , in the JAVA

//Creating an object in java script.

const person = {
     hello(){
        console.log("Hello world, how is it going ");
        console.log(this)
    },
}


//Creating the "Objec of the "Function" 

var hello1 = person.hello();
hello1();
person.hello();