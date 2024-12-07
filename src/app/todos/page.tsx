import React from  "react";
import TodoTable from "./TodoTable";

type Props = {
    searchParams:{
        sortBy: 'title'| 'id'| 'completed' | undefined;
    }
}

const Todos =async ({searchParams}:Props)=>{
    const {sortBy} = await searchParams;
    
    
    return (
    <TodoTable
        sortBy={sortBy}/>
        )
}

export default Todos