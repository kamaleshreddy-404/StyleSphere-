import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { User, Package, Heart, MapPin, KeyRound, LogOut, CheckCircle, Clock, Truck, ShoppingBag, Trash2 } from 'lucide-react';

export default function UserProfile() {
  const { user, logout, updateProfile } = useAuth();
  const { wishlistItems, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'profile', 'wishlist', 'addresses'
  const [profileForm, setProfileForm] = useState({
    name: user?.name || 'Alex Johnson',
    email: user?.email || 'alex.j@example.com',
    phone: user?.phone || '+91 98765 43211'
  });
  const [saveSuccess, setSaveSuccess] = useState(false);

  const mockOrders = [
    {
      id: 'ORD-2026-89421',
      date: '2026-08-02',
      status: 'PROCESSING', // PROCESSING, SHIPPED, DELIVERED
      total: 13598,
      items: [
        { name: 'Nike Air Max Pulse Sneakers', price: 8999, qty: 1, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100' },
        { name: "Levi's 501 Original Fit Jeans", price: 4599, qty: 1, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=100' }
      ]
    },
    {
      id: 'ORD-2026-72104',
      date: '2026-07-20',
      status: 'DELIVERED',
      total: 4999,
      items: [
        { name: 'Tommy Hilfiger Oxford Casual Shirt', price: 4999, qty: 1, img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=100' }
      ]
    }
  ];

  const wishlistedProducts = PRODUCTS.filter(p => wishlistItems.includes(p.id));

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <div className="user-profile-page section-padding">
      <div className="container">
        {/* User Banner Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#fff',
          borderRadius: '16px', padding: '2rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem'
        }}>
          <img
            src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200'}
            alt={user?.name}
            style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '3px solid #2563eb' }}
          />
          <div>
            <span style={{ background: '#2563eb', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
              {user?.role || 'CUSTOMER'} ACCOUNT
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0.2rem 0' }}>{user?.name}</h1>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{user?.email} • Member since 2026</p>
          </div>
          <button
            onClick={logout}
            className="btn btn-outline"
            style={{ marginLeft: 'auto', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* Dashboard Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '2rem' }}>
          {/* Navigation Sidebar */}
          <aside style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem', height: 'fit-content' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                { id: 'orders', label: 'Order History', icon: Package },
                { id: 'wishlist', label: `Wishlist (${wishlistItems.length})`, icon: Heart },
                { id: 'profile', label: 'Profile Details', icon: User },
                { id: 'addresses', label: 'Saved Addresses', icon: MapPin }
              ].map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px', width: '100%',
                      padding: '0.75rem 1rem', borderRadius: '8px', border: 'none',
                      background: activeTab === item.id ? '#eff6ff' : 'transparent',
                      color: activeTab === item.id ? '#2563eb' : '#475569',
                      fontWeight: activeTab === item.id ? 700 : 500, fontSize: '0.9rem',
                      cursor: 'pointer', textAlign: 'left'
                    }}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Tab Panel */}
          <main style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem' }}>
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>
                  Your Order History
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {mockOrders.map(order => (
                    <div key={order.id} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                      {/* Order Summary Bar */}
                      <div style={{ background: '#f8fafc', padding: '1rem 1.25rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem' }}>
                        <div>
                          <strong>{order.id}</strong> • Placed on {order.date}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <span style={{
                            padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700,
                            background: order.status === 'DELIVERED' ? '#ecfdf5' : '#eff6ff',
                            color: order.status === 'DELIVERED' ? '#10b981' : '#2563eb'
                          }}>
                            {order.status}
                          </span>
                          <span style={{ fontWeight: 800, color: '#0f172a' }}>₹{order.total.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Order Items */}
                      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {order.items.map((it, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem' }}>
                            <img src={it.img} alt={it.name} style={{ width: 50, height: 50, borderRadius: 6, objectFit: 'cover' }} />
                            <div style={{ flex: 1 }}>
                              <div style={{ fontWeight: 700, color: '#0f172a' }}>{it.name}</div>
                              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Quantity: {it.qty}</div>
                            </div>
                            <div style={{ fontWeight: 700, color: '#0f172a' }}>₹{it.price.toLocaleString()}</div>
                          </div>
                        ))}
                      </div>

                      {/* Delivery Status Timeline */}
                      <div style={{ background: '#fafafa', padding: '1rem 1.25rem', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '2rem', fontSize: '0.8rem', color: '#64748b' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#10b981', fontWeight: 700 }}>
                          <CheckCircle size={14} /> Order Placed
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: order.status !== 'CANCELLED' ? '#2563eb' : '#94a3b8', fontWeight: 700 }}>
                          <Clock size={14} /> Processing
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: order.status === 'DELIVERED' ? '#10b981' : '#94a3b8', fontWeight: 700 }}>
                          <Truck size={14} /> Out for Delivery
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>
                  My Saved Wishlist ({wishlistedProducts.length})
                </h2>

                {wishlistedProducts.length > 0 ? (
                  <div className="grid-cols-4" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    {wishlistedProducts.map(p => (
                      <div key={p.id} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden', padding: '0.75rem' }}>
                        <img src={p.image} alt={p.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px', marginBottom: '0.5rem' }} />
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>{p.name}</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#2563eb', margin: '4px 0' }}>₹{p.price.toLocaleString()}</div>
                        <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem' }}>
                          <button className="btn btn-primary btn-sm" style={{ flex: 1 }} onClick={() => addToCart(p)}>
                            <ShoppingBag size={14} /> Add
                          </button>
                          <button className="btn btn-outline btn-sm" onClick={() => toggleWishlist(p.id)}>
                            <Trash2 size={14} color="#ef4444" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>No wishlist items saved.</div>
                )}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>
                  Profile Information
                </h2>

                <form onSubmit={handleUpdateProfile} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '500px' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>FULL NAME</label>
                    <input
                      type="text"
                      value={profileForm.name}
                      onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                      style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>EMAIL ADDRESS</label>
                    <input
                      type="email"
                      value={profileForm.email}
                      onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                      style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>PHONE NUMBER</label>
                    <input
                      type="text"
                      value={profileForm.phone}
                      onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                  {saveSuccess && <span style={{ color: '#10b981', fontWeight: 700, fontSize: '0.85rem' }}>Profile updated successfully!</span>}
                </form>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>
                  Saved Shipping Addresses
                </h2>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem', maxWidth: '500px' }}>
                  <span style={{ background: '#eff6ff', color: '#2563eb', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>DEFAULT HOME</span>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0.5rem 0 0.2rem' }}>Alex Johnson</h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                    123 College Green Road, Tech Park, Bangalore, Karnataka - 560001<br />
                    Phone: +91 98765 43211
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
