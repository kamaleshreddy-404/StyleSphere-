import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('stylesphere_user');
    return saved ? JSON.parse(saved) : {
      id: 2,
      name: "Alex Johnson",
      email: "alex.j@example.com",
      phone: "+91 98765 43211",
      role: "CUSTOMER", // "CUSTOMER" or "ADMIN"
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
    };
  });

  useEffect(() => {
    localStorage.setItem('stylesphere_user', JSON.stringify(user));
  }, [user]);

  const login = (email, password) => {
    // Check if admin login
    if (email === 'admin@stylesphere.com' || password === 'admin123') {
      const adminUser = {
        id: 1,
        name: "Admin Manager",
        email: "admin@stylesphere.com",
        phone: "+91 98765 43210",
        role: "ADMIN",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
      };
      setUser(adminUser);
      return { success: true, user: adminUser };
    }
    const customerUser = {
      id: Date.now(),
      name: email.split('@')[0].replace('.', ' '),
      email,
      phone: "+91 98765 00000",
      role: "CUSTOMER",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
    };
    setUser(customerUser);
    return { success: true, user: customerUser };
  };

  const register = (name, email, password) => {
    const newUser = {
      id: Date.now(),
      name,
      email,
      phone: "+91 98765 11111",
      role: "CUSTOMER",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
    };
    setUser(newUser);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('stylesphere_user');
  };

  const updateProfile = (updatedData) => {
    setUser(prev => ({ ...prev, ...updatedData }));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile, isAdmin: user?.role === 'ADMIN' }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
