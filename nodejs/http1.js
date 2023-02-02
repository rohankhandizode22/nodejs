const http=require('http');
const PORT=8899;
const server=http.createServer((req,res)=>{
  res.end("First node server")
})
server.listen(PORT,(err)=>{
    if(err) throw err 
    else console.log(`Server work on ${PORT}`)
})