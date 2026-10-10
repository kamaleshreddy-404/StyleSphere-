import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, ArrowRight, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('alex.j@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const [demoNotice, setDemoNotice] = useState('');
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
    setEmail('admin@stylesphere.com');
    setPassword('admin123');
    setError('');
    setDemoNotice('Loaded Admin Demo Credentials! Click "Sign In" to access Admin Dashboard.');
  };

  const setCustomerDemo = () => {
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
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '0.4rem' }}>
              Welcome Back
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Sign in to your StyleSphere account</p>
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
                className="btn btn-outline btn-sm"
                style={{ flex: 1, fontSize: '0.78rem', padding: '0.4rem 0.6rem' }}
              >
                Customer Demo
              </button>
              <button
                type="button"
                onClick={setAdminDemo}
                className="btn btn-primary btn-sm"
                style={{ flex: 1, fontSize: '0.78rem', padding: '0.4rem 0.6rem' }}
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
