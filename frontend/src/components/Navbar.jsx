import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X, ShieldCheck, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { PRODUCTS } from '../data/products';

export default function Navbar() {
  const { itemCount } = useCart();
  const { count: wishlistCount } = useWishlist();
  const { user, logout, isAdmin } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length > 1) {
      const filtered = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(val.toLowerCase()) || 
        p.brand.toLowerCase().includes(val.toLowerCase()) ||
        p.category.toLowerCase().includes(val.toLowerCase())
      ).slice(0, 5);
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchResults([]);
    }
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Top Banner */}
      <div className="top-bar">
        <div className="container flex-between">
          <div>🎓 <strong>Student Special:</strong> Extra 10% OFF with code <code>STUDENT10</code> | Free Express Shipping on ₹1999+</div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span>📞 Helpline: 1800-STYLE-SPHERE</span>
            {isAdmin && <span style={{ background: '#2563eb', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>ADMIN MODE</span>}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-sphere">S</div>
            <div className="logo-text">Style<span>Sphere</span></div>
          </Link>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link></li>
            <li><Link to="/categories" className={`nav-link ${location.pathname === '/categories' ? 'active' : ''}`}>Categories</Link></li>
            <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link></li>
            <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
            <li><Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}>FAQ</Link></li>
            {isAdmin && (
              <li>
                <Link to="/admin" className="nav-link" style={{ color: '#2563eb', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={16} /> Admin Panel
                </Link>
              </li>
            )}
          </ul>

          {/* Search Box */}
          <div style={{ position: 'relative' }}>
            <form onSubmit={handleSearchSubmit} className="search-box">
              <Search className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search products, brands..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </form>
            {searchResults.length > 0 && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '4px',
                background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)', zIndex: 20, overflow: 'hidden'
              }}>
                {searchResults.map(item => (
                  <div
                    key={item.id}
                    onClick={() => {
                      navigate(`/product/${item.id}`);
                      setSearchResults([]);
                      setSearchQuery('');
                    }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px',
                      cursor: 'pointer', borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
                  >
                    <img src={item.image} alt={item.name} style={{ width: 36, height: 36, objectFit: 'cover', borderRadius: 4 }} />
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' }}>{item.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#2563eb' }}>₹{item.price} • {item.brand}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Icons */}
          <div className="nav-actions">
            <Link to="/user" className="nav-icon-btn" title="Wishlist">
              <Heart size={20} />
              {wishlistCount > 0 && <span className="badge-count" style={{ background: '#ef4444' }}>{wishlistCount}</span>}
            </Link>

            <Link to="/cart" className="nav-icon-btn" title="Shopping Cart">
              <ShoppingBag size={20} />
              {itemCount > 0 && <span className="badge-count">{itemCount}</span>}
            </Link>

            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link to="/user" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a' }}>
                  <img src={user.avatar} alt={user.name} style={{ width: 30, height: 30, borderRadius: '50%', objectFit: 'cover' }} />
                  <span>{user.name.split(' ')[0]}</span>
                </Link>
                <button onClick={logout} className="nav-icon-btn" title="Logout" style={{ color: '#64748b' }}>
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
