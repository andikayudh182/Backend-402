'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laporan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Laporan.init({
    id_laporan: DataTypes.STRING,
    id_KoTA: DataTypes.STRING,
    judul_TA: DataTypes.STRING,
    dokumen_laporan: DataTypes.STRING,
    lembar_pengesahan: DataTypes.STRING,
    digital_signature: DataTypes.STRING,
    tgl_disetujui: DataTypes.DATE,
    tgl_disidangkan: DataTypes.DATE,
    version: DataTypes.STRING,
    private_key: DataTypes.STRING,
    public_key: DataTypes.STRING
  }, {
    sequelize,
    timestamps:true,
    freezeTableName:true,
    modelName: 'Laporan',
  });
  return Laporan;
};