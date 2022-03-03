'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projeto extends Model {
    static associate(models) {
      models.projeto.belongsTo(models.departamento)
    }
  }
  projeto.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeProjeto: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'projeto',
  });
  return projeto;
};