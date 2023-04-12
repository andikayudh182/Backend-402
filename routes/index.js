var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;
const dosenController = require('../controllers').dosen;
const jurusanController = require('../controllers').jurusan;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Endpoint User Controller */ 
router.get('/api/user', userController.getAllUser)
router.get('/api/user/:id', userController.getUserById)
router.post('/api/user', userController.addUser)
router.put('/api/user/:id',userController.updateUser)
router.delete('/api/user/:id', userController.deleteUser);
router.put('/api/user/change-password/:id',userController.changeUserPassword)

/* Endpoint Dosen Controller */ 
router.get('/api/dosen', dosenController.getAllDosen)
router.post('/api/dosen', dosenController.addDosen)
router.get('/api/dosen/:id', dosenController.getDosenByNIP)
router.put('/api/dosen/:id',dosenController.updateDosen)
router.delete('/api/dosen/:id', dosenController.deleteDosen);

/* Endpoint Jurusan Controller*/
router.get('/api/jurusan', jurusanController.getAllJurusan)
router.get('/api/jurusan/:id', jurusanController.getJurusanById)

// router.get('/api/classroom/:id', classroomController.getById);
// router.post('/api/classroom', classroomController.add);

// router.delete('/api/classroom/:id', classroomController.delete);

module.exports = router;
