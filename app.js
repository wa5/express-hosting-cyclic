let express=require('express')
let app=express()
app.get('/test',(req,res)=>{
    res.send("hello")
})
app.listen(8001,()=>{
    console.log("workibf")
})