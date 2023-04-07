'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Koordinator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Koordinator.init({
    id_koor: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    id_prodi: DataTypes.STRING,
    nama_koordinator: DataTypes.STRING,
    tahun_ajaran: DataTypes.STRING
  }, {
    sequelize,
     timestamps:false,
    freezeTableName: true,
    modelName: 'Koordinator',
  });
  return Koordinator;
};