interface Nameable{
  name:string;
}

interface Human extends Nameable {
  age: number;
  greeting(message:string):void
}

class Developer implements Human{
  constructor(public name:string,public age:number,experience:number){}
  greeting(message:string){
    console.log(message);
  }
}

const tmpDeveloper =  {
  name: 'Quell',
  age: 38,
  experience:3,
  greeting(message:string){
    console.log(message);
    
  }
}

const user : Human = tmpDeveloper;
