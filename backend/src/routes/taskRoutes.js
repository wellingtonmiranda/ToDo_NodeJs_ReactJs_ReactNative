const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController')
const taskValidation = require('../middlewares/taskValidation')

router.post('/', taskValidation, taskController.create)/*coloca antes a validação e se der certo, ai roda o create.*/
router.put('/:id', taskValidation, taskController.update)
router.get('/:id', taskController.show)
router.delete('/:id', taskController.delete)
router.put('/:id/:done', taskController.done)

router.get('/filter/all/:macaddress', taskController.all);
router.get('/filter/late/:macaddress', taskController.late)
router.get('/filter/today/:macaddress', taskController.today)
router.get('/filter/week/:macaddress', taskController.week)
router.get('/filter/month/:macaddress', taskController.month)
router.get('/filter/year/:macaddress', taskController.year)



module.exports = router;