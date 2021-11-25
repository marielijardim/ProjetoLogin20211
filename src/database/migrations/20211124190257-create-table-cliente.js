"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable("Cliente", 
    {
      id:{
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primarykey: true,
         allowNull: false,

      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      genero:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      endereco:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      foto:{
        type: Sequelize.STRING,
        
      },
      createdAt:{
        type: Sequelize.DATE,
      },
      updatedAt:{
        type: Sequelize.DATE,
      },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable("Cliente");
     
  }
};