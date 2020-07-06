const express=require('express')
const path=require('path')
const app=express()
const cron=require('node-cron')

var count=0;
//var c=function(time){
var j = cron.schedule('*/2 * * * * *', function(){
    //console.log(name);
    //console.log(time)
     count++;
    console.log(' repeat '+count);
    
    },{scheduled:false});
    
//}
app.get('/',(req,res)=>{
var time=req.headers.time 
var status=req.headers.stop

j.start()
res.send('task-started')
})

app.get('/stop',(req,res)=>{
    j.stop()
    res.send('task paused')
})

app.listen(3001,()=>{console.log(' at port 3001')});
