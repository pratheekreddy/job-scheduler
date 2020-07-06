const cronjob=require('cron').CronJob
const cron=require('node-cron')
const CronTime = require('cron').CronTime


 var ljob = new cronjob('*/3 * * * * *', function(){
    //console.log(ljob.cronTime.source)
   console.log('start')
 }, ()=>{console.log('complete')}, false, 'Asia/Kolkata');


console.log(ljob.cronTime.__proto__.sendAt(1))






// ljob.addCallback(()=>console.log('hello world'))
// // console.log(sendAt())
//  ljob.start()

//  ljob._callbacks.pop()
//  console.log(ljob.running)
 //console.log(ljob.fireOnTick())
//  ljob.
//  ljob.stop()
//  ljob.fireOnTick()
//  console.log(ljob.running)
// print
// timeout 10 min
// print