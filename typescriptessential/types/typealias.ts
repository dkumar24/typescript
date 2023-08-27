interface Contact extends address{
    name:contactName,//type alias here used as string here
    mobile:string,
    email:string,
    landLine?:number //Optional property 
     
}

let myContact3:Contact = {
    name:"Deepak",
    mobile:"2346689034",
    email:"test@gmail.com",
    houseNo:"test",
    city:"Moonak",
    state:"Punjab",
    country:"India",
    pinCode:148033
}

interface address {
    houseNo:string,
    city:string,
    state:string,
    country:string,
    pinCode:number
}
type contactName=string;


type product = {
    name:string,
    price:number,
    company:string
}
let lux:product = {
    name:"Lux",
    company:"Lux",
    price:10.5
}
console.log(lux.company);

