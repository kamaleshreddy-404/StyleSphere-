import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const isWishlisted = isInWishlist(product.id);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="product-card-img-wrapper">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-card-img"
          />
        </Link>

        {/* Discount Badge */}
        {product.discount > 0 && (
          <span className="discount-badge">-{product.discount}% OFF</span>
        )}

        {/* Wishlist Button */}
        <button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={() => toggleWishlist(product.id)}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={18} fill={isWishlisted ? '#ef4444' : 'none'} />
        </button>

        {/* Quick View Button on Hover */}
        {isHovered && (
          <button
            onClick={() => onQuickView(product)}
            style={{
              position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
              background: '#ffffff', color: '#0f172a', border: 'none', padding: '0.4rem 1rem',
              borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer'
            }}
          >
            <Eye size={14} /> Quick View
          </button>
        )}
      </div>

      {/* Card Content */}
      <div className="product-card-body">
        <div className="product-brand">{product.brand}</div>
        <Link to={`/product/${product.id}`} className="product-title">
          {product.name}
        </Link>

        {/* Rating */}
        <div className="product-rating">
          <Star size={14} className="star-icon" />
          <span><strong>{product.rating}</strong> ({product.reviewsCount})</span>
          {product.gender && <span style={{ marginLeft: 'auto', fontSize: '0.75rem', background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px', textTransform: 'uppercase' }}>{product.gender}</span>}
        </div>

        {/* Price Row */}
        <div className="product-price-row">
          <span className="current-price">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="product-card-actions">
          <button
            className="btn btn-outline btn-sm"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag size={14} /> Add to Cart
          </button>
          <Link
            to={`/product/${product.id}`}
            className="btn btn-secondary btn-sm"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
