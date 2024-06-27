import express from "express"
const app = express();

console.log("hello");
console.log("newdfkdfjkerefkdfk");

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(3000);