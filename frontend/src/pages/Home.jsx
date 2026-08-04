import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { PRODUCTS, CATEGORIES, BRANDS } from '../data/products';
import { ArrowRight, Sparkles, Star, TrendingUp, ShieldCheck, Flame } from 'lucide-react';

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const featuredCategories = CATEGORIES.slice(0, 6);
  const newArrivals = PRODUCTS.filter(p => p.isNewArrival).slice(0, 4);
  const bestSellers = PRODUCTS.filter(p => p.isBestseller).slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Categories */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill">TRENDING COLLECTIONS</span>
            <h2>Shop By Category</h2>
            <p>Explore top styles across all fashion departments</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1.25rem' }}>
            {featuredCategories.map(cat => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                style={{
                  background: '#ffffff', borderRadius: '12px', overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0',
                  textAlign: 'center', padding: '1rem', transition: 'all 0.3s ease',
                  display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}
                className="category-card"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '0.75rem', border: '3px solid #eff6ff' }}
                />
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.2rem' }}>{cat.name}</h4>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{cat.count}+ Products</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section-padding">
        <div className="container">
          <div className="flex-between" style={{ marginBottom: '2rem' }}>
            <div>
              <span className="badge-pill" style={{ background: '#eff6ff', color: '#2563eb' }}>
                <Sparkles size={14} style={{ display: 'inline', marginRight: 4 }} /> JUST ARRIVED
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>New Arrivals</h2>
            </div>
            <Link to="/products?filter=new" className="btn btn-outline btn-sm">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-cols-4">
            {newArrivals.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Offer Banner */}
      <section className="section-padding" style={{ padding: '0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            borderRadius: '16px', color: '#ffffff', padding: '3.5rem 3rem',
            display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', gap: '2rem',
            boxShadow: '0 15px 30px rgba(37, 99, 235, 0.3)'
          }}>
            <div>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
                LIMITED TIME OFFER
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, margin: '0.75rem 0' }}>
                Up to 40% OFF On Premium Denim & Sneakers
              </h2>
              <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '1.75rem', maxWidth: '480px' }}>
                Upgrade your daily outfit with Levi's, Nike, and Adidas. Use coupon code <strong style={{ textDecoration: 'underline' }}>STUDENT10</strong> at checkout for additional savings.
              </p>
              <Link to="/products" className="btn btn-secondary" style={{ background: '#0f172a', padding: '0.8rem 2rem' }}>
                Shop Sale Collection <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ textAlign: 'right' }}>
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
                alt="Promo Deal"
                style={{ width: '80%', borderRadius: '12px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-padding">
        <div className="container">
          <div className="flex-between" style={{ marginBottom: '2rem' }}>
            <div>
              <span className="badge-pill" style={{ background: '#fef3c7', color: '#d97706' }}>
                <Flame size={14} style={{ display: 'inline', marginRight: 4 }} /> MOST POPULAR
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>Best Selling Products</h2>
            </div>
            <Link to="/products?filter=bestseller" className="btn btn-outline btn-sm">
              View All <ArrowRight size={14} />
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

      {/* Featured Brands */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Brands</h2>
            <p>100% authentic apparel from world renowned brands</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1.5rem', alignItems: 'center' }}>
            {BRANDS.slice(0, 6).map(brand => (
              <Link
                key={brand.id}
                to={`/products?brand=${brand.id}`}
                style={{
                  background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px',
                  padding: '1.25rem', textAlign: 'center', transition: 'transform 0.2s',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>{brand.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#2563eb', marginTop: '4px' }}>Explore</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge-pill">TESTIMONIALS</span>
            <h2>What Our Customers Say</h2>
            <p>Real reviews from verified campus shoppers</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                name: "Rohan V.",
                role: "Computer Science Student",
                comment: "StyleSphere made shopping for college outfits so easy! Delivered within 2 days and the Nike Air Max fits like a dream.",
                rating: 5,
                img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
              },
              {
                name: "Ananya S.",
                role: "Design Lead",
                comment: "Love the clean white UI and quick filter features. The student discount code saved me ₹500 on my Levi's jeans purchase!",
                rating: 5,
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
              },
              {
                name: "Vikram R.",
                role: "Final Year Student",
                comment: "Impressive project architecture and smooth shopping experience. Product detail pages have comprehensive info.",
                rating: 5,
                img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100"
              }
            ].map((review, idx) => (
              <div key={idx} style={{
                background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px',
                padding: '1.75rem', boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
              }}>
                <div style={{ display: 'flex', color: '#f59e0b', gap: '2px', marginBottom: '1rem' }}>
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" />)}
                </div>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  "{review.comment}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={review.img} alt={review.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>{review.name}</h5>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}
