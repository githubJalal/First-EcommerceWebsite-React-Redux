import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div >
        <Header />
      </div>

      <Routes className="page-bodey">
        <Route path="/" index element={<Home />} />

        <Route path={'/Products'}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>

        <Route path="/About" element={<About />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <div className='page-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
