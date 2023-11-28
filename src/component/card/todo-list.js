import React, { useState } from "react";
import './todo.css'
const TodoList = () => {
    const [input, setInput] = useState('');
    const handleChange = (e) => setInput(e.target.value);
    const [todo, setTodo] = useState([]);
    const [darkMode, setDarkMode] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            setTodo([...todo, input]);
            setInput('');
        }
    };
    const handleDelete = (index) => {
        const updatedTodo = todo.filter((_, i) => i !== index);
        setTodo(updatedTodo);
    };
    return (
        <body className={darkMode ? "dark-mode" : ""}>



            <div className={`container ${darkMode ? "dark-mode" : ""}`}>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <span>
                            <img src="https://static-00.iconduck.com/assets.00/mode-light-icon-512x512-yuubs6qt.png" className="image" alt="Light Mode" />

                        </span>
                    ) : (
                        <span>
                            <img src="https://www.iconpacks.net/icons/3/free-dark-mode-icon-6682-thumb.png" className="image" alt="Dark Mode" />
                        </span>
                    )}
                </button>

                <form onSubmit={handleSubmit}>
                    <h1>ToDo-List</h1>
                    <input type='text' placeholder='Enter your TODO.....' className={`input-box ${darkMode ? "dark-mode" : ""}`} value={input} onChange={handleChange} />
                    <button type="submit" className={`button ${darkMode ? "dark-mode" : ""}`}>Add</button>


                    <div className="task-list">

                        <ul>
                            {todo.map((task, index) => (
                                <li key={index}>{task}
                                    <button className="delete" onClick={() => handleDelete(index)}>Delete</button></li>
                            ))}
                        </ul>
                    </div>
                </form>
            </div>
        </body>
    )
}
export default TodoList 