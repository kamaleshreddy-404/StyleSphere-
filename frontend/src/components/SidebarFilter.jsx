import React from 'react';
import { CATEGORIES, BRANDS } from '../data/products';
import { Filter, RotateCcw, Check } from 'lucide-react';

export default function SidebarFilter({
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  maxPrice,
  setMaxPrice,
  genderFilter,
  setGenderFilter,
  sortBy,
  setSortBy,
  onReset
}) {
  return (
    <aside style={{
      background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px',
      padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '1rem', color: '#0f172a' }}>
          <Filter size={18} style={{ color: '#2563eb' }} /> Filters
        </div>
        <button
          onClick={onReset}
          style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <RotateCcw size={14} /> Reset
        </button>
      </div>

      {/* Sorting */}
      <div>
        <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.5rem' }}>
          SORT BY
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px',
            fontSize: '0.85rem', background: '#fff', color: '#0f172a'
          }}
        >
          <option value="featured">Featured First</option>
          <option value="newest">Newest Arrivals</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="rating">Customer Rating</option>
        </select>
      </div>

      {/* Gender Filter */}
      <div>
        <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.5rem' }}>
          GENDER / STYLE
        </label>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {['ALL', 'MEN', 'WOMEN', 'UNISEX'].map(g => (
            <button
              key={g}
              onClick={() => setGenderFilter(g)}
              style={{
                padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600,
                border: `1px solid ${genderFilter === g ? '#2563eb' : '#e2e8f0'}`,
                background: genderFilter === g ? '#eff6ff' : '#ffffff',
                color: genderFilter === g ? '#2563eb' : '#475569'
              }}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
          <span>MAX PRICE</span>
          <span style={{ color: '#2563eb' }}>₹{maxPrice.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="500"
          max="15000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#2563eb' }}
        />
      </div>

      {/* Categories */}
      <div>
        <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.5rem' }}>
          CATEGORIES
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '180px', overflowY: 'auto' }}>
          <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="cat"
              checked={selectedCategory === null}
              onChange={() => setSelectedCategory(null)}
              style={{ accentColor: '#2563eb' }}
            />
            <span>All Categories</span>
          </label>
          {CATEGORIES.map(cat => (
            <label key={cat.id} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input
                type="radio"
                name="cat"
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
                style={{ accentColor: '#2563eb' }}
              />
              <span style={{ color: selectedCategory === cat.id ? '#2563eb' : '#475569', fontWeight: selectedCategory === cat.id ? 600 : 400 }}>
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.5rem' }}>
          BRANDS
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '180px', overflowY: 'auto' }}>
          <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="brand"
              checked={selectedBrand === null}
              onChange={() => setSelectedBrand(null)}
              style={{ accentColor: '#2563eb' }}
            />
            <span>All Brands</span>
          </label>
          {BRANDS.map(brand => (
            <label key={brand.id} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input
                type="radio"
                name="brand"
                checked={selectedBrand === brand.id}
                onChange={() => setSelectedBrand(brand.id)}
                style={{ accentColor: '#2563eb' }}
              />
              <span style={{ color: selectedBrand === brand.id ? '#2563eb' : '#475569', fontWeight: selectedBrand === brand.id ? 600 : 400 }}>
                {brand.name}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
