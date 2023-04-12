const User = require('../models').User;
const { Op } = require("sequelize");

module.exports = {
  getAllUser(req, res) {
    return User
      .findAll({
        attributes: { 
            exclude: ['createdAt', 'updatedAt','id']
           },
        order:[
          ['id_user','ASC']
        ]
      })
      .then((user) => {
        if(Object.keys(user).length == 0){
          return res.status(400).send({
            message:'data user tidak ada'
          })
        }
        return res.status(200).send({
          message:`Get all user success`,
          data:user
        })
      })
      .catch((error) => { res.status(400).send({
        message:error,
      }); });
  },

  async getUserById(req, res) {
    try{
      const user = await User.findAll({
        attributes:{
          exclude: ['createdAt', 'updatedAt','id']
        },
        where:{
          id_user:req.params.id
        }
      })
      if (user.length === 0){
        return res.status(404).send({
          message:'data tidak ditemukan',
        })
        
      }
      return res.status(200).send({
        message:'success',
        data: user
      })
    }
      catch(error){
        return res.status(400).send({
          message:error.message
        })
    }
  },

  async addUser(req,res) {
    const data = req.body
    const options = {
      fields: ['username', 'password','role'],
      returning:false
    }
    try {
      await User.create(data,options)
      const selectUser = await User.findOne({
        where: {
          username: req.body.username
         },
         attributes: {
           exclude:['id']
         } 
      })
      return res.status(200).send({
        message:"add new user success",
        data: selectUser
  
      })
    } catch (error) {
      return res.status(400).send({
        message:error.message
      })
    }
  },
 
  async updateUser(req, res) {
    try {
      const user = await User.findOne({
        where:{
          id_user: req.params.id
        },
        attributes:{
          exclude:['id']
        }
      })
      if (user.length == 0) {
        return res.status(404).send({
          message:'data tidak ditemukan'
        })
      }

      const findUniqueUsername = await User.findAll({
        where: {
          id_user: {
             [Op.not]: req.params.id
            },
          username: req.body.username,
        },
        attributes:{
          exclude:['id']
        }
      });
      console.log(findUniqueUsername.length);
      //case ketika ubah role saja 
      if ((user.username == req.body.username) && (user.id_user==req.params.id)) {
        const updateUser = await User.update({
        role:req.body.role
      },{
        where: {
          id_user: req.params.id
        }
      })
        return res.status(200).send({
          message:'update data berhasil',
          data:updateUser
        })
      }

      //case ketika ubah username dan role
      else if ((user.username != req.body.username) && (user.id_user==req.params.id) && (findUniqueUsername.length < 1)) {
        const updateUser = await User.update({
        username:req.body.username,
        role:req.body.role
      },{
        where: {
          id_user: req.params.id
        }
      })
        return res.status(200).send({
          message:'update data berhasil',
          data:updateUser
        })
      }
      else {
        return res.status(400).send({
          message:'username sudah digunakan'
        })
      }
      
    } catch (error) {
      return res.status(400).send({
        message:error.message
      })
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id_user: req.params.id
        },
        attributes: {
          exclude:['id']
        }
      })

      if (!user){
        return res.status(404).send({
          message:'data tidak ditemukan'
        })
      }
      await User.destroy({
        where: {
          id_user: req.params.id
        },
        attributes:{
          exclude: ['id']
        }
      })

     
    } catch (error) {
      return res.status(400).send({
        message: error.message
      })
    }
     return res.status(200).send({
        message: `data berhasil dihapus denga id user ${req.params.id}`
      })
  },

  async changeUserPassword(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id_user: req.params.id
        },
        attributes: {
          exclude: ['id']
        }
      })

      if (!user) {
        return res.status(404).send({
          message: 'data tidak ditemukan'
        })
      }

      if (user.password != req.body.currentPassword) {
        return res.status(400).send({
          message: 'current password salah'
        })
      }
      await User.update({
       password: req.body.newPassword
      },{
        where: {
          id_user: req.params.id
        }
      })
      return res.status(200).send({
        message:'password berhasil diubah'
      })
    } catch (error) {
      return res.status(400).send({
        message:error.message
      })
    }
  }


};