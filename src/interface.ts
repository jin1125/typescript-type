// type addFunc =(num1:number,num2:number) => number;
interface addFunc{
  (num1:number,num2:number):number;
}

let  addFunc:addFunc;
addFunc = (n1:number,n2:number)=>{
  return n1+n2;
}

type Nameable = {
  name:string;
  nickName? :string;
}

const nameable:Nameable={
  name:'Quill',
  nickName:'Quilla'
}

interface Human extends Nameable {
  age: number;
  greeting(message:string):void
}

class Developer implements Human{
  constructor(public name:string,public age:number,experience:number){}
  greeting(message:string = 'hello'){
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
