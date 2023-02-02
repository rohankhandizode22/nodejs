const fs = require("fs");
const http=require("http");
const PORT=8899;
const server=http.createServer((req,res)=>{
  if(req.url=="/"){
    res.writeHead(200,{'Content-Type':'Text/Html'});
    res.end("<h2> File Handling Crud </h2>");
  }
  else if(req.url=="/createfile"){
      if(fs.existsSync("neosoft.txt")){
          res.end("Alread Exists");
      }
      else{
          fs.writeFile('neosoft.txt',"Welcome to Neosoft !",(err)=>{
            if(err) throw err 
            else res.end('File Created');
          })
      }
  }
  else if(req.url=="/readdata"){
    if(fs.existsSync("neosoft.txt")){
         let data=fs.readFileSync("neosoft.txt");
         res.end(data.toString());
    }
    else{
        res.end("File is not  Exists");
    } 
  }
  else if(req.url=="/deletefile"){
    if(fs.existsSync("neosoft.txt")){
       fs.unlink("neosoft.txt",(err)=>{
        if(err) throw err 
        else res.end("File Deleted")
       })
    }
    else{
        res.end("File is not  Exists");
    } 
  }
  else if(req.url=="/append"){
    if(fs.existsSync("neosoft.txt")){
       fs.appendFile("neosoft.txt","Data Added !",(err)=>{
        if(err) throw err;
        else res.end("Data Updated")
       })
    }
    else{
        res.end("File is not  Exists");
    } 
  }
  else {
    res.end("Invalid Request");
  }
})
server.listen(PORT,(err)=>{
    if(err) throw err 
    else {
        console.log(`Server work on ${PORT}`)
    }
})
console.log("Program End")
