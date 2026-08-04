import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function QuickViewModal({ product, onClose }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Default');
  const [qty, setQty] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, qty);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: '1rem'
    }}>
      <div style={{
        background: '#ffffff', borderRadius: '16px', maxWidth: '800px', width: '100%',
        maxHeight: '90vh', overflowY: 'auto', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', padding: '2rem'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '16px', right: '16px', background: '#f1f5f9',
            border: 'none', width: '36px', height: '36px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '380px' }}
          />
        </div>

        {/* Product Information */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#2563eb', fontWeight: 700, letterSpacing: '0.05em' }}>
            {product.brand}
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', margin: '0.25rem 0 0.5rem' }}>
            {product.name}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', color: '#f59e0b' }}><Star size={16} fill="#f59e0b" /></div>
            <span><strong>{product.rating}</strong> ({product.reviewsCount} customer reviews)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a' }}>₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <span style={{ fontSize: '1rem', color: '#94a3b8', textDecoration: 'line-through' }}>₹{product.originalPrice.toLocaleString()}</span>
            )}
            {product.discount > 0 && (
              <span style={{ background: '#ef4444', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                {product.discount}% OFF
              </span>
            )}
          </div>

          <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5, marginBottom: '1.25rem' }}>
            {product.description}
          </p>

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>
                SELECT SIZE
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '0.4rem 0.8rem', border: `1px solid ${selectedSize === size ? '#2563eb' : '#cbd5e1'}`,
                      borderRadius: '6px', background: selectedSize === size ? '#eff6ff' : '#fff',
                      color: selectedSize === size ? '#2563eb' : '#0f172a', fontWeight: 600, fontSize: '0.85rem'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', marginTop: 'auto' }}>
            <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden' }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: '0.5rem 0.8rem', background: '#f8fafc' }}>-</button>
              <span style={{ padding: '0.5rem 1rem', fontWeight: 700 }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ padding: '0.5rem 0.8rem', background: '#f8fafc' }}>+</button>
            </div>

            <button
              onClick={handleAddToCart}
              className="btn btn-primary"
              style={{ flex: 1 }}
            >
              <ShoppingBag size={18} /> {addedToast ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
