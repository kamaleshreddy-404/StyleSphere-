import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Tag, Shield } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e3a8a 100%)',
      color: '#ffffff',
      padding: '4rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
        {/* Hero Left Content */}
        <div>
          <span className="badge-pill" style={{ background: 'rgba(37, 99, 235, 0.25)', color: '#60a5fa', border: '1px solid rgba(96, 165, 250, 0.3)' }}>
            <Sparkles size={14} style={{ display: 'inline', marginRight: 4 }} /> New Season Collection 2026
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            Elevate Your Everyday <span style={{ color: '#3b82f6' }}>Fashion & Style</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '2rem', maxWidth: '500px' }}>
            Discover top-tier apparel, shoes, and accessories from 15+ global brands. Specially curated for campus trends and urban lifestyle.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link to="/categories" className="btn btn-outline" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}>
              Browse Categories
            </Link>
          </div>

          {/* Stats Bar */}
          <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#3b82f6' }}>100+</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Curated Items</div>
            </div>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#3b82f6' }}>15+</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Global Brands</div>
            </div>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#3b82f6' }}>4.8 ★</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Hero Right Visual Banner */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            border: '4px solid rgba(255,255,255,0.1)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
              alt="StyleSphere Collection"
              style={{ width: '100%', height: '420px', objectFit: 'cover' }}
            />
          </div>

          {/* Floating Badge */}
          <div style={{
            position: 'absolute', bottom: '-20px', left: '-20px',
            background: '#ffffff', color: '#0f172a', padding: '1rem 1.25rem',
            borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            display: 'flex', alignItems: 'center', gap: '0.75rem'
          }}>
            <div style={{ background: '#eff6ff', color: '#2563eb', padding: '10px', borderRadius: '50%' }}>
              <Tag size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>STUDENT DISCOUNT</div>
              <div style={{ fontSize: '1rem', fontWeight: 800 }}>GET 10% OFF NOW</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
