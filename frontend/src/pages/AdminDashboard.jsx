import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES, BRANDS } from '../data/products';
import { Package, DollarSign, ShoppingCart, Users, Plus, Edit, Trash2, ShieldCheck, AlertCircle, X, Search, Check } from 'lucide-react';

export default function AdminDashboard() {
  const [productList, setProductList] = useState(PRODUCTS);
  const [activeTab, setActiveTab] = useState('products'); // 'products', 'orders', 'categories'
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [newProductForm, setNewProductForm] = useState({
    name: '',
    brand: 'Nike',
    category: "Men's Clothing",
    price: 1999,
    discount: 10,
    gender: 'UNISEX',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800'
  });

  const [orders, setOrders] = useState([
    { id: 'ORD-2026-89421', customer: 'Alex Johnson', date: '2026-08-02', total: 13598, status: 'PROCESSING' },
    { id: 'ORD-2026-72104', customer: 'Sophia Chen', date: '2026-07-20', total: 4999, status: 'SHIPPED' },
    { id: 'ORD-2026-61192', customer: 'Rohan Sharma', date: '2026-07-15', total: 8590, status: 'DELIVERED' }
  ]);

  const filteredAdminProducts = productList.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = (e) => {
    e.preventDefault();
    const created = {
      id: Date.now(),
      name: newProductForm.name,
      brand: newProductForm.brand,
      category: newProductForm.category,
      price: Number(newProductForm.price),
      originalPrice: Math.round(Number(newProductForm.price) * 1.15),
      discount: Number(newProductForm.discount),
      rating: 4.5,
      reviewsCount: 0,
      image: newProductForm.image,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Default'],
      inStock: true,
      gender: newProductForm.gender
    };
    setProductList([created, ...productList]);
    setIsAddModalOpen(false);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product from the inventory?')) {
      setProductList(productList.filter(p => p.id !== id));
    }
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  return (
    <div className="admin-dashboard section-padding">
      <div className="container">
        {/* Admin Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <span className="badge-pill" style={{ background: '#2563eb', color: '#ffffff' }}>
              <ShieldCheck size={14} style={{ display: 'inline', marginRight: 4 }} /> SYSTEM MANAGEMENT
            </span>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Admin Dashboard</h1>
          </div>

          <button className="btn btn-primary" onClick={() => setIsAddModalOpen(true)}>
            <Plus size={18} /> Add New Product
          </button>
        </div>

        {/* Analytics Counter Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '10px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DollarSign size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>TOTAL SALES</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>₹2,84,500</div>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShoppingCart size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>TOTAL ORDERS</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>142</div>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '10px', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Package size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>ACTIVE PRODUCTS</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>{productList.length}</div>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '10px', background: '#f3e8ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>CUSTOMERS</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>86</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
          {['products', 'orders', 'categories'].map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: '0.75rem 1.5rem', fontWeight: 700, fontSize: '0.95rem', textTransform: 'capitalize',
                borderBottom: `3px solid ${activeTab === t ? '#2563eb' : 'transparent'}`,
                color: activeTab === t ? '#2563eb' : '#64748b'
              }}
            >
              {t === 'products' ? `Products Catalog (${productList.length})` : t === 'orders' ? `Orders Manager (${orders.length})` : `Categories (${CATEGORIES.length})`}
            </button>
          ))}
        </div>

        {/* Product CRUD Table */}
        {activeTab === 'products' && (
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '300px' }}>
                <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type="text"
                  placeholder="Filter admin items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: '100%', padding: '0.45rem 0.8rem 0.45rem 2.2rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>

              <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                Showing {filteredAdminProducts.length} items
              </span>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#ffffff', borderBottom: '2px solid #f1f5f9', color: '#64748b' }}>
                  <th style={{ padding: '1rem 1.5rem' }}>PRODUCT</th>
                  <th style={{ padding: '1rem' }}>BRAND</th>
                  <th style={{ padding: '1rem' }}>CATEGORY</th>
                  <th style={{ padding: '1rem' }}>PRICE</th>
                  <th style={{ padding: '1rem' }}>DISCOUNT</th>
                  <th style={{ padding: '1rem' }}>RATING</th>
                  <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredAdminProducts.slice(0, 10).map((p, idx) => (
                  <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img src={p.image} alt={p.name} style={{ width: 40, height: 40, borderRadius: 6, objectFit: 'cover' }} />
                      <span style={{ fontWeight: 600, color: '#0f172a' }}>{p.name}</span>
                    </td>
                    <td style={{ padding: '0.8rem', color: '#2563eb', fontWeight: 600 }}>{p.brand}</td>
                    <td style={{ padding: '0.8rem', color: '#475569' }}>{p.category}</td>
                    <td style={{ padding: '0.8rem', fontWeight: 700, color: '#0f172a' }}>₹{p.price.toLocaleString()}</td>
                    <td style={{ padding: '0.8rem' }}>
                      <span style={{ background: '#fef2f2', color: '#ef4444', padding: '2px 6px', borderRadius: 4, fontWeight: 700, fontSize: '0.78rem' }}>
                        {p.discount}% OFF
                      </span>
                    </td>
                    <td style={{ padding: '0.8rem', fontWeight: 600 }}>★ {p.rating}</td>
                    <td style={{ padding: '0.8rem 1.5rem', textAlign: 'right' }}>
                      <button
                        onClick={() => handleDeleteProduct(p.id)}
                        style={{ color: '#ef4444', border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer' }}
                        title="Delete product"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Order Status Manager Tab */}
        {activeTab === 'orders' && (
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem' }}>Recent System Orders</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #f1f5f9', color: '#64748b' }}>
                  <th style={{ padding: '0.8rem' }}>ORDER ID</th>
                  <th style={{ padding: '0.8rem' }}>CUSTOMER</th>
                  <th style={{ padding: '0.8rem' }}>DATE</th>
                  <th style={{ padding: '0.8rem' }}>AMOUNT</th>
                  <th style={{ padding: '0.8rem' }}>STATUS</th>
                  <th style={{ padding: '0.8rem' }}>UPDATE STATUS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(o => (
                  <tr key={o.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '0.8rem', fontWeight: 700, color: '#0f172a' }}>{o.id}</td>
                    <td style={{ padding: '0.8rem' }}>{o.customer}</td>
                    <td style={{ padding: '0.8rem', color: '#64748b' }}>{o.date}</td>
                    <td style={{ padding: '0.8rem', fontWeight: 700, color: '#2563eb' }}>₹{o.total.toLocaleString()}</td>
                    <td style={{ padding: '0.8rem' }}>
                      <span style={{
                        padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700,
                        background: o.status === 'DELIVERED' ? '#ecfdf5' : '#eff6ff',
                        color: o.status === 'DELIVERED' ? '#10b981' : '#2563eb'
                      }}>
                        {o.status}
                      </span>
                    </td>
                    <td style={{ padding: '0.8rem' }}>
                      <select
                        value={o.status}
                        onChange={(e) => handleUpdateOrderStatus(o.id, e.target.value)}
                        style={{ padding: '0.35rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.8rem' }}
                      >
                        <option value="PROCESSING">PROCESSING</option>
                        <option value="SHIPPED">SHIPPED</option>
                        <option value="DELIVERED">DELIVERED</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {CATEGORIES.map(cat => (
              <div key={cat.id} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={cat.image} alt={cat.name} style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>{cat.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{cat.count} Active Items</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add New Product Modal */}
      {isAddModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem'
        }}>
          <div style={{
            background: '#ffffff', borderRadius: '16px', maxWidth: '500px', width: '100%',
            padding: '2rem', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
          }}>
            <button onClick={() => setIsAddModalOpen(false)} style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: '#f1f5f9', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer' }}>
              <X size={18} />
            </button>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
              Add Product to StyleSphere
            </h2>

            <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.3rem' }}>PRODUCT NAME</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nike Air Max Streetwear"
                  value={newProductForm.name}
                  onChange={(e) => setNewProductForm({ ...newProductForm, name: e.target.value })}
                  style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.3rem' }}>BRAND</label>
                  <select
                    value={newProductForm.brand}
                    onChange={(e) => setNewProductForm({ ...newProductForm, brand: e.target.value })}
                    style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.88rem' }}
                  >
                    {BRANDS.map(b => <option key={b.id} value={b.name}>{b.name}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.3rem' }}>CATEGORY</label>
                  <select
                    value={newProductForm.category}
                    onChange={(e) => setNewProductForm({ ...newProductForm, category: e.target.value })}
                    style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.88rem' }}
                  >
                    {CATEGORIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.3rem' }}>PRICE (₹)</label>
                  <input
                    type="number"
                    required
                    value={newProductForm.price}
                    onChange={(e) => setNewProductForm({ ...newProductForm, price: e.target.value })}
                    style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.3rem' }}>DISCOUNT (%)</label>
                  <input
                    type="number"
                    value={newProductForm.discount}
                    onChange={(e) => setNewProductForm({ ...newProductForm, discount: e.target.value })}
                    style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.3rem' }}>IMAGE URL</label>
                <input
                  type="text"
                  required
                  value={newProductForm.image}
                  onChange={(e) => setNewProductForm({ ...newProductForm, image: e.target.value })}
                  style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>Save & Publish Product</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
