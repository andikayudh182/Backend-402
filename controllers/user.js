const User = require('../models').User;

module.exports = {
  getAllUser(req, res) {
    return User
      .findAll({
        attributes: { 
            exclude: ['createdAt', 'updatedAt','id']
           }
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

  async getUserById(req,res){
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

  async addUser(req,res){
    const data = {
      username:req.body.username,
      password:req.body.password,
      role:req.body.role
    };
    const options = {
      fields: ['username', 'password','role'],
    }
    try{
      const user = await User.create(data,options)
      return res.status(200).send({
        message:"add new user success",
        data: user
      })
    }catch(error){
      return res.status(400).send({
        message:error.message
      })
    }
  }


  
};