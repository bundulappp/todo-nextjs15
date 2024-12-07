import React from 'react'
type Props = {
    params:{
        id:number;
    }
}
const todoDetails = async ({params}:Props) => {
    const { id } = await params;
    return (<div>this is todo {id}</div>)
}

export default todoDetails