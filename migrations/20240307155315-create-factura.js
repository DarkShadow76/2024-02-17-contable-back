'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('facturas', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      ruc: {
        type: Sequelize.STRING
      },
      razon_social: {
        type: Sequelize.STRING
      },
      concepto: {
        type: Sequelize.STRING
      },
      base_imponible: {
        type: Sequelize.DECIMAL
      },
      impuestos: {
        type: Sequelize.DECIMAL
      },
      total: {
        type: Sequelize.DECIMAL
      },
      fecha: {
        type: Sequelize.DATE
      },
      codigo_factura: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('facturas');
  }
};