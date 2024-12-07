import React from "react";
import { sort } from 'fast-sort';
import Link from "next/link";
type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
type  SortBy = 'title' | 'id' | 'completed' | undefined;

const TodoTable = async ({sortBy}:{sortBy?:SortBy})=>{
    const res = await  fetch('https://jsonplaceholder.typicode.com/todos')
    let todos:Todo[] = await res.json();
    
    if(sortBy === 'title'){
        todos = sort(todos).asc(todo=>todo.title);
    }
    
    if(sortBy === 'id'){
        todos = sort(todos).asc(todo=>todo.id);
    }
    
    if(sortBy === 'completed'){
        todos = sort(todos).desc(todo=>todo.completed);
    }
    
    return (
        <>
<table className="table table-zebra"> 
    <thead>
    <tr>
        <th>
            <Link href="/todos?sortBy=id">Id</Link>
        </th>
        <th>
            <Link href="/todos?sortBy=title">Title</Link>
        </th>
        <th>
            <Link href="/todos?sortBy=completed">Completed</Link>
        </th>

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