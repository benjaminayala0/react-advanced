import React, { useContext } from 'react'
import ItemCart from './ItemCart.jsx';
import { DataContext } from './DataContext';
 
function cartList() {

  const { data, setData } = useContext(DataContext);

  const removeItem = (event) => {
    const id = event.id;
    setData(prevData => prevData.map(item =>
      item.id === id ? { ...item, name: 'selected' } : item
    ));
  }

  return (
    <div className="col-md-3 border-start border-4 border-secondary">
      <div className="sticky-top " >
        <h2>Shopping Cart</h2>
        {data.map(product => (
          <ItemCart key={product.id} product={product} 
            onClick={ ()=>{removeItem(product)}}
          />
        ))}
      </div>
    </div>

  )
}

export default cartList