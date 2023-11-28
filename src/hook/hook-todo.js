
import React, { useState, useReducer } from 'react';
function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'add':
            return [...tasks, { id: Date.now(), text: action.text }];
        case 'edit':
            return tasks.map(task =>
                task.id === action.id ? { ...task, text: action.text } : task
            );
        case 'delete':
            return tasks.filter(task => task.id !== action.id);
        default:
            return tasks;
    }
}

function TodoList() {
    const [tasks, dispatch] = useReducer(tasksReducer, []);
    const [newTaskText, setNewTaskText] = useState('');
    const [editTaskId, setEditTaskId] = useState(null);

    const handleAddTask = () => {
        if (newTaskText.trim() !== '') {
            dispatch({ type: 'add', text: newTaskText });
            setNewTaskText('');
        }
    };

    const handleEditTask = (id, newText) => {
        dispatch({ type: 'edit', id, text: newText });
        setEditTaskId("");
    };

    const handleDeleteTask = id => {
        dispatch({ type: 'delete', id });
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTaskText}
                onChange={e => setNewTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {editTaskId === task.id ? (
                            <>
                                <input
                                    type="text"
                                    value={task.text}
                                    onChange={e =>
                                        handleEditTask(task.id, e.target.value)
                                    }
                                />
                                <button onClick={() => handleEditTask(task.id, task.text)}>
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                {task.text}
                                <button onClick={() => setEditTaskId(task.id)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
