'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
 
    }
  }
  Dosen.init({
    NIP: {
      type: DataTypes.STRING,
      primaryKey:true,
      allowNull:false,
      validate: {
        async isDuplicatePK(value) {
          const dosen = await Dosen.findOne({
            where: {
              NIP: value
            },
            attributes:{
              exclude:['id']
            }
          });
        if (dosen) {
          throw new Error('NIP must be unique');
        }
        }
      }
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isUnique: async function (value) {
          const dosen = await Dosen.findOne({
             where: {
               id_user: value 
              },
              attributes: {
                exclude:['id']
              } 
            });
          if (dosen) {
            throw new Error('id_user must be unique');
          }
        },
      },
    },
    nama: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUnique: async function (value) {
          const dosen = await Dosen.findOne({
             where: {
               email: value 
              },
              attributes: {
                exclude:['id']
              } 
            });
          if (dosen) {
            throw new Error('Email must be unique');
          }
        },
      },
    },
  }, {
    sequelize,
    timestamps:false,
    freezeTableName: true,
    modelName: 'Dosen',
  });
  return Dosen;
};