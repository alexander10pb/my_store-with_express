const { Model, DataTypes, Sequelize } = require('sequelize');

// Definir nombre de la tabla par que despues sequilice creaa la tabla en nuestra BD
const USER_TABLE = 'users';

// Define la estructura de la tabla como schema
const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'customes'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
}

class User extends Model {
    // Metodos estaticos
    static associate(models){
        this.hasOne(models.Customer, {
            as: 'customer',
            foreignKey: 'userId'
        })
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false,
        }
    }
}

module.exports = { USER_TABLE, UserSchema, User }