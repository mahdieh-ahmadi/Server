const express = require('express');
const server = express();

const serverID = process.env.PORT || 2000;
const middleWare = require('./middleWare')

server.use(middleWare.logger)

server.get('/about' , (req , res) => {
    res.send('about my team')
})

server.use(express.static(__dirname + '/public'))

server.listen(serverID , () => {
    console.log('server is begin at locallhost ' + serverID)
})