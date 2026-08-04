import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, Headphones, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Value Proposition Bar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem',
          paddingBottom: '3rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Truck size={32} style={{ color: '#2563eb' }} />
            <div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>Fast Shipping</h4>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Free delivery on orders above ₹1999</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <RotateCcw size={32} style={{ color: '#2563eb' }} />
            <div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>7 Days Easy Returns</h4>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Hassle-free replacement policy</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ShieldCheck size={32} style={{ color: '#2563eb' }} />
            <div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>100% Authentic</h4>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Direct from authorized brands</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Headphones size={32} style={{ color: '#2563eb' }} />
            <div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>24/7 Support</h4>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Dedicated customer care</p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Style<span>Sphere</span></h3>
            <p>StyleSphere is a modern fashion e-commerce web platform created as a final-year student portfolio project. Inspired by industry leading platforms with original design, architecture, and full-stack implementation.</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <input type="email" placeholder="Enter your email" style={{
                padding: '0.6rem 1rem', borderRadius: '6px', border: '1px solid #334155',
                background: '#1e293b', color: '#fff', fontSize: '0.85rem', flex: 1
              }} />
              <button className="btn btn-primary btn-sm"><Mail size={16} /> Subscribe</button>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Customer Care</h4>
            <ul className="footer-links">
              <li><Link to="/user">My Account</Link></li>
              <li><Link to="/cart">Shopping Cart</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
              <li><Link to="/user">Track Orders</Link></li>
              <li><Link to="/faq">Shipping Info</Link></li>
              <li><Link to="/faq">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Top Categories</h4>
            <ul className="footer-links">
              <li><Link to="/products?category=1">Men's Apparel</Link></li>
              <li><Link to="/products?category=2">Women's Fashion</Link></li>
              <li><Link to="/products?category=3">Sneakers & Shoes</Link></li>
              <li><Link to="/products?category=4">Ethnic & Festive</Link></li>
              <li><Link to="/products?category=7">Watches & Accessories</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} <strong>StyleSphere</strong>. Designed & Developed for Student Portfolio Demonstration.</div>
          <div>React.js • Java Servlets MVC • MySQL Database</div>
        </div>
      </div>
    </footer>
  );
}
