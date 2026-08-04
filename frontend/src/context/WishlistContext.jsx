import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem('stylesphere_wishlist');
    return saved ? JSON.parse(saved) : [1, 7, 14]; // Product IDs initially in wishlist
  });

  useEffect(() => {
    localStorage.setItem('stylesphere_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const toggleWishlist = (productId) => {
    setWishlistItems(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlistItems.includes(productId);

  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, isInWishlist, count: wishlistItems.length }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
