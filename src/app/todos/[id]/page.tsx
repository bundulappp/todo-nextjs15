import React from 'react'
type Props = {
    params:{
        id:number;
    }
}
const todoDetails = async ({params}:Props) => {
    const { id } = await params;
    return (<div>this is to do with {id}</div>)
}

export default todoDetails