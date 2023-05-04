const express = require('express');
const color = require('colors');

const server = express ();


server.get("/",(req, res) => {
    res.send('"<h1> hola mundo desde nodeJs express </h1>')
    res.end()
})
server.listen(3001, () => {
    console.log("server on port 3001 con express".green)
})
