'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    
    }
  }
  User.init({
    id_user: DataTypes.INTEGER,
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUnique: async function (value) {
          const user = await User.findOne({
             where: {
               username: value 
              },
              attributes: {
                exclude:['id']
              } 
            });
          if (user) {
            throw new Error('Username must be unique');
          }
        },
      },
    },
    password: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isIn: {
          args: [['Koordinator','KoTA','Dosen']],
          msg: 'Role yang tersedia hanya Koordinator,KoTA dan Dosen',
        }
      
      }
    }
  }, {
    sequelize,
    timestamps:false,
    freezeTableName: true,
    modelName: 'User',
  });
  return User;
};