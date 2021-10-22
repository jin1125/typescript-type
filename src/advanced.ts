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


function toUpperCase(x:string):string;
function toUpperCase(x: number): number;
function toUpperCase(x:string | number):string | number {
  if(typeof x === 'string'){
   return x.toUpperCase()
  }
  return x
}

interface TmpFunc{
    (x: string): string;
    (x: number): number;
}

function upperHello(x: string | number) {
  return 0;
}
// interface FuncA {
//   (a:number,b:string):number
//   (a:string,b:number):number
// }
// interface FuncB {
//   (a:string):number
// }

// let intersectionFunc:FuncA & FuncB;
// intersectionFunc = function(a:number | string ,b?:number | string){
//   return 0
// }


interface FuncA {
  (a:number):number
}
interface FuncB {
  (a:string):string
}

let unionFunc:FuncA | FuncB;
unionFunc = function(a:number){return 34}


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

const input = document.getElementById('input') as HTMLInputElement
input.value = 'initial input value';
(document.getElementById('input') as HTMLInputElement).value =  'initial input value';

interface Desiner {
  name:string;
  [index:string]:string;
}

const desiner:Desiner = {
  name:'Tom',
  role:'web'
}

console.log(desiner.role);

interface DownloadData{
  id:number;
  user?:{
    name?:{
      first:string;
      last:string;
    }
  }
}

const downloadedData:DownloadData={
  id:1
}

console.log(downloadedData.user?.name?.first);

const userData = downloadedData.user ?? 'no-user'

type id = DownloadData['user' | 'user']

enum Color{
  RED,
  BLUE
}

class AdvancePerson{
  name:string ='Peter'
  age:number = 35;
}
class AdvanceCar{
  name:string ='Prius'
  age:number = 5;
}

let target = new AdvancePerson
let source = new AdvanceCar
target = source;