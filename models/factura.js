'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  factura.init({
    ruc: DataTypes.STRING,
    razon_social: DataTypes.STRING,
    concepto: DataTypes.STRING,
    base_imponible: DataTypes.DECIMAL,
    impuestos: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    fecha: DataTypes.DATE,
    codigo_factura: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'factura',
  });
  return factura;
};