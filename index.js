const express=require('express')
const path=require('path')
const app=express()
var sch = require('node-schedule');




app.get('/',(req,res)=>{
var count=0;
  

  var time=req.headers.time 
  var status=req.headers.stop
  console.log(time)
 
 var j = sch.scheduleJob(time, function(date){
  //console.log(name);
  
   count++;
  console.log(j.nextInvocation()+' repeat '+count);
  console.log(status)

});

if(status==true){
  //let c=sch.scheduleJob[job]
  j.cancle();
  console.log('end')
  }

})


























// app.get('/bind',(req,res)=>{
 
//     var date = '0 1 * * * *';
//     var x = 'Tada!';
//     var j = sch.scheduleJob(date, function(y){
//       console.log(y);
//     }.bind(null,x));
//     x = 'Changing Data';
//     console.log(x)
    
//     })



app.listen(3000,()=>{console.log(' at port 3000')});

