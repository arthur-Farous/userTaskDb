const checkTaskInput = (req, res, next) => {
    try {
      const { title, description,isCompleted } = req.body;
  
      if (!title) {
        return res.status(400).json({
          status: 'error',
          code: 400,
          message: 'Title cannot be empty!',
          data: null,
        });
      }
  
      if (!description) {
        return res.status(400).json({
          status: 'error',
          code: 400,
          message: 'Description cannot be empty!',
          data: null,
        });
      }
      if (!isCompleted) {
        return res.status(400).json({
          status: 'error',
          code: 400,
          message: 'This Field cannot be empty!',
          data: null,
        });
      }
      return next();
    } catch (error) {
      return next(error);
    }
  };
  
  module.exports = {
      checkTaskInput
  }
  