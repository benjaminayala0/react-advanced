import React, { useContext } from 'react'
import { DataContext } from './DataContext'
 
function productList() {

    const { data, setData } = useContext(DataContext)

    const manageClick = (event) => {
        const id = event.id;
        setData(prevData => prevData.map(item =>
            item.id === id ? { ...item, status: 'selected' } : item
        ));
    }

    return (
        <div className="col-md-9">
            <h2>Products</h2>
            <div className="row">

                {data.map(product => (

                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
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