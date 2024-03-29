'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {

      // email: DataTypes.STRING,
      // password: DataTypes.STRING,
      // firstName: DataTypes.STRING,
      // lastName: DataTypes.STRING,
      // address: DataTypes.STRING,
      // phonenumber: DateTypes.STRING,
      // gender: DataTypes.BOOLEAN,
      // image: DateTypes.STRING,
      // roleId: DateTypes.STRING,
      // positionId: DateTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB('LONG')
      },
      roleId: {
        type: Sequelize.STRING
      },
      positionId: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
