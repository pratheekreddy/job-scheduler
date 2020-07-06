const express=require('express')
const path=require('path')
const app=express()
const cronjob=require('cron').CronJob
const cron=require('node-cron')
const CronTime = require('cron').CronTime
var bodyParser = require('body-parser')

//app.use(bodyParser);
//app.use(express.bodyParser());
app.use(bodyParser.json());
var x=0

var first='* * * * * *'


var task=function(x) {
    //task1()
    //  console.log(db)
    console.log('this is function 1 and task '+x);

  }

  var task1=function(a,y,x) {
   console.log('this is function 2')
  }


  var complete=function(){
      console.log('stopped...........')
  }

// var job = new cronjob(first,task, complete, false, 'Asia/Kolkata');
var gjobarr = {};

app.get('/create',(req,res)=>{
    var time = req.body.time;
    var key=req.body.key;
    var Jtype=req.body.type
    x++

    var type = 'PROCEDURE'; //PROCEDURE_INPUT, URL, URL_INPUT
    switch(Jtype) {
        case 1:
            var ljob = new cronjob(time,task(x), complete, false, 'Asia/Kolkata');
          break;
        case 2:
            var ljob = new cronjob(time,task, complete, false, 'Asia/Kolkata');
          break;
        default:
          console.log('default')
      }
  
    gjobarr[key]=ljob;
});

app.get('/list',(req,res)=>{

    console.log(gjobarr)
})

app.get('/start',(req,res)=>{
 var jobid=req.body.id
 //global.db=req.body.db

 if(jobid<gjobarr.length){
gjobarr[jobid].start()

res.send('cron started')}
else{
    console.log('outbound error')
    res.send('array outbound')
}
})

app.get('/stop',(req,res)=>{

    var jobid=req.body.id
    if(jobid<gjobarr.length){
    gjobarr[jobid].stop()
    res.send('cron stopped')
    }
    })



// var settime=function(input){
//     job.setTime(new CronTime(time))
// }

app.get('/set',(req,res)=>{
    var time=req.body.time
    var jobid=req.body.id
    console.log(time)
     time=time.toString()
    
    gjobarr[jobid].setTime(new CronTime(time))
    res.send('time changes')
})

app.listen(3005,()=>{console.log('@.....3005')})