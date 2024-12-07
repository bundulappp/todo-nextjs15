import React from "react";

type Props = {
    params:{
        id:number
        photoId:number;
    }
}

const photoDetail = async ({params}:Props)=>{
    const {id, photoId} = await params;
    return (<div>This is a photo with todoId {id} and with photoId {photoId}</div>)
}

export default photoDetail;