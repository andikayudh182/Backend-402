'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Secret_Key extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Secret_Key.init({
    id_secret: DataTypes.STRING,
    id_laporan: DataTypes.STRING,
    NIP: DataTypes.STRING,
    secret_key: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Secret_Key',
  });
  return Secret_Key;
};