import  {person}  from './person'

export class teacher extends person{
    constructor(name,subject){
        super(name);
        this.subject = subject;
    }
    teach(){
        console.log("My name is "+ this.name + " and i teach " + this.subject);
    }
}