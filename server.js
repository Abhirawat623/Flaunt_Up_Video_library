const express = require('express');

const app = express();

const PORT=8080;

app.use(express.json())

const videoRouter = require('./routers/video.router');

app.get("/",(req,res)=>{
    res.send("hey devs")
});

//videos
app.use('/api/videos',videoRouter)


app.listen(process.env.PORT ||PORT,()=>{
    console.log('server is running')
})