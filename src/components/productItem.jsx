import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className='card'>
        <div className='item'>

        <h3>{product.name}</h3>

         <p>
           <strong>Price:</strong> ${product.price}
         </p>

         <button>Buy</button>   
        </div>
    </div>
    );
}   

export default ProductItem;