type contact = {
    name:string,
    mobileNo:string,
    email:string;
}

const value: keyof contact = "email";

type usKeys = keyof contact;
function getValue<T,key extends keyof T>(object:T,key:key)
{
    return object[key];
}

const valueOfKey = getValue({name:"Deepak",mobileNo:"8686575655",email:"testing"},"email");
console.log(valueOfKey)