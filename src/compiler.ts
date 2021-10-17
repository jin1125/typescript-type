let globalHello ='hello';
function echo (message:string):string|null |undefined {
 if(message){
   return message;
 }
}

let implicitAny ;
implicitAny = 'implicitAny';

let nullableMessage:string | null |undefined = echo('hi');
let undefinedableMessage:string | undefined = undefined;
let onlyNull:null = null;
let onlyundeined:undefined = undefined;
if(nullableMessage){
  nullableMessage.toUpperCase();
}
echo.call(null,'hi')