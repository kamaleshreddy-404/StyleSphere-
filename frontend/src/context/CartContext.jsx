import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('stylesphere_cart');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        name: "Nike Air Max Pulse Sneakers",
        price: 8999,
        originalPrice: 10499,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        size: "US 9",
        color: "Red/Black",
        quantity: 1
      },
      {
        id: 4,
        name: "Levi's 501 Original Fit Denim Jeans",
        price: 4599,
        originalPrice: 5999,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
        size: "32/32",
        color: "Dark Indigo",
        quantity: 1
      }
    ];
  });

  const [coupon, setCoupon] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  useEffect(() => {
    localStorage.setItem('stylesphere_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, selectedSize = null, selectedColor = null, quantity = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.size === (selectedSize || product.sizes?.[0]));
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          size: selectedSize || product.sizes?.[0] || 'Standard',
          color: selectedColor || product.colors?.[0] || 'Default',
          quantity
        }
      ];
    });
  };

  const updateQuantity = (id, size, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.size === size) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id, size) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const clearCart = () => {
    setCartItems([]);
    setCoupon(null);
    setDiscountAmount(0);
  };

  const applyCoupon = (code) => {
    if (code.toUpperCase() === 'STUDENT10' || code.toUpperCase() === 'STYLES500') {
      const codeUpper = code.toUpperCase();
      setCoupon(codeUpper);
      return { success: true, message: `Coupon ${codeUpper} applied successfully!` };
    }
    return { success: false, message: 'Invalid coupon code. Try "STUDENT10" or "STYLES500"' };
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const calculatedDiscount = coupon === 'STUDENT10' ? subtotal * 0.10 : coupon === 'STYLES500' ? 500 : 0;
  const shippingFee = subtotal > 1999 || cartItems.length === 0 ? 0 : 99;
  const total = Math.max(0, subtotal - calculatedDiscount + shippingFee);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      subtotal,
      coupon,
      applyCoupon,
      discountAmount: calculatedDiscount,
      shippingFee,
      total,
      itemCount: cartItems.reduce((acc, item) => acc + item.quantity, 0)
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
