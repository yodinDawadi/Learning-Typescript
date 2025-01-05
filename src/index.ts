// const addNumber=(a:number,b:number)=>{
//     return a + b;
// }

// console.log(addNumber(3,4));

import express from "express";
const PORT:number = 8085;
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello from the server")
})

app.listen(PORT,()=>{
    console.log(`Server started at port:${PORT}`);
})
