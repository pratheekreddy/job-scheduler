const express=require('express')
const path=require('path')
const app=express()
const cronjob=require('cron').CronJob
const cron=require('node-cron')
const CronTime = require('cron').CronTime
var bodyParser = require('body-parser')

app.get('/',(req,res)=>{
    console.log(req.query.key)
})

//app.use(bodyParser);
//app.use(express.bodyParser());
app.use(bodyParser.json());

var first='* * * * * *'
var task=function() {
    //task1()
    //  console.log(db)
    console.log('last '+job.lastDate()+' next '+job.nextDates(1));
    console.log('is job running? ', job.running);
  }

  var complete=function(){
      console.log('stopped...........')
  }

var job = new cronjob(first,task, complete, false, 'Asia/Kolkata');


app.get('/start',(req,res)=>{
// var db
// global.db=req.body.db
// job.fireOnTick(()=>{
//     console.log('hello')
// })
// var task1=function() {
//           console.log('hello')
//    }
   
job.start()

res.send('cron started')
})

app.get('/stop',(req,res)=>{

    job.stop()
    res.send('cron stopped')
    })

// app.get('/status',(req,res)=>{
//     var flag=req.body.status
//     if(flag==true)
//     {
//         job.start()
//     }
//     if(flag==false){
//         job.stop()
//     }

// })

// var settime=function(input){
//     job.setTime(new CronTime(time))
// }

app.get('/set',(req,res)=>{
    var time=req.body.time
    console.log(time)
     time=time.toString()
     //time='*/5 * * * * *'
    // settime(time)
    // time=''+time+''
    //var time=cronjob.CronTime("*/5 * * * * *")
    // var valid = cron.validate(time);
    // console.log(valid)
    job.setTime(new CronTime(time))
    res.send('time changes')
})

app.listen(3004,()=>{console.log('@.....3004')})