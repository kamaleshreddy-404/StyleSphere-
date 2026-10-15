import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'default', size = 'md' }) {
  const isLight = variant === 'light';

  const iconDim = size === 'sm' ? 34 : size === 'lg' ? 44 : 38;
  const titleSize = size === 'sm' ? '1.25rem' : size === 'lg' ? '1.75rem' : '1.45rem';
  const subSize = size === 'sm' ? '0.58rem' : size === 'lg' ? '0.7rem' : '0.62rem';

  return (
    <Link to="/" className="brand-logo" style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.65rem',
      textDecoration: 'none',
      cursor: 'pointer',
      userSelect: 'none'
    }}>
      {/* Premium Online Shopping Bag & Sphere Emblem */}
      <div className="brand-logo-icon" style={{
        position: 'relative',
        width: `${iconDim}px`,
        height: `${iconDim}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <svg
          width={iconDim}
          height={iconDim}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand-logo-svg"
        >
          <defs>
            {/* Rich Sapphire Shopping Gradient */}
            <linearGradient id="logoBagGrad" x1="4" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            {/* Handle Metallic Sheen */}
            <linearGradient id="logoHandleGrad" x1="14" y1="3" x2="30" y2="17" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>

            {/* Golden Sparkle / Star */}
            <linearGradient id="goldSpark" x1="0" y1="0" x2="10" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            
            {/* Soft Shadow */}
            <filter id="bagShadow" x="-10%" y="-10%" width="125%" height="135%" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#2563eb" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Shopping Bag Handle */}
          <path
            d="M15 15V10.5C15 6.91 17.91 4 21.5 4H22.5C26.09 4 29 6.91 29 10.5V15"
            stroke="url(#logoHandleGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Main Shopping Bag Container (Squircle Style) */}
          <rect
            x="5.5"
            y="13"
            width="33"
            height="27"
            rx="8"
            fill="url(#logoBagGrad)"
            filter="url(#bagShadow)"
          />

          {/* Fashion 'S' Ribbon / Sphere Curve in Bag */}
          <path
            d="M27.5 20C26.5 18.5 24.5 17.5 22 17.5C18.5 17.5 16.5 19.5 16.5 22C16.5 26.5 27.5 24.5 27.5 29C27.5 32 25 33.5 21.5 33.5C18.5 33.5 16.5 32 15.5 30.5"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Online Shopping Sparkle Accent */}
          <path
            d="M33 11L34.2 13.8L37 15L34.2 16.2L33 19L31.8 16.2L29 15L31.8 13.8L33 11Z"
            fill="url(#goldSpark)"
          />
        </svg>
      </div>

      {/* Brand Title & Tagline */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div style={{
          fontFamily: "'Outfit', 'Inter', sans-serif",
          fontSize: titleSize,
          fontWeight: 800,
          letterSpacing: '-0.025em',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ color: isLight ? '#ffffff' : '#0f172a' }}>Style</span>
          <span style={{
            color: '#2563eb',
            marginLeft: '1px'
          }}>
            Sphere
          </span>
        </div>

        <div style={{
          fontSize: subSize,
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: isLight ? '#94a3b8' : '#64748b',
          marginTop: '3px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span>ONLINE FASHION</span>
          <span style={{ color: '#2563eb', fontSize: '0.8em' }}>•</span>
          <span>STORE</span>
        </div>
      </div>
    </Link>
  );
}
