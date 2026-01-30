import React from 'react'
import ProductList from './components/productList.jsx';
import CartList from './components/cartList.jsx';
import { DataProvider } from './components/DataContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Catalog from './components/catalog.jsx';
import {BrowserRouter, Routes, Route,NavLink} from 'react-router-dom';
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

      <nav className='navbar navbar-expand navbar-light bg-light'>
         <ul className='navbar-nav '>
            <li className='nav-item'>
         <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
         >
            Home</NavLink> 
            </li>

            <li className='nav-item'>
         <NavLink to="/catalog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Catalog</NavLink>
            </li>
         </ul>
         
      </nav>

      <div className='container'>
      <Routes>  
        <Route path="/home" element={<Home/>} />
         <Route path="/catalog" element={<Catalog books={data} />} />
      </Routes>
      </div>
      </BrowserRouter>
   )
}

export default MainComponent;