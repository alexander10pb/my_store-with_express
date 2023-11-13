const { Pool } = require('pg');

const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool({ connectionString: URI });


module.exports= pool;

// Manejando un Pool de conexiones

// Hay un problema con getConnection. El problema es que 
// cada vez que llamamos a getConnection, lo que hacemos 
// internamente en el codigo es llamar y llamar y llamar, 
// es decir hacer request continuamentes, eso esta mal 
// porque puede sobrecargar el servidor de request. Entonces, 
// esto es un problema porque por cada request se crea una
// negociacion con la db, se tarda 20ms o mas, y asi vamos 
// saturando el servidor. La solucion es usar pool.

// Sin un pool, yo deberia cerrar las conexiones manuelament.e

// Que es un pool? Un pool de conexiones es un conjunto 
// limitado de conexiones a una base de datos, que es 
// manejado por un servidor de aplicaciones de forma tal, 
// que dichas conexiones pueden ser reutilizadas por los 
// diferentes usuarios. Un pool optimiza

// Lo que hace el pool es sencillamente es ser un mediador
// entre las bases de datos y el cliente. Entonces a medida
// que los clientes empiecen a hacer consultas, la aplicacion 
// de manera asincrona conectara con el pool y el pool se 
// encargara tanto de abrir o cerrar conexiones para que la 
// informacion siga trabajando de manera eficiente. Pero un 
// pool es mucho mas inteligente que eso, ya que permite 
// REUTILIZAR DATA QUE OTROS CLIENTES YA ACCEDIERON, CLARO 
// SIEMPRE Y CUANDO LA DATA A REUTILIZAR SEA LA MISMA QUE 
// ESOS CLIENTES NECESITABAN , y a su vez lograremos que los
//  servidores no se saturen y nuestra app en el background 
//  trabajara con las consultas, y asi evitara un problema 
//  en el proceso.