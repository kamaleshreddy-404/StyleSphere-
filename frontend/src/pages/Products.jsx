import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SidebarFilter from '../components/SidebarFilter';
import QuickViewModal from '../components/QuickViewModal';
import { PRODUCTS, CATEGORIES, BRANDS } from '../data/products';
import { Search, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFromUrl = searchParams.get('search') || '';
  const categoryFromUrl = searchParams.get('category');
  const brandFromUrl = searchParams.get('brand');
  const filterFromUrl = searchParams.get('filter');

  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl ? Number(categoryFromUrl) : null);
  const [selectedBrand, setSelectedBrand] = useState(brandFromUrl ? Number(brandFromUrl) : null);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [genderFilter, setGenderFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const itemsPerPage = 12;

  useEffect(() => {
    if (categoryFromUrl) setSelectedCategory(Number(categoryFromUrl));
    if (brandFromUrl) setSelectedBrand(Number(brandFromUrl));
  }, [categoryFromUrl, brandFromUrl]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (searchFromUrl) {
      const query = searchFromUrl.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      list = list.filter(p => p.categoryId === selectedCategory);
    }

    if (selectedBrand) {
      list = list.filter(p => p.brandId === selectedBrand);
    }

    if (genderFilter !== 'ALL') {
      list = list.filter(p => p.gender === genderFilter || p.gender === 'UNISEX');
    }

    list = list.filter(p => p.price <= maxPrice);

    if (filterFromUrl === 'new') {
      list = list.filter(p => p.isNewArrival);
    } else if (filterFromUrl === 'bestseller') {
      list = list.filter(p => p.isBestseller);
    }

    // Sort
    if (sortBy === 'price_low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    }

    return list;
  }, [searchFromUrl, selectedCategory, selectedBrand, genderFilter, maxPrice, sortBy, filterFromUrl]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const handleResetFilters = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setMaxPrice(15000);
    setGenderFilter('ALL');
    setSortBy('featured');
    setSearchParams({});
    setCurrentPage(1);
  };

  return (
    <div className="products-page section-padding">
      <div className="container">
        {/* Page Header */}
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>
              Fashion Products Collection
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Showing {filteredProducts.length} results {searchFromUrl ? `for "${searchFromUrl}"` : ''}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
              Page {currentPage} of {totalPages || 1}
            </span>
          </div>
        </div>

        {/* Layout: Sidebar Filter + Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem' }}>
          {/* Sidebar Filter */}
          <SidebarFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={(id) => { setSelectedCategory(id); setCurrentPage(1); }}
            selectedBrand={selectedBrand}
            setSelectedBrand={(id) => { setSelectedBrand(id); setCurrentPage(1); }}
            maxPrice={maxPrice}
            setMaxPrice={(val) => { setMaxPrice(val); setCurrentPage(1); }}
            genderFilter={genderFilter}
            setGenderFilter={(g) => { setGenderFilter(g); setCurrentPage(1); }}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onReset={handleResetFilters}
          />

          {/* Product Grid Area */}
          <div>
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid-cols-4" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  {paginatedProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={setQuickViewProduct}
                    />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '3rem' }}>
                    <button
                      className="btn btn-outline btn-sm"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    >
                      <ChevronLeft size={16} /> Prev
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        style={{
                          width: '36px', height: '36px', borderRadius: '8px', border: '1px solid',
                          borderColor: currentPage === i + 1 ? '#2563eb' : '#cbd5e1',
                          background: currentPage === i + 1 ? '#2563eb' : '#ffffff',
                          color: currentPage === i + 1 ? '#ffffff' : '#0f172a',
                          fontWeight: 700, cursor: 'pointer'
                        }}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      className="btn btn-outline btn-sm"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div style={{
                textAlign: 'center', padding: '4rem 2rem', background: '#ffffff',
                border: '1px dashed #cbd5e1', borderRadius: '12px'
              }}>
                <Search size={48} style={{ color: '#94a3b8', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>No products found</h3>
                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Try adjusting your filters or search keywords to find what you are looking for.</p>
                <button className="btn btn-primary" onClick={handleResetFilters}>Reset All Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}
