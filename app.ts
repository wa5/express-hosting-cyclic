let express=require('express')
let app=express()
app.get('/test',(req:any,res:any)=>{
    res.send("hello")
})
app.listen(8001,()=>{
    console.log("workibf")
})