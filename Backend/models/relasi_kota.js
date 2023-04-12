'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relasi_KoTA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Relasi_KoTA.init({
    id_relasi: DataTypes.INTEGER,
    id_KoTA: DataTypes.STRING,
    NIP: DataTypes.STRING,
    role: DataTypes.STRING,
    urutan: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    img_ttd: DataTypes.STRING,
    tgl_ttd: DataTypes.DATE
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'Relasi_KoTA',
  });
  return Relasi_KoTA;
};