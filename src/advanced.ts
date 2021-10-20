type Engineer = {
  name:string;
  role:string;
}

type Blogger ={
  name:string;
  follower:number;
}

type EngineerBlogger = Engineer & Blogger ;

const tom :EngineerBlogger ={
  name:'Tom',
  role:'front-end',
  follower:1000
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix =  NumberBoolean & StringNumber;

function toUpperCase(x:string | number) {
  if(typeof x === 'string'){
   return x.toUpperCase()
  }
  return
}

type NomadWoker = Engineer | Blogger;
function describeProfile(nomadWoker:NomadWoker){
  console.log(nomadWoker);
  if('role' in nomadWoker){
   console.log(nomadWoker.role);
  }
  if('follower' in nomadWoker){
    console.log(nomadWoker.follower);
  }
}

class Dog {
  kind:'dog' = 'dog'
  speak(){
    console.log('bow-wow');
  }
}

class Bird {
  kind:'bird' = 'bird'
  speak(){
    console.log('tweet-tweet');
  }
  fly(){
    console.log('flutter');
    
  }
}

type Pet = Dog | Bird;
function havePet(pet:Pet){
  pet.speak();
  switch(pet.kind){
    case'bird':
    pet.fly();
  }
  if(pet instanceof Bird){
    pet.fly();
  }
}

havePet(new Bird());

// const input = document.getElementById('input') as HTMLInputElement
// input.value = 'initial input value';
(document.getElementById('input') as HTMLInputElement).value =  'initial input value';