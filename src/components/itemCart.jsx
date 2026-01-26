import React from 'react'

function ItemCart({product,onClick}) {
    return (
        <>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <button className="btn btn-danger" onClick={onClick}>Remove</button>
                </div>
            </div>
        </>
    )
}

export default ItemCart