'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mahasiswa.init({
    NIM: DataTypes.STRING,
    id_KoTA: DataTypes.STRING,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    isKetua: DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps:false,
    freezeTableName: true,
    modelName: 'Mahasiswa',
  });
  return Mahasiswa;
};