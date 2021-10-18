class Person {
  name:string;
  constructor(initName:string){
    this.name = initName;
  }

  greeting(this:Person){
    console.log(`hello! my name is ${this.name}`);
    
  }
}

const quill =  new Person("Quill");
quill.greeting();

const anotherQuill ={
  name:'anotherQuill',
  greeting(){},
  anotherGreeting:quill.greeting
}

anotherQuill.anotherGreeting();