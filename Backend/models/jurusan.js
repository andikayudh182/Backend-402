'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jurusan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jurusan.init({
    id_jurusan: DataTypes.STRING,
    NIP: DataTypes.STRING,
    nama_jurusan: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    freezeTableName: true,
    modelName: 'Jurusan',
  });
  return Jurusan;
};