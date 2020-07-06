const express=require('express')
var bodyParser = require('body-parser')

const app=express()
app.use(bodyParser.json())

app.post('/',(req,res)=>{
    // let company=req.body.company
    // let department=req.body.department
    // let location=req.body.location
    // let branch=req.body.branch

    // let {company,department,branch,location}= req.body

    // let a=10,b=20,c=30,d=40
    console.log(company,department,location,branch)

    // let response={
    //     a:a,
    //     b:b,
    //     c:c,
    //     d:d
    // }
    
    // let response={a,b,c,d}
    // res.send(response)

})




app.listen(3000,()=>console.log('3000......'))
