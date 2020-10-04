const express = require('express');
const server = express();

const serverID = process.env.PORT || 2000;
const middleWare = require('./middleWare')

const todos = [{
    id : 1,
    description: 'meet my mom',
    completed : false
},{
    id:2,
    description : 'go to shop',
    completed : false
},{
    id:3,
    description : 'do my homework',
    completed : true
}]

server.use(middleWare.logger)

server.get('/todo' , (req , res) => {
    res.json(todos)
})

server.get('/todo/:id' , (req , res) => {
    let idrequest = req.params.id
    let items = todos.filter((item) => {
        console.log(item.id == idrequest)
        if(item.id == idrequest){
            return item
        }
    })
    
    if (items.length !==0){
        res.json(items)
    }else{
        res.status(404).send()
    }
    
})

server.use(express.static(__dirname + '/public'))

server.listen(serverID , () => {
    console.log('server is begin at locallhost ' + serverID)
})