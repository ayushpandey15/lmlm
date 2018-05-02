const express=require('express')
const socket=require('socket.io')
const app=express()
const PORT=process.env.PORT || 8000
const server=app.listen(PORT,()=>
{
    console.log(`the port is listening at ${PORT}.....`)
})
app.use(express.static(__dirname))
const io=socket(server)
io.on('connection',(socket)=>
{
 
    socket.on("chat",(data)=>
{
    io.sockets.emit("chat",data)
})
 socket.on('typing',(data)=>
 {  
  socket.broadcast.emit("typing",data)
  
})
})