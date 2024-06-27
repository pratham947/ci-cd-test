import express from "express"
const app = express();

console.log(process);

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(3000);