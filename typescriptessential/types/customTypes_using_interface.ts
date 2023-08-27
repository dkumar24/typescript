/** Useing interface you can create your own custom type
 * 
 */
//All properties are required
interface Contact extends address{
    name:string,
    mobile:string,
    email:string,
    landLine?:number //Optional property 
     
}

let myContact:Contact = {
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