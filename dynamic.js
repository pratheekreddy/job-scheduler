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


var task=function() {
    //task1()
    //  console.log(db)
    console.log('this is function 1 and task ');

  }

  var task1=function(time) {
   console.log('this is function 2 '+time)
  }


  var complete=function(){
      console.log('stopped...........')
  }

// var job = new cronjob(first,task, complete, false, 'Asia/Kolkata');
var gjobarr = {};

app.get('/create',(req,res)=>{
    var time = req.body.time;
    var Jtype=req.body.type
    x++

    //var type = 'PROCEDURE'; //PROCEDURE_INPUT, URL, URL_INPUT
    switch(Jtype) {
        case 1:
            var ljob = new cronjob(time,function() {
                //task1()
                //  console.log(db)
                console.log('this is function 1 and task '+time);
                task1(time)
              }, complete, false, 'Asia/Kolkata');
            res.send('job created')
          break;
        case 2:
            console.log('case 2.....'+time)
            var ljob = new cronjob(time,task1, complete, false, 'Asia/Kolkata');
            res.send('job created')
          break;
        default:
          console.log('default')
      }
  
    gjobarr[Jtype]=ljob;
});

app.get('/list',(req,res)=>{

    console.log(gjobarr[req.body.mod])
    res.send(gjobarr[req.body.mod])
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