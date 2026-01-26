import React, { useContext } from 'react'
import { DataContext } from './DataContext'
 
function productList() {

    const { data, setData } = useContext(DataContext)

    return (
        <div className="col-md-9">
            <h2>Products</h2>
            <div className="row">

                {data.map(product => (

                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.nombre}</h5>
                                <p className="card-text">${product.precio}</p>
                                <button href="#" className="btn btn-primary" 
                                onClick={()=>{ manageClick(product) }}
                                >Buy</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default productList