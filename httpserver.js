const http=require ('http')

const hostname='127.0.0.1'

const port=5000

http.createServer((req,res)=>{
    //res.writeHead(200,{'Content-type':'text/plain'})
    if(req.methpod=='get'&& req.path=='/'){
        res.sendDate(th)
    }
    res.end('hello world')
}).listen(port,hostname,()=>{console.log('server is running at http://'+hostname+':'+port)})
