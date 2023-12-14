'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
      },
      product_image:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      product_owner:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      product_name:{
        type: Sequelize.STRING(1234),
        allowNull: false
      },
      product_price:{
        type: Sequelize.STRING(1234),
        allowNull: false
      },
      product_description:{
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
    return queryInterface.dropTable('products');
  }
};
