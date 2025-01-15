import express from 'express'
const app = express()
// const server = http.createServer((req,res)=>{
//     res.write("test")
//     res.end();
// })

// server.listen((3000), ()=>{
//     console.log("server is Running");
// })
app.use("/", (req,res,next)=>{
    res.send("This is the test server")
})
app.get("/hello", (req,res,next)=>{
    res.send("This is the hello response")
})
app.listen(3000,()=>{
    console.log("Server is running");
    
})