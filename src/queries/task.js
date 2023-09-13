const createTask = `
INSERT INTO tasks (
    title,
    description,
    isCompleted
    user_id
) VALUES ($1, $2, $3, $4) RETURNING id, text, title,isCompleted, user_id
`;

const fetchAllTasks = `
SELECT p.id, p.title, p.description,p.isCompleted 
json_build_object(
    'id', u.id,
    'firstName', u.firstname,
    'lastName', u.lastname,
    'username', u.username
) as user
FROM posts p
INNER JOIN users u on p.user_id = u.id
`;

const fetchTasksByUser = `
SELECT id, title, description,isCompleted FROM tasks WHERE user_id=$1
`;

const editTasks = `
UPDATE tasks
SET title=$1, description=$2,isCompleted =$3
WHERE task=$4
RETURNING *
`;

const fetchTaskById = `SELECT user_id FROM tasks WHERE id=$1`;

module.exports = {
  createTask,
  fetchAllTasks,
  fetchTasksByUser,
  editTasks,
  fetchTaskById,
};
