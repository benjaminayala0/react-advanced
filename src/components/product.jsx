import React from 'react'
import { useParams } from 'react-router-dom'
import Contents from './contents';


function Product() {

    const params = useParams();

    return (
        <>
            <h1> { params.nameParam } </h1>
            <Contents />
        </>
    )
}

export default Product