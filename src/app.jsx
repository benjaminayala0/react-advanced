import React from 'react'
import ProductList from './components/productList.jsx';
import CartList from './components/cartList.jsx';
import { DataProvider } from './components/DataContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Catalog from './components/catalog.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home.jsx';

function MainComponent(){ 

   const [data, setData] = React.useState(null);

   React.useEffect(() => {
         fetch('/products.json')
             .then((response) => response.json())
               .then((data) => setData(data))
               .catch((error) => console.error('Error fetching data:', error));
   }, []);

   return (
      <BrowserRouter>
      <Routes>  
        <Route path="/home" element={<Home/>} />
         <Route path="/catalog" element={<Catalog books={data} />} />
      </Routes>
      </BrowserRouter>
   )
}

export default MainComponent;