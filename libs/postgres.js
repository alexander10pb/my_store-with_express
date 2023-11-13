const { Client } = require('pg');

// const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     user: 'alex',
//     password: 'admin123',
//     database :'my_store'
// });

// // La conexion nos da un promesa como retorno
// client.connect();
// Controlarla de manera asyncrona entonces debemos usar await y 
// para que se ejecute debe estar en un func asyn

async function getConnetion(){
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'alex',
        password: 'admin123',
        database :'my_store'
    });
    await client.connect();
    return client;
}

module.exports= getConnetion;





