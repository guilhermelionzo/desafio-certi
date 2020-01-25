const {Router} = require('express');
const converter = require('./controller')

const routes = Router();

routes.get('/:id',(request,response) =>{
    
    return response.json(converter(request.params));
});

//ROOT CASE
routes.get('/',(request,response) =>{
    console.log(">degbug: Invalid Option");
    return response.json({message:"Invalid option. Please, input a numnber between -99999 and 99999."});
});

module.exports = routes;