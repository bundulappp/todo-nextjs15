import React from "react";

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const TodoTable = async ()=>{
    const res = await  fetch('https://jsonplaceholder.typicode.com/todos')
    const todos:Todo[] = await res.json();
    
    return (
        <>
<table className="table table-zebra"> 
    <thead>
    <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Completed</th>
    </tr>
    </thead>
    <tbody>
    {todos.map(todo=> <tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>
            <input type="checkbox" checked={todo.completed} className="checkbox" readOnly={true}/>
        </td>
    </tr>)}
    </tbody>
</table>
        </>)
}

export default TodoTable