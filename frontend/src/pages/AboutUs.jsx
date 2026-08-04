import React from 'react';
import { Code, Database, Server, Sparkles, Shield, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="about-page section-padding">
      <div className="container">
        {/* Banner */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
          <span className="badge-pill">STUDENT PORTFOLIO PROJECT</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 1rem' }}>
            About StyleSphere
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6 }}>
            StyleSphere is a modern full-stack fashion e-commerce web platform designed and built to demonstrate clean React component development, Java MVC web servlets, JDBC data access patterns, and normalized MySQL relational database design.
          </p>
        </div>

        {/* Core Stack Architecture Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <Code size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>React.js Frontend</h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6 }}>
              Built with functional components, custom hooks, React Router v6, context state management, and modern responsive CSS layout system.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <Server size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Java Servlets MVC</h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6 }}>
              Backend processing structured in com.stylesphere Java packages implementing Servlet controllers, DAO interface abstraction, and session filters.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <Database size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>MySQL Relational DB</h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6 }}>
              Fully normalized schema containing 15 SQL tables with primary keys, foreign key constraints, indexes, and a seed dataset of 100 products.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#ffffff', borderRadius: '16px', padding: '3.5rem 3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Designed for Academic & Interview Excellence</h2>
            <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Every feature in StyleSphere is crafted to be modular, readable, and easy to explain during technical interviews and college project presentations.
            </p>
            <ul style={{ color: '#93c5fd', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>✓ Full E-Commerce Flow: Browse → Filter → Cart → Checkout</li>
              <li>✓ Admin Dashboard with Product CRUD management</li>
              <li>✓ Clean normalized MySQL schema scripts</li>
            </ul>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Team"
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
