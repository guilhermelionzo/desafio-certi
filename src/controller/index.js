var extensiveNumberConverter = require('./extensiveNumberConverter')


function converter(number){

    var inputREGEX = /^-?[0-9]\d{0,4}$/;        //TODO: Regex para validar numeros fracionados
    var result = inputREGEX.test(number.id);

    if(!result){
        return {message:"The input number "+number.id+" is greather than |99999| or is divergent from the standard."}
    }

    return extensiveNumberConverter(parseFloat(number.id));

}

module.exports = converter;