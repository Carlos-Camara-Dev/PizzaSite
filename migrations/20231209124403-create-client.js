'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
      },
      role_level:{
        type:Sequelize.INTEGER,
        allowNull: false,
        defaultValue:1
      },
      username:{
        type: Sequelize.STRING(1234),
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(1234),
        allowNull: false
      },
      password:{
        type: Sequelize.STRING(1234),
        allowNull: false
      },
      refresh_token:{
        type: Sequelize.STRING(1234),
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('clients');
  }
};
