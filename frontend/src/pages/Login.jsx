import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('alex.j@example.com');
  const [password, setPassword] = useState('password123');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const res = login(email, password);
      if (res.user.role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    }
  };

  const setAdminDemo = () => {
    setEmail('admin@stylesphere.com');
    setPassword('admin123');
  };

  const setCustomerDemo = () => {
    setEmail('alex.j@example.com');
    setPassword('password123');
  };

  return (
    <div className="login-page section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '440px' }}>
        <div style={{
          background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px',
          padding: '2.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
              Welcome Back
            </h1>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Sign in to your StyleSphere account</p>
          </div>

          {/* Demo Login Quick Switches for Interviewer Testing */}
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '0.8rem', marginBottom: '1.5rem', fontSize: '0.8rem' }}>
            <div style={{ fontWeight: 700, color: '#2563eb', marginBottom: '0.4rem' }}>💡 Quick Demo Credentials:</div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button type="button" onClick={setCustomerDemo} className="btn btn-outline btn-sm" style={{ background: '#fff', fontSize: '0.75rem' }}>Customer Demo</button>
              <button type="button" onClick={setAdminDemo} className="btn btn-primary btn-sm" style={{ fontSize: '0.75rem' }}>Admin Demo</button>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>EMAIL ADDRESS</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 0.8rem 0.65rem 2.4rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>PASSWORD</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 0.8rem 0.65rem 2.4rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem', fontSize: '0.95rem' }}>
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.88rem', color: '#64748b' }}>
            Don't have an account? <Link to="/register" style={{ color: '#2563eb', fontWeight: 700 }}>Register Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
