import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Check, Zap, ShieldCheck, Truck, RotateCcw, Clock, Sparkles } from 'lucide-react';

export default function HeroBanner() {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 35, seconds: 48 });

  // Live countdown timer for deal urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('STUDENT10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const formatNum = (n) => String(n).padStart(2, '0');

  return (
    <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
      {/* Top Offer Marquee Strip */}
      <div style={{
        background: 'linear-gradient(90deg, #1e3a8a 0%, #2563eb 50%, #1e40af 100%)',
        color: '#ffffff',
        padding: '0.45rem 1rem',
        fontSize: '0.82rem',
        fontWeight: 600,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap'
      }}>
        <span>🔥 <strong>MEGA FASHION FESTIVAL:</strong> UP TO 70% OFF ON 110+ STYLES</span>
        <span style={{ opacity: 0.6 }}>|</span>
        <span>🎓 Use Coupon <code style={{ background: '#ffffff', color: '#1e3a8a', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>STUDENT10</code> for Extra 10% OFF</span>
        <span style={{ opacity: 0.6 }}>|</span>
        <span>🚚 Free Express Shipping Over ₹1999</span>
      </div>

      {/* Main E-Commerce Hero Showcase */}
      <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #f1f5f9 100%)',
          borderRadius: '20px',
          border: '1px solid #dbeafe',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(37, 99, 235, 0.08)'
        }}>
          {/* Left Hero Content */}
          <div style={{ padding: '3.5rem 3rem' }}>
            {/* Urgency Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#fee2e2',
              color: '#dc2626',
              border: '1px solid #fecaca',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              <Clock size={14} />
              <span>FLASH SALE ENDS IN: {formatNum(timeLeft.hours)}h : {formatNum(timeLeft.minutes)}m : {formatNum(timeLeft.seconds)}s</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: '3.1rem',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '0.8rem'
            }}>
              Campus Fashion <br />
              <span style={{ color: '#2563eb' }}>Mega Offer Days</span>
            </h1>

            {/* Discount Callout */}
            <div style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#1e40af',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>Flat 40% – 70% OFF</span>
              <span style={{ fontSize: '0.85rem', background: '#dbeafe', color: '#1d4ed8', padding: '3px 8px', borderRadius: '4px', fontWeight: 800 }}>
                LIMITED TIME
              </span>
            </div>

            <p style={{
              fontSize: '1rem',
              color: '#64748b',
              lineHeight: 1.6,
              maxWidth: '520px',
              marginBottom: '1.8rem'
            }}>
              Upgrade your campus wardrobe with top brands: Nike, Adidas, Zara, Levi's, Puma & more.
              Instant campus delivery and hassle-free returns.
            </p>

            {/* Action Buttons Row */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
              <Link
                to="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#2563eb',
                  color: '#ffffff',
                  padding: '0.85rem 2rem',
                  borderRadius: '10px',
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.backgroundColor = '#1d4ed8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = '#2563eb'; }}
              >
                <span>Shop Mega Sale</span>
                <ArrowRight size={18} />
              </Link>

              {/* One-Click Coupon Box */}
              <button
                type="button"
                onClick={handleCopyCode}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: copied ? '#ecfdf5' : '#ffffff',
                  color: copied ? '#059669' : '#2563eb',
                  border: `1.5px dashed ${copied ? '#10b981' : '#60a5fa'}`,
                  padding: '0.8rem 1.4rem',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Click to copy coupon code"
              >
                <Tag size={16} />
                <span>{copied ? 'Code STUDENT10 Copied!' : 'Code: STUDENT10 (Extra 10% OFF)'}</span>
                {copied && <Check size={16} color="#10b981" />}
              </button>
            </div>

            {/* Quick Category Chips */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>Popular:</span>
              {[
                { name: "👟 Sneakers", link: "/products?category=3" },
                { name: "👕 Oversized Tees", link: "/products?category=1" },
                { name: "👖 Denim Jeans", link: "/products?category=1" },
                { name: "👗 Ethnic Wear", link: "/products?category=4" },
                { name: "⌚ Watches", link: "/products?category=7" }
              ].map((chip, idx) => (
                <Link
                  key={idx}
                  to={chip.link}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#334155',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.color = '#2563eb'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#334155'; }}
                >
                  {chip.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Visual Image Showcase (Cleanly Contained) */}
          <div style={{ padding: '2rem 2.5rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
              border: '4px solid #ffffff'
            }}>
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
                alt="Mega Offer Banner"
                style={{ width: '100%', height: '390px', objectFit: 'cover', display: 'block' }}
              />

              {/* Floating Discount Tag Badge on Banner */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                borderRadius: '10px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
              }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#dc2626' }}>SPECIAL STUDENT DEAL</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Trending College Fits</div>
                </div>
                <div style={{ background: '#2563eb', color: '#ffffff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700 }}>
                  Min 40% OFF
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Pillars of E-Commerce Trust & Offers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem',
          marginTop: '2rem'
        }}>
          {[
            {
              icon: <Tag size={24} color="#2563eb" />,
              title: "Flat 10% Student Discount",
              desc: "Apply code STUDENT10 at checkout",
              bg: "#eff6ff",
              border: "#bfdbfe"
            },
            {
              icon: <Truck size={24} color="#059669" />,
              title: "Free Express Shipping",
              desc: "On all orders above ₹1,999",
              bg: "#ecfdf5",
              border: "#a7f3d0"
            },
            {
              icon: <Zap size={24} color="#d97706" />,
              title: "30-Min Campus Dispatch",
              desc: "Lightning fast college delivery",
              bg: "#fffbeb",
              border: "#fde68a"
            },
            {
              icon: <ShieldCheck size={24} color="#7c3aed" />,
              title: "100% Genuine Brands",
              desc: "Direct from official suppliers",
              bg: "#f5f3ff",
              border: "#ddd6fe"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: item.bg,
                border: `1px solid ${item.border}`,
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ background: '#ffffff', width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
