let hasValue: boolean = true;
let count: number = 10;
let float:number = 3.14;
let negative:number = -0.12;
let single:string = 'hello';
let double:string = "hello";
let back:string = `hello`;
let hello:string;
hello='hello';

const person = {
  name:{
    first:'Jack',
    last:'Smith'
  },
  age:21,
}

const fruits : string[] = ['Apple','Banana','Grape']
const fruit = fruits[0];

const book :[string,number,boolean] = ['business',1500,false]

enum CoffeeSize{
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot:true,
  size:CoffeeSize.SHORT,
}

coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);

let anyting:any=true;
anyting = 'hello';
anyting = ['hello',33,true]
anyting = {}
anyting.jfkdjfds = 'fjsfjsdl';

let banana  = 'banana';
banana =  anyting;

let unionType:number | string = 10;
unionType ='hello';

let unionTypes:(number | string)[] = [21,'hello'];

type ClothSize = 'small'|'medium'|'large';

const apple:'apple' = 'apple';
let clothSize :ClothSize =  'small';

const cloth:{
  color:string;
  size:ClothSize;
}={
  color:'white',
  size:'medium'
}