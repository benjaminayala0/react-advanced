import React from 'react';

const Catalog = () => {

    const products = [
        // { id: 1, name: 'Product A', price: 29.99 },
        // { id: 2, name: 'Product B', price: 49.99 },
        // { id: 3, name: 'Product C', price: 19.99 },
    ];
    return (
        <>
            <h2>Product Catalog</h2>

            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <ul>
                    {products.map
                        ((product) => (
                        <li key={product.id}> {product.name} - {product.price}
                    </li>
                )
                )}
            </ul>
            )}
        </>
    );
};

export default Catalog;