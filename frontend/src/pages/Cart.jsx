import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight, Tag, ShieldCheck } from 'lucide-react';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, subtotal, coupon, applyCoupon, discountAmount, shippingFee, total } = useCart();
  const [couponInput, setCouponInput] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);
  const navigate = useNavigate();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    setCouponMsg(res);
  };

  return (
    <div className="cart-page section-padding">
      <div className="container">
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>
          Shopping Cart ({cartItems.length} items)
        </h1>

        {cartItems.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '2.5rem' }}>
            {/* Cart Items List */}
            <div>
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    style={{
                      display: 'grid', gridTemplateColumns: '90px 1fr 140px 100px 40px', alignItems: 'center', gap: '1.25rem',
                      padding: '1.25rem', borderBottom: index < cartItems.length - 1 ? '1px solid #f1f5f9' : 'none'
                    }}
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }}
                    />

                    {/* Details */}
                    <div>
                      <Link to={`/product/${item.id}`} style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>
                        {item.name}
                      </Link>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>
                        Size: <strong style={{ color: '#0f172a' }}>{item.size}</strong> | Color: <strong style={{ color: '#0f172a' }}>{item.color}</strong>
                      </div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#2563eb', marginTop: '4px' }}>
                        ₹{item.price.toLocaleString()}
                      </div>
                    </div>

                    {/* Quantity Modifier */}
                    <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '6px', overflow: 'hidden', width: '110px' }}>
                      <button onClick={() => updateQuantity(item.id, item.size, -1)} style={{ padding: '0.35rem 0.6rem', background: '#f8fafc', fontWeight: 700 }}>-</button>
                      <span style={{ padding: '0.35rem 0.75rem', fontWeight: 700, flex: 1, textAlign: 'center', background: '#fff' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.size, 1)} style={{ padding: '0.35rem 0.6rem', background: '#f8fafc', fontWeight: 700 }}>+</button>
                    </div>

                    {/* Total */}
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', textAlign: 'right' }}>
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      style={{ color: '#94a3b8', border: 'none', cursor: 'pointer' }}
                      title="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                <Link to="/products" className="btn btn-outline">
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary & Coupon Sidebar */}
            <div>
              {/* Coupon Form */}
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.6rem' }}>
                  <Tag size={16} style={{ color: '#2563eb' }} /> Have a Coupon Code?
                </label>
                <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Enter code (e.g. STUDENT10)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    style={{
                      flex: 1, padding: '0.55rem 0.8rem', border: '1px solid #cbd5e1', borderRadius: '6px',
                      fontSize: '0.85rem', textTransform: 'uppercase'
                    }}
                  />
                  <button type="submit" className="btn btn-secondary btn-sm">Apply</button>
                </form>
                {couponMsg && (
                  <div style={{
                    fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 600,
                    color: couponMsg.success ? '#10b981' : '#ef4444'
                  }}>
                    {couponMsg.message}
                  </div>
                )}
                {coupon && (
                  <div style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 700, marginTop: '0.5rem' }}>
                    Active Coupon: {coupon}
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                  Order Summary
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#475569', marginBottom: '1.25rem' }}>
                  <div className="flex-between">
                    <span>Bag Subtotal</span>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>₹{subtotal.toLocaleString()}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex-between" style={{ color: '#10b981' }}>
                      <span>Coupon Discount</span>
                      <span style={{ fontWeight: 700 }}>-₹{discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex-between">
                    <span>Estimated Shipping</span>
                    <span style={{ fontWeight: 600, color: shippingFee === 0 ? '#10b981' : '#0f172a' }}>
                      {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                    </span>
                  </div>
                </div>

                <div className="flex-between" style={{
                  borderTop: '2px solid #f1f5f9', paddingTop: '1rem', marginBottom: '1.5rem',
                  fontSize: '1.2rem', fontWeight: 800, color: '#0f172a'
                }}>
                  <span>Total Amount</span>
                  <span style={{ color: '#2563eb' }}>₹{total.toLocaleString()}</span>
                </div>

                <button
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem' }}
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#ffffff', border: '1px dashed #cbd5e1', borderRadius: '12px' }}>
            <ShoppingBag size={56} style={{ color: '#94a3b8', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Your shopping cart is empty</h3>
            <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Explore our catalog and add your favorite items to the cart.</p>
            <Link to="/products" className="btn btn-primary">Start Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
}
