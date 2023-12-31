const {
    makeTask,
    getAllTasks,
    getTaskByUser,
    editTask
  } = require('../services/task.service');
  
  /**
   * Creates a Task
   * @param {Request} req
   * @param {Response} res
   * @param {object} next
   * @returns {JSON | Error}
   */
  const createTask = async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await makeTask(req.body, id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  
  /**
   * Fetches all Tasks
   * @param {Request} req
   * @param {Response} res
   * @param {object} next
   * @returns {JSON | Error}
   */
  const fetchAllTasks = async (req, res, next) => {
    try {
      const result = await getAllTasks();
      return res.status(result.code).json(result);
    } catch (error) {
      return next(error);
    }
  };
  
  /**
   * Gets all tasks made by a user
   * @param {Request} req
   * @param {Response} res
   * @param {object} next
   * @returns {JSON | Error}
   */
  const fetchTasksByUser = async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await getTaskByUser(id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  
  /**
   * Updates a task
   * @param {Request} req
   * @param {Response} res
   * @param {object} next
   * @returns {JSON | Error}
   */
  const updateTask = async (req, res, next) => {
    try {
      const { title, description,isCompleted } = req.body;
      const { id } = req.user;
      const response = await editPost(title, description, isCompleted);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  
  module.exports = {
    createTask,
    fetchAllTasks,
    fetchTasksByUser,
    updateTask,
  };
  