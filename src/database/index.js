const sequelize = require("sequelize");

const dbConfig = require("../config/config.js"); 

const Cliente = require("../model/Cliente");


const conexao = new sequelize (dbConfig);

Cliente.init(conexao);


module.exports = conexao;