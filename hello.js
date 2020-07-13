var fs = require('fs');
const { timeout } = require('cron');


function doA(){
    return new Promise(function(resolve,reject){
        fs.readFile('file1.txt',function(err,data){
            if(!err){
                    resolve(data.toString())
                // setTimeout(()=>{},10000)
            }
        })
    })
}
function doB(){
    return new Promise(function(resolve,reject){
        fs.readFile('file2.txt',function(err,data){
            if(!err){
                resolve(data.toString())
            }
        })
    })
}
function makeCaps(data){
    return new Promise(function(success,failure){
        setTimeout(function(){
            success(data);
        },3000)
    });
}
// doA().then(function (data) {
//     myObj['data1'] = data
//     doB().then(function (data1) {
//         myObj['data2'] = data1
//         console.log(myObj);
//     })
// })

async function main(){
    var data1 =   await doA()
    console.log(data1)
    let a =    makeCaps(data1)
    console.log(data1)
    console.log(a)
    let b = await doB()
    console.log(b)

}
main()
