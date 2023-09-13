const {
    createTask,
  fetchAllTasks,
  fetchTasksByUser,
  editTasks,
  
  } = require('../queries/task');
  const { runQuery } = require('../config/database.config');
  
  /**
   * Creates a new task in the db
   * @param {object} body
   * @param {number} id
   * @param {boolean} description
   * @returns {Response}
   */
  const makeTask = async (body, id) => {
    const { title, description,isCompleted } = body;
    const task = await runQuery(createTask, [title, description,isCompleted, id]);
    return {
      status: 'success',
      message: 'Post created successfully!',
      code: 201,
      data: {
        task,
      },
    };
  };
  
  /**
   * Fetches all tasks from the db
   * @returns {Response}
   */
  const getAllTasks = async () => {
    const result = await runQuery(fetchAllTasks);
    return {
      status: 'success',
      message: 'Tasks fetched successfully!',
      code: 200,
      data: {
        result,
      },
    };
  };
  
  /**
   * Gets all tasks by a single user
   * @param {number} id
   * @returns {Response}
   */
  const getTaskByUser = async (id) => {
    const result = await runQuery(fetchTasksByUser, [id]);
    return {
      status: 'success',
      message: 'Posts fetched successfully!',
      code: 200,
      data: {
        result,
      },
    };
  };
  
  /**
   * Edits a post
   * @param {string} title 
   * @param {string} description 
   * @param {boolean} isCompleted
   * @param {number} id 
   * @returns {Response}
   */
  const editTask = async (title, description,isCompleted, id) => {
      const result = await runQuery(editTasks, [title, description,isCompleted, id]);
      return {
        status: 'success',
        message: 'Posts edited successfully!',
        code: 200,
        data: {
          result,
        },
      };
  }
  
  module.exports = {
    makeTask,
    getAllTasks,
    getTaskByUser,
    editTask
  };
  