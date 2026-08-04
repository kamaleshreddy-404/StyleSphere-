import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { CheckCircle2, CreditCard, Smartphone, Banknote, ShieldCheck, MapPin, Truck } from 'lucide-react';

export default function Checkout() {
  const { cartItems, total, subtotal, discountAmount, shippingFee, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullName: user?.name || 'Alex Johnson',
    phone: user?.phone || '+91 98765 43211',
    street: '123 College Green Road, Tech Park',
    city: 'Bangalore',
    state: 'Karnataka',
    postalCode: '560001'
  });

  const [paymentMethod, setPaymentMethod] = useState('UPI'); // UPI, CREDIT_CARD, DEBIT_CARD, COD
  const [upiId, setUpiId] = useState('alex@okaxis');
  const [cardDetails, setCardDetails] = useState({ number: '4111 2222 3333 4444', expiry: '12/28', cvv: '123' });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [createdOrderNumber, setCreatedOrderNumber] = useState('');

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderNum = `ORD-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setCreatedOrderNumber(orderNum);
    setIsSuccessModalOpen(true);
  };

  const handleFinishOrder = () => {
    clearCart();
    setIsSuccessModalOpen(false);
    navigate('/user');
  };

  if (cartItems.length === 0 && !isSuccessModalOpen) {
    return (
      <div className="container section-padding" style={{ textAlign: 'center' }}>
        <h2>No items in cart to checkout</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: '1rem' }}>Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page section-padding">
      <div className="container">
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>
          Checkout Process
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2.5rem' }}>
          {/* Main Form: Address & Payment */}
          <form onSubmit={handlePlaceOrder}>
            {/* 1. Shipping Address Section */}
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                <MapPin size={20} style={{ color: '#2563eb' }} /> 1. Shipping & Delivery Address
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>PHONE NUMBER</label>
                  <input
                    type="text"
                    required
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                  />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>STREET ADDRESS</label>
                  <input
                    type="text"
                    required
                    value={address.street}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>CITY</label>
                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>STATE & POSTAL CODE</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="text"
                      required
                      value={address.state}
                      onChange={(e) => setAddress({ ...address, state: e.target.value })}
                      style={{ flex: 1, padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                    <input
                      type="text"
                      required
                      value={address.postalCode}
                      onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                      style={{ width: '90px', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Payment Method Section */}
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                <CreditCard size={20} style={{ color: '#2563eb' }} /> 2. Select Payment Method
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { id: 'UPI', label: 'UPI / GPay', icon: Smartphone },
                  { id: 'CREDIT_CARD', label: 'Credit Card', icon: CreditCard },
                  { id: 'DEBIT_CARD', label: 'Debit Card', icon: CreditCard },
                  { id: 'COD', label: 'Cash On Delivery', icon: Banknote }
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPaymentMethod(item.id)}
                      style={{
                        padding: '1rem 0.5rem', borderRadius: '10px', textAlign: 'center',
                        border: `2px solid ${paymentMethod === item.id ? '#2563eb' : '#e2e8f0'}`,
                        background: paymentMethod === item.id ? '#eff6ff' : '#ffffff',
                        color: paymentMethod === item.id ? '#2563eb' : '#0f172a',
                        fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'
                      }}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Payment Options Input */}
              {paymentMethod === 'UPI' && (
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>ENTER VIRTUAL PAYMENT ADDRESS (UPI ID)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. mobile@upi or username@okicici"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                  />
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '6px' }}>Instant payment notification will be sent to your UPI app.</div>
                </div>
              )}

              {(paymentMethod === 'CREDIT_CARD' || paymentMethod === 'DEBIT_CARD') && (
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>CARD NUMBER</label>
                    <input
                      type="text"
                      required
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                      style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>EXPIRY (MM/YY)</label>
                      <input
                        type="text"
                        required
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>CVV</label>
                      <input
                        type="password"
                        required
                        maxLength={4}
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'COD' && (
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', color: '#475569', fontSize: '0.88rem' }}>
                  💵 Pay cash upon delivery to courier partner. Additional COD handling fee waived.
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}>
              Place Order & Pay ₹{total.toLocaleString()}
            </button>
          </form>

          {/* Right Summary Sidebar */}
          <div>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                Order Items ({cartItems.length})
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxHeight: '250px', overflowY: 'auto', marginBottom: '1.25rem' }}>
                {cartItems.map(item => (
                  <div key={`${item.id}-${item.size}`} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.85rem' }}>
                    <img src={item.image} alt={item.name} style={{ width: 44, height: 44, borderRadius: 6, objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>{item.name}</div>
                      <div style={{ color: '#64748b', fontSize: '0.78rem' }}>Qty: {item.quantity} • {item.size}</div>
                    </div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>₹{(item.price * item.quantity).toLocaleString()}</div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#475569' }}>
                <div className="flex-between"><span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
                {discountAmount > 0 && <div className="flex-between" style={{ color: '#10b981' }}><span>Discount</span><span>-₹{discountAmount.toLocaleString()}</span></div>}
                <div className="flex-between"><span>Shipping</span><span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span></div>
                <div className="flex-between" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', borderTop: '1px solid #f1f5f9', paddingTop: '0.6rem' }}>
                  <span>Final Total</span>
                  <span style={{ color: '#2563eb' }}>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem'
        }}>
          <div style={{
            background: '#ffffff', borderRadius: '16px', maxWidth: '480px', width: '100%',
            padding: '2.5rem', textAlign: 'center', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
          }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <CheckCircle2 size={36} />
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Order Placed Successfully!</h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Thank you for your purchase. Your order number is <strong style={{ color: '#2563eb' }}>{createdOrderNumber}</strong>.
            </p>

            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', textAlign: 'left', fontSize: '0.85rem', color: '#475569', marginBottom: '1.75rem' }}>
              <div>📦 <strong>Delivering to:</strong> {address.fullName}, {address.city}</div>
              <div style={{ marginTop: '4px' }}>💳 <strong>Payment Method:</strong> {paymentMethod}</div>
              <div style={{ marginTop: '4px' }}>💰 <strong>Total Paid:</strong> ₹{total.toLocaleString()}</div>
            </div>

            <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleFinishOrder}>
              View Order History in Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
