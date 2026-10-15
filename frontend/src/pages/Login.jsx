import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, ArrowRight, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import Logo from '../components/Logo';

export default function Login() {
  const [email, setEmail] = useState('alex.j@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const [demoNotice, setDemoNotice] = useState('');
  const [selectedDemo, setSelectedDemo] = useState('customer');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setDemoNotice('');

    if (!email || !password) {
      setError('Please enter both email address and password.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const res = login(email, password);
      if (res && res.success) {
        if (res.user.role === 'ADMIN') {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      } else {
        setError('Invalid login credentials. Please check your email and password.');
      }
    } catch (err) {
      setError('An error occurred during authentication. Please try again.');
    }
  };

  const setAdminDemo = () => {
    setSelectedDemo('admin');
    setEmail('admin@stylesphere.com');
    setPassword('admin123');
    setError('');
    setDemoNotice('Loaded Admin Demo Credentials! Click "Sign In" to access Admin Dashboard.');
  };

  const setCustomerDemo = () => {
    setSelectedDemo('customer');
    setEmail('alex.j@example.com');
    setPassword('password123');
    setError('');
    setDemoNotice('Loaded Customer Demo Credentials! Click "Sign In" to proceed.');
  };

  return (
    <div className="login-page section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '440px' }}>
        <div style={{
          background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px',
          padding: '2.5rem', boxShadow: 'var(--shadow-lg)', transition: 'background-color 0.3s ease, border-color 0.3s ease'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Logo size="md" />
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
              Welcome Back
            </h1>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Sign in to your StyleSphere account</p>
          </div>

          {/* Quick Demo Credentials Switcher */}
          <div style={{
            background: 'var(--primary-light)', border: '1px solid var(--border-color)',
            borderRadius: '10px', padding: '0.9rem', marginBottom: '1.5rem', fontSize: '0.8rem'
          }}>
            <div style={{ fontWeight: 700, color: '#2563eb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Sparkles size={14} /> Quick Demo Credentials:
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={setCustomerDemo}
                style={{
                  flex: 1,
                  fontSize: '0.8rem',
                  padding: '0.5rem 0.6rem',
                  borderRadius: '6px',
                  fontWeight: selectedDemo === 'customer' ? 700 : 500,
                  backgroundColor: selectedDemo === 'customer' ? '#2563eb' : '#ffffff',
                  color: selectedDemo === 'customer' ? '#ffffff' : '#475569',
                  border: `1px solid ${selectedDemo === 'customer' ? '#2563eb' : '#cbd5e1'}`,
                  boxShadow: selectedDemo === 'customer' ? '0 2px 6px rgba(37,99,235,0.25)' : 'none',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease'
                }}
              >
                Customer Demo
              </button>
              <button
                type="button"
                onClick={setAdminDemo}
                style={{
                  flex: 1,
                  fontSize: '0.8rem',
                  padding: '0.5rem 0.6rem',
                  borderRadius: '6px',
                  fontWeight: selectedDemo === 'admin' ? 700 : 500,
                  backgroundColor: selectedDemo === 'admin' ? '#2563eb' : '#ffffff',
                  color: selectedDemo === 'admin' ? '#ffffff' : '#475569',
                  border: `1px solid ${selectedDemo === 'admin' ? '#2563eb' : '#cbd5e1'}`,
                  boxShadow: selectedDemo === 'admin' ? '0 2px 6px rgba(37,99,255,0.25)' : 'none',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease'
                }}
              >
                Admin Demo
              </button>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div style={{
              background: '#fef2f2', border: '1px solid #fca5a5', color: '#dc2626',
              borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1.25rem',
              fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <div>{error}</div>
            </div>
          )}

          {/* Demo Choice Alert Banner */}
          {demoNotice && !error && (
            <div style={{
              background: '#f0fdf4', border: '1px solid #86efac', color: '#16a34a',
              borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1.25rem',
              fontSize: '0.83rem', display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
              <div>{demoNotice}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--dark)', display: 'block', marginBottom: '0.4rem' }}>EMAIL ADDRESS</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%', padding: '0.65rem 0.8rem 0.65rem 2.4rem',
                    border: '1px solid var(--border-color)', borderRadius: '8px',
                    fontSize: '0.9rem', background: 'var(--card-bg)', color: 'var(--dark)'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--dark)', display: 'block', marginBottom: '0.4rem' }}>PASSWORD</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%', padding: '0.65rem 0.8rem 0.65rem 2.4rem',
                    border: '1px solid var(--border-color)', borderRadius: '8px',
                    fontSize: '0.9rem', background: 'var(--card-bg)', color: 'var(--dark)'
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem', fontSize: '0.95rem', marginTop: '0.4rem' }}>
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Don't have an account? <Link to="/register" style={{ color: '#2563eb', fontWeight: 700 }}>Register Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
