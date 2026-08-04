import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { Star, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Check, Share2, ThumbsUp } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = PRODUCTS.find(p => p.id === Number(id)) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || 'Default');
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [addedToast, setAddedToast] = useState(false);

  const isWishlisted = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, qty);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, qty);
    navigate('/checkout');
  };

  return (
    <div className="product-details-page section-padding">
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '2rem' }}>
          <Link to="/" style={{ color: '#64748b' }}>Home</Link> / <Link to="/products" style={{ color: '#64748b' }}>Products</Link> / <span style={{ color: '#0f172a', fontWeight: 600 }}>{product.name}</span>
        </div>

        {/* Product Details Header Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
          {/* Images Section */}
          <div>
            <div style={{
              background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px',
              overflow: 'hidden', marginBottom: '1rem', position: 'relative'
            }}>
              <img
                src={selectedImage || product.image}
                alt={product.name}
                style={{ width: '100%', height: '480px', objectFit: 'cover' }}
              />
              {product.discount > 0 && (
                <span className="discount-badge" style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem' }}>
                  -{product.discount}% OFF
                </span>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {(product.images || [product.image]).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumbnail ${i}`}
                  onClick={() => setSelectedImage(img)}
                  style={{
                    width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover',
                    border: `2px solid ${selectedImage === img ? '#2563eb' : '#e2e8f0'}`,
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Product Overview & Actions */}
          <div>
            <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#2563eb', fontWeight: 700, letterSpacing: '0.05em' }}>
              {product.brand}
            </span>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0.75rem' }}>
              {product.name}
            </h1>

            {/* Ratings & Status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#fef3c7', padding: '2px 8px', borderRadius: '4px', color: '#d97706', fontWeight: 700, fontSize: '0.85rem' }}>
                <Star size={14} fill="#d97706" /> {product.rating}
              </div>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{product.reviewsCount} Customer Reviews</span>
              <span style={{ marginLeft: 'auto', color: '#10b981', background: '#ecfdf5', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Check size={14} /> In Stock & Ready to Ship
              </span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span style={{ fontSize: '1.2rem', color: '#94a3b8', textDecoration: 'line-through' }}>₹{product.originalPrice.toLocaleString()}</span>
              )}
              <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.9rem' }}>
                Save ₹{(product.originalPrice - product.price).toLocaleString()}
              </span>
            </div>

            {/* Description Short */}
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {product.description}
            </p>

            {/* Size Options */}
            {product.sizes && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  <span>SELECT SIZE</span>
                  <span style={{ color: '#2563eb', cursor: 'pointer' }}>Size Guide</span>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem',
                        border: `2px solid ${selectedSize === size ? '#2563eb' : '#e2e8f0'}`,
                        background: selectedSize === size ? '#eff6ff' : '#ffffff',
                        color: selectedSize === size ? '#2563eb' : '#0f172a', cursor: 'pointer'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Options */}
            {product.colors && (
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.5rem' }}>
                  SELECT COLOR: <span style={{ color: '#2563eb' }}>{selectedColor}</span>
                </label>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        padding: '0.4rem 0.9rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600,
                        border: `1px solid ${selectedColor === color ? '#2563eb' : '#cbd5e1'}`,
                        background: selectedColor === color ? '#0f172a' : '#f8fafc',
                        color: selectedColor === color ? '#ffffff' : '#0f172a', cursor: 'pointer'
                      }}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden' }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: '0.75rem 1rem', background: '#f8fafc', fontWeight: 700 }}>-</button>
                <span style={{ padding: '0.75rem 1.25rem', fontWeight: 700, background: '#fff' }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ padding: '0.75rem 1rem', background: '#f8fafc', fontWeight: 700 }}>+</button>
              </div>

              <button
                className="btn btn-outline"
                style={{ padding: '0.75rem 1.5rem', flex: 1 }}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} /> {addedToast ? 'Added to Cart!' : 'Add to Cart'}
              </button>

              <button
                className="btn btn-primary"
                style={{ padding: '0.75rem 2rem', flex: 1 }}
                onClick={handleBuyNow}
              >
                Buy Now
              </button>

              <button
                className="btn btn-outline"
                style={{ padding: '0.75rem', borderColor: isWishlisted ? '#ef4444' : '#cbd5e1' }}
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart size={20} fill={isWishlisted ? '#ef4444' : 'none'} color={isWishlisted ? '#ef4444' : '#0f172a'} />
              </button>
            </div>

            {/* Trust Features */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9', fontSize: '0.8rem', color: '#64748b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Truck size={18} style={{ color: '#2563eb' }} /> Express Shipping
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <RotateCcw size={18} style={{ color: '#2563eb' }} /> 7 Days Free Returns
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={18} style={{ color: '#2563eb' }} /> Genuine Warranty
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Description, Specs, Reviews */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setActiveTab('description')}
              style={{
                paddingBottom: '0.75rem', fontWeight: 700, fontSize: '1rem',
                borderBottom: `3px solid ${activeTab === 'description' ? '#2563eb' : 'transparent'}`,
                color: activeTab === 'description' ? '#2563eb' : '#64748b'
              }}
            >
              Description & Details
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              style={{
                paddingBottom: '0.75rem', fontWeight: 700, fontSize: '1rem',
                borderBottom: `3px solid ${activeTab === 'reviews' ? '#2563eb' : 'transparent'}`,
                color: activeTab === 'reviews' ? '#2563eb' : '#64748b'
              }}
            >
              Customer Reviews ({product.reviewsCount})
            </button>
          </div>

          {activeTab === 'description' ? (
            <div style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                {product.description} Crafted meticulously using durable lightweight materials to provide optimal breathability, modern silhouette, and campus-ready aesthetics.
              </p>
              <h4 style={{ color: '#0f172a', fontWeight: 700, margin: '1.5rem 0 0.5rem' }}>Product Specifications</h4>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>Brand: {product.brand}</li>
                <li>Category: {product.category}</li>
                <li>Gender Fit: {product.gender}</li>
                <li>Material: 100% Combed Cotton / Premium Synthetic Mesh</li>
                <li>Country of Origin: India</li>
                <li>Care Instructions: Machine wash cold with like colors, tumble dry low</li>
              </ul>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '12px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>{product.rating}</div>
                  <div style={{ display: 'flex', color: '#f59e0b', justifyContent: 'center' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" />)}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>Out of 5 stars</div>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Rating Breakdown</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>92% of customers recommend this item for comfort and fit.</div>
                </div>
              </div>

              {/* Sample Review */}
              <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: 700, color: '#0f172a' }}>Alex Johnson</span>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Verified Purchase • 2 days ago</span>
                </div>
                <div style={{ display: 'flex', color: '#f59e0b', marginBottom: '0.4rem' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f59e0b" />)}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#475569' }}>
                  Extremely happy with the quality! Looks exactly like the picture and fitting is spot on.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>
              Related Products You May Like
            </h2>
            <div className="grid-cols-4">
              {relatedProducts.map(relProduct => (
                <ProductCard
                  key={relProduct.id}
                  product={relProduct}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}
