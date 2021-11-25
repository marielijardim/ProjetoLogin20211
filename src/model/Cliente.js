const {Model, DataTypes} = require("sequelize");

class Cliente extends Model {
    static init(sequelize){
        super.init(
            {
                nome: DataTypes.STRING,
                sobrenome: DataTypes.STRING,
                genero: DataTypes.STRING,
                endereco: DataTypes.STRING,
                cidade: DataTypes.STRING,
                estado: DataTypes.STRING,
                email: DataTypes.STRING,
                senha: DataTypes.STRING,
                foto: DataTypes.STRING,

            }, {sequelize, freezeTableName: true },
        );
    }
}

module.exports = Cliente;