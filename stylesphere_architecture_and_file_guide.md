# 📐 StyleSphere - Project Folder Integration Diagram & File Guide

This document presents the **Integration Architecture Diagram (IN Diagram)** showing how StyleSphere's three core folders (`frontend/`, `backend/`, and `database/`) connect and interact, followed by detailed explanations of every key file in each directory.

---

## 1. Integration Architecture Diagram (IN Diagram)

```
┌──────────────────────────┐                   ┌──────────────────────────┐                   ┌──────────────────────────┐
│       📁 frontend/       │                   │       📁 backend/        │                   │       📁 database/       │
│                          │                   │                          │                   │                          │
│  React 19 SPA Layer      │ ◄───────────────► │  Java Servlets MVC Layer │ ◄───────────────► │  MySQL 8.0 Relational    │
│  • 13 Pages & Components │   HTTP REST JSON  │  • Servlet Controllers   │   JDBC SQL Query │  • 15 Normalized Tables  │
│  • Context API           │                   │  • JDBC DAOs & Models    │                   │  • 100 Products Dataset  │
│  • services/api.js       │                   │  • CorsFilter.java       │                   │  • PK/FK & Indexes       │
└──────────────────────────┘                   └──────────────────────────┘                   └──────────────────────────┘
```

---

## 2. 📁 database/ - Database Files Explanation

- **`database/schema.sql`**: Defines the normalized MySQL relational database structure. Creates 15 3NF tables (`users`, `admin`, `addresses`, `brands`, `categories`, `subcategories`, `products`, `product_variants`, `cart`, `cart_items`, `wishlist`, `orders`, `order_items`, `payments`, `reviews`). Enforces Primary Keys, Foreign Keys, cascading rules, and performance indexes.
- **`database/seed_data.sql`**: Populates initial mock dataset into MySQL. Inserts 10 Main Categories, 30 Subcategories, 15 Brands, 100 Products with prices, discounts, ratings, variants, user accounts, and reviews.

---

## 3. 📁 backend/ - Java MVC Backend Files Explanation

- **`backend/pom.xml`**: Maven configuration declaring Jakarta Servlet API 6.0, MySQL Connector/J 8.3, Google Gson 2.10 (JSON parsing), jbcrypt 0.4 (password security), and WAR build plugins.
- **`backend/.../util/DBConnection.java`**: JDBC Connection Factory Utility loading driver via `Class.forName("com.mysql.cj.jdbc.Driver")` and opening connection sessions via `DriverManager.getConnection(...)`.
- **`backend/.../filter/CorsFilter.java`**: Cross-Origin Resource Sharing Security Filter appending `Access-Control-Allow-Origin: *` headers for React client integration.
- **`backend/.../dao/impl/ProductDAOImpl.java`**: Data Access Object using `PreparedStatement` to execute multi-criteria filtering, sorting, pagination, and admin CRUD SQL operations.
- **`backend/.../dao/impl/UserDAOImpl.java`**: User Authentication DAO securing passwords with BCrypt encryption (`BCrypt.hashpw(...)`).
- **`backend/.../servlet/ProductServlet.java`**: REST Controller mapped to `@WebServlet("/api/products/*")`, overriding `doGet()` to parse parameters and serialize JSON data to React.
- **`backend/.../servlet/AuthServlet.java`**: Authentication Controller mapped to `/api/auth/*` managing login, registration, and HTTP session state (`req.getSession(true)`).

---

## 4. 📁 frontend/ - React.js Frontend Files Explanation

- **`frontend/src/App.jsx`**: Main router component configuring 13 client routes using `react-router-dom` (`Routes`, `Route`), wrapping in Context providers, and rendering persistent `Navbar` and `Footer`.
- **`frontend/src/services/api.js`**: Network Service Layer fetching JSON from Java Servlets, with try-catch fallback to local `data/products.js` if offline.
- **`frontend/src/context/CartContext.jsx`**: Global Cart State managing item additions, quantity modifications, `localStorage` persistence, and coupon validation (`STUDENT10` applying 10% discount).
- **`frontend/src/pages/Products.jsx`**: Product Catalog Page combining search, multi-criteria sidebar filters, array sorting, responsive grid, and pagination.
- **`frontend/src/pages/Checkout.jsx`**: Order Checkout Page managing delivery address forms, payment gateway selection (UPI, Credit/Debit Card, COD), order summary, and confirmation modals.
- **`frontend/src/pages/AdminDashboard.jsx`**: System Admin Panel featuring sales/order metric cards, product CRUD (Add, Edit, Delete), and order status updates (`PROCESSING` -> `SHIPPED` -> `DELIVERED`).
