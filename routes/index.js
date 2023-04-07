var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/user', userController.getAllUser)
router.get('/api/user/:id', userController.getUserById)
router.post('/api/user', userController.addUser)
// router.get('/api/classroom/:id', classroomController.getById);
// router.post('/api/classroom', classroomController.add);
// router.put('/api/classroom/:id', classroomController.update);
// router.delete('/api/classroom/:id', classroomController.delete);

module.exports = router;
