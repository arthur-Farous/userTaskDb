const express = require('express');
const router = express.Router();
const { checkToken } = require('../middlewares/auth.middleware');
const { checkTaskInput, checkTaskInput } = require('../middlewares/validation.middleware');
const {
    createTask,
    fetchAllTasks,
    fetchTasksByUser,
    updateTask,
} = require('../controllers/task.controller');
const { checkIfIdExists } = require('../middlewares/user.middleware');
const { checkValidTask, checkValidTask } = require('../middlewares/task.middleware');

router.post('/', checkToken, checkTaskInput, createTask);
router.get('/', fetchAllTasks);
router.get('/user/:id', checkIfIdExists, fetchTasksByUser);
router.put('/:id', checkToken, checkTaskInput, checkValidTask, updateTask);

module.exports = router;
