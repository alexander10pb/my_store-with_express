const express = require('express');
const routerApi = require('./routes'); // Busca en automatico el archivo index.js
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

// Middleware para poder recibir json que nos envian en POST
app.use(express.json());

// use middleware to control the ips that access
const whileList = ['http://localhost:5500', 'https://myapp.co'];
const options = {
    origin: (origin, callback) => {
        if (whileList.includes(origin) || !origin ){
            callback(null, true)
        } else {
            callback(new Error('Acceso no permitido'))
        }
    }
}
app.use(cors(options));

routerApi(app);

// Utilizamos los middleware. Siempre deben ir después del routing:
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hola mi server en Express')
});

app.listen(port, () => {
    console.log('Mi port' + port);
})