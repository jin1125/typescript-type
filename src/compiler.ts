function echo (message:string):string|null{
return message;
}

let implicitAny ;
implicitAny = 'implicitAny';

let nullableMessage:string | null = echo('hi');
let undefinedableMessage:string | undefined = undefined;
let onlyNull:null = null;
let onlyundeined:undefined = undefined;
if(nullableMessage){
  nullableMessage.toUpperCase();
}
echo.call(null,'hi')