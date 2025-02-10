import React, { useState } from 'react';


function ToDoList() {
    const [todos, setTodos] = useState(['Task 1', 'Task 2', 'Task 3']);
    const [task, setTask] = useState('');

    function handleInputChange(event) {
        setTask(event.target.value);
    }
    function addTodo() {
        setTodos(t => [...t, task]);
        setTask("");
    }

    function deleteTodo(index) {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }

    return (
        <div className='container'>
            <h1>ToDo List App</h1>
            <input type='text' className='inputtext' value={task} onChange={handleInputChange} placeholder='Enter task Description'></input>
            <br />
            <button className='btnadd' onClick={addTodo}>Add Task!</button>

            <ul className='ulstyle'>
                {todos.map((todo, index) =>
                    <li  key={index} className='liststyle'>
                        <span>{todo}</span>
                        <button className='btndelete' onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    );
}
export default ToDoList