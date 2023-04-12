'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KoTA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KoTA.init({
    id_KoTA: DataTypes.STRING,
    id_prodi: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    tahun_ajaran: DataTypes.STRING,
    nama_KoTA: DataTypes.STRING,
    jumlah_pembimbing: DataTypes.INTEGER,
    jumlah_penguji: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:false,
    freezeTableName: true,
    modelName: 'KoTA',
  });
  return KoTA;
};