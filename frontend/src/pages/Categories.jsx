import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/products';
import { ArrowRight, Layers } from 'lucide-react';

export default function Categories() {
  return (
    <div className="categories-page section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge-pill">ALL DEPARTMENTS</span>
          <h2>Explore Categories</h2>
          <p>Browse our extensive selection of fashion categories and curated styles</p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {CATEGORIES.map(cat => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              style={{
                background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px',
                overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex', flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute', bottom: '12px', right: '12px',
                  background: 'rgba(15, 23, 42, 0.8)', color: '#fff',
                  padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700
                }}>
                  {cat.count}+ Items
                </span>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.2rem' }}>{cat.name}</h3>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Explore collection</span>
                </div>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%', background: '#eff6ff',
                  color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
