import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { NavBar, Products, Cart } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    try {
      const productData = await commerce.products.list();
      setProducts(productData.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCart = async () => {
    try {
      const cartData = await commerce.cart.retrieve();
      setCart(cartData);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      const item = await commerce.cart.add(productId, quantity);
      setCart(item);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <NavBar totalItems={cart.total_items} />
        <Routes>
          <Route path="/" element={ <Products products={products} onAddToCart={handleAddToCart} /> } />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
