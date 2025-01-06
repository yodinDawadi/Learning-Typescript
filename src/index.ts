// const addNumber=(a:number,b:number)=>{
//     return a + b;
// }

import { Interface } from "readline"

// console.log(addNumber(3,4));

// import express from "express";
// const PORT:number = 8085;
// const app = express();

// app.get("/",(req,res)=>{
//     res.send("Hello from the server")
// })

// app.listen(PORT,()=>{
//     console.log(`Server started at port:${PORT}`);
// })

//TypeScript with the function
// const Greet=(name:string,age?:number)=>{
//     if(!age){
//      return console.log(`Hello, ${name}`)
//     }
//     else{
//         return console.log(`Hello, ${name} and your age is ${age}`)
//     }
    
// }

// Greet("Yodin Dawadi");
// Greet("Yodin",19);

//Defining a type

// type User ={
//     name:string,
//     age:number,
//     address:string,
//     id:number,
//     isActive:boolean
// };

// const user1:User ={
//     name:"yodin dawadi",
//     age: 19,
//     address:"Damak-5,Jhapa",
//     id:14,
//     isActive:true
// }

// console.log(user1.id,user1.name)

interface Item {
    name:string,
    price:number,
    description?:string,
    stock:number
};

const item1:Item={
    name:"victus",
    price:100000,
    description:"This is a gaming laptop",
    stock:2

}

console.log(item1.name,item1.price);
