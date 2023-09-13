/* Replace with your SQL commands */
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title varchar(100),
    "description" varchar (255),
    isCompleted boolean
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)