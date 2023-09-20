const express = require('express');

const app = express();

const PORT=8080;

app.get("/",(req,res)=>{
    res.send("hey devs")
});

app.listen(process.env.PORT ||PORT,()=>{
    console.log('server is running')
})