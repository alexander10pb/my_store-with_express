const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
// const URI = `mysql://root:${PASSWORD}@${config.dbHost}:3306/${config.dbName}`

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    // dialect: 'mysql',
    logging: true,
});

setupModels(sequelize);

module.exports = sequelize;