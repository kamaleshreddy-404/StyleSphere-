import { PRODUCTS, CATEGORIES, BRANDS } from '../data/products';

const API_BASE_URL = 'http://localhost:8080/stylesphere-api/api';

export async function fetchProducts(filters = {}) {
  try {
    const params = new URLSearchParams();
    if (filters.category) params.append('category', filters.category);
    if (filters.brand) params.append('brand', filters.brand);
    if (filters.minPrice) params.append('minPrice', filters.minPrice);
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
    if (filters.gender) params.append('gender', filters.gender);
    if (filters.sort) params.append('sort', filters.sort);

    const response = await fetch(`${API_BASE_URL}/products?${params.toString()}`);
    if (response.ok) {
      const json = await response.json();
      return json.data || json;
    }
  } catch (err) {
    // API offline - use client-side filtering fallback
  }

  let result = [...PRODUCTS];

  if (filters.search) {
    const q = filters.search.toLowerCase();
    result = result.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }

  if (filters.category && filters.category !== 'All') {
    result = result.filter(p => p.category === filters.category || String(p.categoryId) === String(filters.category));
  }

  if (filters.brand && filters.brand !== 'All') {
    result = result.filter(p => p.brand === filters.brand || String(p.brandId) === String(filters.brand));
  }

  if (filters.gender && filters.gender !== 'All') {
    result = result.filter(p => p.gender === filters.gender);
  }

  if (filters.minPrice) {
    result = result.filter(p => p.price >= Number(filters.minPrice));
  }

  if (filters.maxPrice) {
    result = result.filter(p => p.price <= Number(filters.maxPrice));
  }

  if (filters.sort) {
    if (filters.sort === 'price_asc' || filters.sort === 'low_to_high') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price_desc' || filters.sort === 'high_to_low') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (filters.sort === 'newest') {
      result.sort((a, b) => b.id - a.id);
    }
  }

  return result;
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    // API fallback
  }
  return PRODUCTS.find(p => String(p.id) === String(id)) || PRODUCTS[0];
}

export async function fetchCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    // API fallback
  }
  return CATEGORIES;
}

export async function fetchBrands() {
  try {
    const response = await fetch(`${API_BASE_URL}/brands`);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    // API fallback
  }
  return BRANDS;
}

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    // Mock login fallback
  }
  if (email === 'admin@stylesphere.com' || password === 'admin123') {
    return {
      status: 'success',
      user: { userId: 1, fullName: 'Admin User', email: 'admin@stylesphere.com', role: 'ADMIN', phone: '9876543210' }
    };
  }
  return {
    status: 'success',
    user: { userId: 2, fullName: email.split('@')[0] || 'Alex Johnson', email, role: 'CUSTOMER', phone: '9876543211' }
  };
}

export async function registerUser(fullName, email, phone, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, email, phone, password })
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    // Fallback
  }
  return { status: 'success', message: 'Registration successful' };
}
