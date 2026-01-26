import React from 'react';
import ProductItem from './productItem.jsx';

const Catalog = () => {

    const products = [
        { id: 1, name: 'Product A', price: 29.99 },
        { id: 2, name: 'Product B', price: 49.99 },
        { id: 3, name: 'Product C', price: 19.99 },
        { id: 4, name: 'Product D', price: 59.99 },
    ];
    return (
        <>
            <h2>Product Catalog</h2>

            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <div className='Products'>
                    {products.map
                        ((product) => (
                        <ProductItem key={product.id} product={product} />  
                )
                )}
            </div>
            )}
        </>
    );
};

export default Catalog;