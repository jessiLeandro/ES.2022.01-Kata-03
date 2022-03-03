'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departamento extends Model {
    static associate(models) {
      models.departamento.belongsToMany(models.projeto, { through: 'departamentoProjeto' });
    }
  }
  departamento.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeDepartamento: DataTypes.TEXT,
    localDepartamento: DataTypes.TEXT,
    respDepartamento: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'departamento',
  });
  return departamento;
};