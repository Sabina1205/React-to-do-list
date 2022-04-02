import React from 'react';

// component 
const Form = ({setInputText, todos, setTodos, inputText, setStatus }) => {
    // event for what is happening in the input
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()* 1000}
        ]);
    setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
    <form>
        <input value={inputText} onChange={ inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} type="submit" className="todo-button">
        <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pId="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pId="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pId="10299"></path></svg></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>

    </form>
    );    
}

export default Form;