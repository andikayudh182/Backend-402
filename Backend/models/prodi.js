'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prodi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Prodi.init({
    id_prodi: DataTypes.STRING,
    NIP: DataTypes.STRING,
    nama_prodi: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    freezeTableName: true,
    modelName: 'Prodi',
  });
  return Prodi;
};