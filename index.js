const http=require('http')
const port =3000

const server = http.createServer(function(req,res){
    console.log(req.url)
    res.end('Hello world!!')
})

server.listen(port,function(){
    console.log('Listen in port:', port);
})