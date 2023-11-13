const { User, UserSchema } = require('./user.model');

//Aqui se cargaran todos los modelos
function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;