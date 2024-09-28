import React, { useState } from 'react';

function ToDoItem({ todo, index, toggleComplete, deleteTask, toggleEditMode, editTask }) {
  const [newValue, setNewValue] = useState(todo.text);

  const handleEdit = (e) => {
    e.preventDefault();
    editTask(index, newValue);
  };

  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <form onSubmit={handleEdit}>
          <input 
            type="text" 
            value={newValue} 
            onChange={(e) => setNewValue(e.target.value)} 
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <span onClick={() => toggleComplete(index)}>{todo.text}</span>
          <button onClick={() => toggleEditMode(index)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default ToDoItem;
