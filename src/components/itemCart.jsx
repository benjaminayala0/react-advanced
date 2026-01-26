import React from 'react'

function ItemCart({product,onClick}) {
    return (
        <>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{product.nombre}</h5>
                    <p className="card-text">${product.precio}</p>
                    <button className="btn btn-danger" onClick={onClick}>Remover</button>
                </div>
            </div>
        </>
    )
}

export default ItemCart