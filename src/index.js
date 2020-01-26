var express = require('express');
const routes =require('./routes');

//DOCKER port and host
const PORT = 3000;
const HOST ='0.0.0.0';

var app = express();

app.use(routes);

app.listen(PORT,HOST,()=>{
    console.log('> debug: listening on port 3000.');
});