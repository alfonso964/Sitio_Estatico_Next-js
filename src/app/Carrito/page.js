// app/Carrito/page.js
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';

export default function Carrito() {
  const [cartItems, setCartItems] = useState([]);

  // Cargar el carrito desde localStorage al montar el componente
  useEffect(() => {
    const loadCart = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        
        // Agrupar productos por ID y contar cantidades
        const itemsMap = {};
        cart.forEach(item => {
          if (itemsMap[item.id]) {
            itemsMap[item.id].quantity += 1;
          } else {
            itemsMap[item.id] = { ...item, quantity: 1 };
          }
        });
        
        setCartItems(Object.values(itemsMap));
      } catch (error) {
        console.error('Error loading cart:', error);
        setCartItems([]);
      }
    };

    loadCart();
    
    // Escuchar cambios en el localStorage
    window.addEventListener('storage', loadCart);
    return () => window.removeEventListener('storage', loadCart);
  }, []);

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(productId);
      return;
    }
    
    // Obtener el carrito actual de localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    // Filtrar todos los productos con el ID a modificar
    const otherItems = cart.filter(item => item.id !== productId);
    // Añadir la nueva cantidad de ese producto
    const product = cart.find(item => item.id === productId);
    if (product) {
      for (let i = 0; i < newQuantity; i++) {
        otherItems.push(product);
      }
    }
    // Actualizar localStorage
    localStorage.setItem('cart', JSON.stringify(otherItems));
    // Recargar el carrito
    loadCartFromLocalStorage();
  };

  // Función para eliminar un producto del carrito
  const removeItem = (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    loadCartFromLocalStorage();
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    localStorage.setItem('cart', '[]');
    setCartItems([]);
  };

  // Función auxiliar para recargar el carrito desde localStorage
  const loadCartFromLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemsMap = {};
    cart.forEach(item => {
      if (itemsMap[item.id]) {
        itemsMap[item.id].quantity += 1;
      } else {
        itemsMap[item.id] = { ...item, quantity: 1 };
      }
    });
    setCartItems(Object.values(itemsMap));
  };

  // Cálculos del resumen
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 4.99;
  const tax = subtotal * 0.21;
  const total = subtotal + shipping + tax;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="space-y-8 py-8">
      {/* Hero Section */}
      <Hero 
        title="Tu Carrito"
        subtitle="Revisa tus productos y completa tu compra"
        bgGradient="from-orange-500 to-red-600"
      />

      <div className="container mx-auto px-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-3xl font-bold mb-4">Tu carrito está vacío</h2>
            <p className="text-base-content/70 mb-6">
              Parece que aún no has añadido ningún producto a tu carrito.
              ¡Descubre nuestra amplia selección de productos de fútbol!
            </p>
            <Link href="/Productos" className="btn btn-primary btn-lg">
              🏃 Empezar a comprar
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de productos */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Tu carrito ({itemCount} productos)</h2>
                <button 
                  onClick={clearCart}
                  className="btn btn-error btn-sm"
                >
                  🗑️ Vaciar carrito
                </button>
              </div>

              <div className="space-y-4">
                {cartItems.map(item => (
                  <CartItem 
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </div>

            {/* Resumen del pedido */}
            <div className="lg:col-span-1">
              <CartSummary 
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
                itemCount={itemCount}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
