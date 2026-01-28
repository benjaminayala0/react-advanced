import React from 'react'
import ProductList from './components/productList.jsx';
import CartList from './components/cartList.jsx';
import { DataProvider } from './components/DataContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Catalog from './components/catalog.jsx';

function MainComponent(){ 

   const [data, setData] = React.useState(null);

   React.useEffect(() => {
         fetch('/products.json')
             .then((response) => response.json())
               .then((data) => setData(data))
               .catch((error) => console.error('Error fetching data:', error));
   }, []);

   return (
      <div>
       
          <Catalog books={data} />
        
      </div>
   )
}

export default MainComponent;