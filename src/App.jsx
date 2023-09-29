import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { NavBar, Products } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    try {
      const productData = await commerce.products.list();
      setProducts(productData.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const fetchCart = async () => {
    try {
      const cartData = await commerce.cart.retrieve();
      setCart(cartData);
    } catch (error) {
      console.error("Erro ao buscar carrinho:", error);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      const item = await commerce.cart.add(productId, quantity);
      setCart(item);
    } catch (error) {
      console.error("Erro ao adicionar item ao carrinho:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <NavBar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
