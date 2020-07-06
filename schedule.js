const express=require('express')
const path=require('path')
const app=express()
const sch=require('node-schedule')

var count=0;
//var c=function(time){
var j = sch.scheduleJob('*/2 * * * * *', function(){
    //console.log(name);
    //console.log(time)
     count++;
    console.log(' repeat '+count);
    
    }
    ,{scheduled:false}
    );
    
//}
app.get('/',(req,res)=>{
// var time=req.headers.time 
// var status=req.headers.stop
console.log('start')
j.reschedule()
res.send('task-started')
})

app.get('/stop',(req,res)=>{
    console.log('stopped')
    j.cancel()
    res.send('task paused')
})

app.listen(3002,()=>{console.log(' at port 3002')});
