import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { PRODUCTS, CATEGORIES, BRANDS } from '../data/products';
import { ArrowRight, Flame, Sparkles, Star, Tag, Percent, Zap } from 'lucide-react';

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Products with the highest discounts (Offers & Steal Deals)
  const flashDealProducts = PRODUCTS.filter(p => p.discount >= 20).slice(0, 4);
  const bestSellers = PRODUCTS.filter(p => p.isBestseller).slice(0, 4);

  return (
    <div className="home-page" style={{ backgroundColor: '#ffffff' }}>
      {/* 1. Main Professional E-Commerce Hero Banner & Offer Pillars */}
      <HeroBanner />

      {/* 2. Flash Deals & Steal Offers (High Discount Items) */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="flex-between" style={{ marginBottom: '1.75rem', alignItems: 'flex-end' }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#fef2f2',
                color: '#dc2626',
                border: '1px solid #fecaca',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                marginBottom: '0.5rem'
              }}>
                <Flame size={14} /> TODAY'S TOP DISCOUNTS
              </div>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Flash Deals & Steal Offers
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#64748b', marginTop: '4px' }}>
                Save big on premium apparel, jackets, and sneakers with direct manufacturer discounts
              </p>
            </div>
            <Link
              to="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#2563eb',
                textDecoration: 'none'
              }}
            >
              View All Offers <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-cols-4">
            {flashDealProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Shop by Offers & Categories */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="badge-pill" style={{ background: '#eff6ff', color: '#2563eb' }}>
              <Percent size={13} style={{ display: 'inline', marginRight: 4 }} /> CATEGORY DISCOUNTS
            </span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0f172a', margin: '0.4rem 0' }}>
              Explore Top Offers by Category
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Handpicked seasonal clearances with guaranteed minimum savings
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1.25rem' }}>
            {[
              {
                id: 3,
                name: "Footwear & Shoes",
                offer: "Min 20% - 30% OFF",
                count: "22+ Items",
                img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80"
              },
              {
                id: 1,
                name: "Men's Clothing",
                offer: "Up to 40% OFF",
                count: "28+ Items",
                img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=400&q=80"
              },
              {
                id: 2,
                name: "Women's Fashion",
                offer: "Flat 25% - 35% OFF",
                count: "25+ Items",
                img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=400&q=80"
              },
              {
                id: 4,
                name: "Ethnic & Festive",
                offer: "Min 25% OFF",
                count: "12+ Items",
                img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80"
              },
              {
                id: 10,
                name: "Jackets & Winter",
                offer: "Up to 40% OFF",
                count: "5+ Items",
                img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=400&q=80"
              },
              {
                id: 7,
                name: "Watches & Bags",
                offer: "Flat 20% - 30% OFF",
                count: "16+ Items",
                img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80"
              }
            ].map(cat => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(37,99,235,0.12)';
                  e.currentTarget.style.borderColor = '#93c5fd';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{ width: '84px', height: '84px', borderRadius: '50%', objectFit: 'cover', marginBottom: '0.85rem', border: '3px solid #eff6ff' }}
                />
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>{cat.name}</h4>
                <div style={{ background: '#ecfdf5', color: '#059669', fontSize: '0.72rem', fontWeight: 800, padding: '2px 8px', borderRadius: '4px', marginBottom: '4px' }}>
                  {cat.offer}
                </div>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mid-Page High-Impact Promo Offer Banner */}
      <section className="section-padding" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #1d4ed8 100%)',
            borderRadius: '20px',
            color: '#ffffff',
            padding: '3rem 3.5rem',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            alignItems: 'center',
            gap: '2.5rem',
            boxShadow: '0 15px 35px rgba(37, 99, 235, 0.25)'
          }}>
            <div>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.5px' }}>
                🎓 STUDENT EXCLUSIVE OFFER
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.8rem 0', lineHeight: 1.2 }}>
                Extra 10% OFF With Code <span style={{ textDecoration: 'underline', color: '#93c5fd' }}>STUDENT10</span>
              </h2>
              <p style={{ fontSize: '1.05rem', opacity: 0.9, marginBottom: '1.75rem', maxWidth: '500px', lineHeight: 1.6 }}>
                Applicable on all products including Levi's denim, Nike sneakers, and Adidas sportswear. Combine with flash sale discounts for maximum savings!
              </p>
              <Link
                to="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  color: '#1e3a8a',
                  padding: '0.85rem 2rem',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              >
                Claim Discount & Shop <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
                alt="Nike Red Sneakers Deal"
                style={{
                  width: '85%',
                  maxWidth: '360px',
                  borderRadius: '16px',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                  border: '4px solid rgba(255,255,255,0.2)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Best Selling Products */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', paddingTop: '0' }}>
        <div className="container">
          <div className="flex-between" style={{ marginBottom: '1.75rem', alignItems: 'flex-end' }}>
            <div>
              <span className="badge-pill" style={{ background: '#fef3c7', color: '#b45309' }}>
                <Star size={13} fill="#b45309" style={{ display: 'inline', marginRight: 4 }} /> HIGHLY RATED
              </span>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0f172a', margin: '0.4rem 0 0' }}>
                Campus Bestsellers
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#64748b', marginTop: '4px' }}>
                Most loved styles reviewed and recommended by over 12,000+ campus shoppers
              </p>
            </div>
            <Link
              to="/products?filter=bestseller"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#2563eb',
                textDecoration: 'none'
              }}
            >
              View All Bestsellers <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-cols-4">
            {bestSellers.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Deals & Discounts */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="badge-pill" style={{ background: '#eff6ff', color: '#2563eb' }}>
              OFFICIAL PARTNERS
            </span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0f172a', margin: '0.4rem 0' }}>
              Brand Discounts & Deals
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              100% genuine products sourced directly from world leading fashion brands
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1.25rem' }}>
            {[
              { id: 1, name: "Nike", deal: "Up to 30% OFF" },
              { id: 2, name: "Adidas", deal: "Flat 20% OFF" },
              { id: 5, name: "Levi's", deal: "Min 25% OFF" },
              { id: 6, name: "Puma", deal: "Flat 30% OFF" },
              { id: 3, name: "Zara", deal: "Trendy Drops" },
              { id: 7, name: "Tommy Hilfiger", deal: "Up to 30% OFF" }
            ].map(brand => (
              <Link
                key={brand.id}
                to={`/products?brand=${brand.id}`}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 18px rgba(37,99,235,0.12)';
                  e.currentTarget.style.borderColor = '#93c5fd';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>{brand.name}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#16a34a', marginTop: '6px' }}>{brand.deal}</div>
                <div style={{ fontSize: '0.72rem', color: '#2563eb', marginTop: '4px' }}>Shop Collection →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}
