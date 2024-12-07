import React from  "react";
import TodoTable from "./TodoTable";

type Props = {
    searchParams:{
        sortBy?:string
    }
}

const Todos =async ({searchParams}:Props)=>{
    const {sortBy} = await searchParams;
    
    
    return (
    <TodoTable></TodoTable>
        )
}

export default Todos