'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projeto extends Model {
    static associate(models) {
      models.projeto.belongsTo(models.departamento)

      models.projeto.belongsToMany(models.departamento, { through: 'departamentoProjeto' });
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
    hooks: {
      afterSave: async (projeto, options) => {
        await sequelize.models.departamentoProjeto.findOrCreate({
          where: { 
            departamentoId: projeto.departamentoId,
            projetoId: projeto.id
          }
        })
      }
    }
  });
  return projeto;
};