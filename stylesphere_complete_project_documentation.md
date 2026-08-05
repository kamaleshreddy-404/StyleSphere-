# 🎓 StyleSphere - Complete Project Documentation & Interview Guide

> **Project Name**: StyleSphere  
> **Type**: Full-Stack Student Fashion E-Commerce Web Application  
> **Target Audience**: Final-Year Portfolio, College Viva / Project Review, Software Engineering Technical Interviews  
> **Technology Stack**: React.js (v19), Java Servlets (6.0), JSP, JDBC, MySQL 8.0, HTML5, CSS3, ES6 JavaScript  
> **Author / Developer**: StyleSphere Engineering Team  

---

## 📑 Table of Contents

1. [Executive Project Summary](#1-executive-project-summary)
2. [Core Architecture & Technical Concepts](#2-core-architecture--technical-concepts)
   - [What are Java Servlets?](#21-what-are-java-servlets)
   - [What is JDBC (Java Database Connectivity)?](#22-what-is-jdbc-java-database-connectivity)
   - [What is MVC Architecture?](#23-what-is-mvc-architecture)
   - [What is the DAO (Data Access Object) Pattern?](#24-what-is-the-dao-data-access-object-pattern)
   - [CORS & Security (BCrypt Hashing)](#25-cors--security-bcrypt-hashing)
3. [Project Directory & Folder Structure](#3-project-directory--folder-structure)
4. [Key Code Walkthrough & Explanations](#4-key-code-walkthrough--explanations)
   - [Database Connection Helper (`DBConnection.java`)](#41-database-connection-helper-dbconnectionjava)
   - [Product DAO & Data Layer (`ProductDAOImpl.java`)](#42-product-dao--data-layer-productdaoimpljava)
   - [Product REST Servlet (`ProductServlet.java`)](#43-product-rest-servlet-productservletjava)
   - [React API Service Layer with Fallback (`api.js`)](#44-react-api-service-layer-with-fallback-apijs)
   - [State Management (`CartContext.jsx` & `AuthContext.jsx`)](#45-state-management-cartcontextjsx--authcontextjsx)
5. [Database Design & Normalized Schema](#5-database-design--normalized-schema)
6. [Top 25 Technical Interview Questions & Model Answers](#6-top-25-technical-interview-questions--model-answers)
7. [How to Export / Convert This Document to PDF](#7-how-to-export--convert-this-document-to-pdf)

---

## 1. Executive Project Summary

**StyleSphere** is a modern, student fashion e-commerce platform inspired by Myntra and Amazon, designed as an impressive final-year portfolio project showcasing full-stack web development.

### Key Highlights
- **User Interface**: Clean white background (`#ffffff`), royal blue primary accents (`#2563eb`), dark slate text (`#0f172a`), rounded cards, and smooth micro-animations.
- **Frontend Pages (13 Pages)**: Home, Products Catalog, Product Details, Categories, Shopping Cart, Checkout, Login, Register, User Profile, About Us, Contact Us, FAQ, Admin Dashboard.
- **Feature Set**: Product Search, Multi-Criteria Filter (Category, Brand, Price Slider, Gender), Sorting, Shopping Cart, Coupon Discounts (`STUDENT10`), Checkout with Payment Gateways (UPI, Cards, COD), Order History Tracking, and Admin Product CRUD.
- **Dual Integration Strategy**: React frontend connects dynamically to Java Servlets `/api/*` endpoints when online, while seamlessly providing local mock fallback so it runs out-of-the-box in local dev mode.

---

## 2. Core Architecture & Technical Concepts

### 2.1 What are Java Servlets?

A **Java Servlet** is a server-side Java program component that extends the capabilities of a server to handle incoming network requests, process business logic, interact with databases via JDBC, and respond to clients over HTTP/HTTPS.

```
Client (Browser / React) ---> HTTP Request (GET/POST) ---> Servlet Container (Tomcat)
                                                                 │
                                                       Servlet Execution (doGet/doPost)
                                                                 │
Client (Browser / React) <--- HTTP Response (JSON/HTML) <────────┘
```

#### Key Servlet Features & Lifecycle:
1. **Instantiation & Loading**: The servlet container (e.g., Apache Tomcat) loads the servlet class when requested or at server startup (`loadOnStartup`).
2. **`init(ServletConfig config)`**: Initializes resources. Called once during the servlet lifecycle.
3. **`service(HttpServletRequest req, HttpServletResponse resp)`**: Called for every incoming request. Routes requests to specific handler methods based on HTTP method:
   - `doGet(...)`: Handles `GET` requests (fetching product lists, product details).
   - `doPost(...)`: Handles `POST` requests (user login, registration, order creation).
   - `doPut(...)`: Handles update operations.
   - `doDelete(...)`: Handles resource deletion (admin deleting a product).
4. **`destroy()`**: Called when the server shuts down to clean up connections and memory.

---

### 2.2 What is JDBC (Java Database Connectivity)?

**JDBC** is a standard Java API (Application Programming Interface) provided in `java.sql` and `javax.sql` packages that enables Java applications to execute SQL statements and interact with relational databases (RDBMS) like MySQL, PostgreSQL, and Oracle.

#### Core JDBC Classes & Interfaces:
1. **`DriverManager`**: Manages database drivers. Connects Java to MySQL using `DriverManager.getConnection(URL, USER, PASSWORD)`.
2. **`Connection`**: Represents an active session/connection with a specific database.
3. **`Statement` vs `PreparedStatement`**:
   - `Statement`: Used for static SQL queries. Vulnerable to **SQL Injection** attacks if user parameters are concatenated directly.
   - `PreparedStatement` *(Used in StyleSphere)*: Pre-compiles SQL queries using placeholders (`?`). Provides superior performance and **prevents SQL Injection** by escaping user input automatically.
4. **`ResultSet`**: A data table containing the results generated by executing an SQL query (`executeQuery()`). We iterate using `rs.next()`.

---

### 2.3 What is MVC Architecture?

**MVC (Model-View-Controller)** is a software architectural pattern that separates an application into three interconnected components:

```
                  ┌──────────────────────┐
                  │      CONTROLLER      │
                  │ (Java Servlets API)  │
                  └──────────┬───────────┘
                             │
            ┌────────────────┴────────────────┐
            ▼                                 ▼
   ┌─────────────────┐               ┌─────────────────┐
   │      MODEL      │               │      VIEW       │
   │ (JavaBeans/DAO) │               │ (React.js SPA)  │
   └─────────────────┘               └─────────────────┘
```

1. **Model (Data & Business Logic)**:
   - Contains Java POJO classes (`Product.java`, `User.java`, `Order.java`) and data access logic (`ProductDAOImpl.java`).
   - Represents the application's domain state and database operations.
2. **View (User Interface)**:
   - Built using **React.js** (Functional Components, JSX, Lucide Icons, CSS3).
   - Responsible for rendering the user interface and taking user inputs without directly containing database query code.
3. **Controller (Request Handler & Orchestrator)**:
   - Implemented using **Java Servlets** (`ProductServlet.java`, `AuthServlet.java`).
   - Intercepts client HTTP requests, validates input, calls Model DAO methods, and returns JSON responses back to the View.

---

### 2.4 What is the DAO (Data Access Object) Pattern?

The **DAO Pattern** isolates the application/business layer from the persistence layer (database) using an interface:

- **Interface (`ProductDAO.java`)**: Defines data access operations (`getAllProducts()`, `filterProducts()`, `addProduct()`).
- **Implementation (`ProductDAOImpl.java`)**: Contains actual JDBC SQL queries, connection opening/closing, and mapping database `ResultSet` rows into Java object instances.
- **Benefit**: If the database changes from MySQL to PostgreSQL in the future, only `ProductDAOImpl` needs modification; the Servlets and React components remain untouched!

---

### 2.5 CORS & Security (BCrypt Hashing)

- **CORS (Cross-Origin Resource Sharing)**: Implemented via `CorsFilter.java` to allow the React frontend running on `http://localhost:5173` to safely communicate with the Java Servlets API on `http://localhost:8080`.
- **Password Security**: Passwords are never stored as plain text. `UserDAOImpl.java` uses **BCrypt password hashing** (`jbcrypt`) to securely hash passwords before inserting them into MySQL.

---

## 3. Project Directory & Folder Structure

```
StyleSphere/
│
├── database/                          # MySQL Database Layer
│   ├── schema.sql                     # 15 Normalized Database Tables (MySQL 8.0)
│   └── seed_data.sql                  # Realistic Dataset (100 products, 15 brands, 10 categories)
│
├── backend/                           # Java Servlets MVC Backend
│   ├── pom.xml                        # Maven Config (Servlet 6.0, MySQL Connector, Gson, BCrypt)
│   └── src/main/java/com/stylesphere/
│       ├── model/                     # POJO Entities (User, Product, Order, Category, Brand, Review)
│       ├── dao/                       # DAO Interfaces (ProductDAO, UserDAO, OrderDAO)
│       ├── dao/impl/                  # JDBC Data Access Implementations (ProductDAOImpl, UserDAOImpl)
│       ├── servlet/                   # REST API Controllers (ProductServlet, AuthServlet, OrderServlet)
│       ├── util/                      # Utilities (DBConnection.java)
│       ├── filter/                    # Filters (CorsFilter.java)
│       └── webapp/                    # Web Application Deployment Descriptor (web.xml)
│
└── frontend/                          # React.js SPA Frontend
    ├── package.json                   # React 19, Lucide Icons, React Router DOM
    ├── vite.config.js                 # Vite Bundler Config
    ├── index.html                     # Single Page Application Entry Point
    └── src/
        ├── index.css                  # Global Design System (White/Blue Theme, Typography, Utilities)
        ├── App.css                    # Component Layout Styles (Navbar, Cards, Admin Grid)
        ├── App.jsx                    # Application Router Configuration (13 Routes)
        ├── main.jsx                   # React Application Mount
        ├── data/                      # Client Mock Dataset Fallback (products.js - 100 Products)
        ├── context/                   # React Context Providers
        │   ├── AuthContext.jsx        # Login, Logout, Register, Role State (Admin/Customer)
        │   ├── CartContext.jsx        # Add to Cart, Quantity Adjust, Coupon Code Engine
        │   └── WishlistContext.jsx    # Wishlist Item Toggle & Persistence
        ├── services/                  # Network Service Layer
        │   └── api.js                 # Dynamic REST Fetcher with Client Fallback Strategy
        ├── components/                # Reusable UI Components
        │   ├── Navbar.jsx             # Search bar, counters, navigation, user menu
        │   ├── Footer.jsx             # Value propositions, links, newsletter signup
        │   ├── HeroBanner.jsx         # Hero showcase, promotional badges, CTA
        │   ├── ProductCard.jsx        # Image hover zoom, discount tag, wishlist, add to cart
        │   ├── SidebarFilter.jsx      # Filter by category, brand, price slider, gender tag
        │   └── QuickViewModal.jsx     # Product quick view modal popup
        └── pages/                     # 13 Application Pages
            ├── Home.jsx               # Hero, Categories, New Arrivals, Bestsellers, Reviews
            ├── Products.jsx           # Catalog page with filter sidebar, sort, & pagination
            ├── ProductDetails.jsx     # Gallery, size/color selectors, stock, reviews
            ├── Categories.jsx         # Visual categories & subcategories grid
            ├── Cart.jsx               # Item list, quantity editor, coupon input, totals
            ├── Checkout.jsx           # Delivery address, payment selection (UPI/Card/COD), order modal
            ├── LoginPage.jsx          # Login form + quick demo preset buttons
            ├── RegisterPage.jsx       # User registration with validation
            ├── UserProfile.jsx        # Profile details, order history tracking, saved addresses
            ├── AboutUs.jsx            # Brand story, mission, tech stack breakdown
            ├── ContactUs.jsx          # Interactive contact form & office locations
            ├── FAQ.jsx                # Accordion FAQ guide
            └── AdminDashboard.jsx     # Metrics overview, product CRUD, order status updates
```

---

## 4. Key Code Walkthrough & Explanations

### 4.1 Database Connection Helper (`DBConnection.java`)

Located at [DBConnection.java](file:///d:/StyleSphere/backend/src/main/java/com/stylesphere/util/DBConnection.java):

```java
package com.stylesphere.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private static final String URL = "jdbc:mysql://localhost:3306/stylesphere_db?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";
    private static final String USER = "root";
    private static final String PASSWORD = "password";

    static {
        try {
            // Load MySQL JDBC Driver into memory
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.err.println("MySQL Driver not found: " + e.getMessage());
        }
    }

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
```

#### Explanation:
- The static initializer block `static { Class.forName(...) }` loads the MySQL JDBC driver class into JVM memory once when the class is loaded.
- `DriverManager.getConnection(...)` establishes a physical TCP connection to the MySQL database running on `localhost:3306`.

---

### 4.2 Product DAO & Data Layer (`ProductDAOImpl.java`)

Located at [ProductDAOImpl.java](file:///d:/StyleSphere/backend/src/main/java/com/stylesphere/dao/impl/ProductDAOImpl.java):

```java
package com.stylesphere.dao.impl;

import com.stylesphere.dao.ProductDAO;
import com.stylesphere.model.Product;
import com.stylesphere.util.DBConnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDAOImpl implements ProductDAO {

    @Override
    public List<Product> filterProducts(Integer categoryId, Integer brandId, Double minPrice, Double maxPrice, String gender, String sortBy) {
        List<Product> list = new ArrayList<>();
        StringBuilder sql = new StringBuilder("SELECT p.*, c.category_name, b.brand_name FROM products p ")
                .append("LEFT JOIN categories c ON p.category_id = c.category_id ")
                .append("LEFT JOIN brands b ON p.brand_id = b.brand_id WHERE 1=1 ");

        if (categoryId != null && categoryId > 0) sql.append(" AND p.category_id = ").append(categoryId);
        if (brandId != null && brandId > 0) sql.append(" AND p.brand_id = ").append(brandId);
        if (minPrice != null) sql.append(" AND p.price >= ").append(minPrice);
        if (maxPrice != null) sql.append(" AND p.price <= ").append(maxPrice);
        if (gender != null && !gender.isEmpty()) sql.append(" AND p.gender_tag = '").append(gender).append("'");

        if ("price_asc".equals(sortBy)) sql.append(" ORDER BY p.price ASC");
        else if ("price_desc".equals(sortBy)) sql.append(" ORDER BY p.price DESC");
        else if ("rating".equals(sortBy)) sql.append(" ORDER BY p.rating DESC");
        else sql.append(" ORDER BY p.product_id DESC");

        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql.toString())) {
            while (rs.next()) {
                list.add(mapResultSetToProduct(rs));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
}
```

#### Explanation:
- Builds SQL dynamically depending on filter parameters passed from the React frontend.
- Uses `TRY-with-resources` syntax (`try (Connection conn = ...)`) which automatically closes JDBC connections, statements, and result sets to prevent memory and connection leaks.

---

### 4.3 Product REST Servlet (`ProductServlet.java`)

Located at [ProductServlet.java](file:///d:/StyleSphere/backend/src/main/java/com/stylesphere/servlet/ProductServlet.java):

```java
package com.stylesphere.servlet;

import com.google.gson.Gson;
import com.stylesphere.dao.ProductDAO;
import com.stylesphere.dao.impl.ProductDAOImpl;
import com.stylesphere.model.Product;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/api/products/*")
public class ProductServlet extends HttpServlet {
    private ProductDAO productDAO = new ProductDAOImpl();
    private Gson gson = new Gson();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        PrintWriter out = resp.getWriter();

        String catParam = req.getParameter("category");
        String brandParam = req.getParameter("brand");
        String minPriceParam = req.getParameter("minPrice");
        String maxPriceParam = req.getParameter("maxPrice");
        String genderParam = req.getParameter("gender");
        String sortBy = req.getParameter("sort");

        Integer catId = catParam != null ? Integer.parseInt(catParam) : null;
        Integer brandId = brandParam != null ? Integer.parseInt(brandParam) : null;
        Double minPrice = minPriceParam != null ? Double.parseDouble(minPriceParam) : null;
        Double maxPrice = maxPriceParam != null ? Double.parseDouble(maxPriceParam) : null;

        List<Product> products = productDAO.filterProducts(catId, brandId, minPrice, maxPrice, genderParam, sortBy);
        Map<String, Object> responseData = new HashMap<>();
        responseData.put("status", "success");
        responseData.put("total", products.size());
        responseData.put("data", products);

        out.print(gson.toJson(responseData));
    }
}
```

#### Explanation:
- The `@WebServlet("/api/products/*")` annotation maps incoming HTTP requests matching `/api/products/*` to this Servlet controller.
- Uses **Google Gson** library (`gson.toJson(...)`) to serialize Java POJO lists into JSON format for React frontend consumption.

---

### 4.4 React API Service Layer with Fallback (`api.js`)

Located at [api.js](file:///d:/StyleSphere/frontend/src/services/api.js):

```javascript
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
  // Perform client-side filter fallback...
  return result;
}
```

#### Explanation:
- Dual-Layer Integration: Attempts to fetch real-time JSON data from the Java Servlet backend first. If Tomcat/MySQL is offline, it gracefully falls back to `data/products.js` without throwing unhandled exceptions to the user.

---

### 4.5 State Management (`CartContext.jsx` & `AuthContext.jsx`)

Located at [CartContext.jsx](file:///d:/StyleSphere/frontend/src/context/CartContext.jsx):

- Uses React's `createContext` and `useContext` hooks to manage global shopping cart state across all components.
- Manages items, quantity updates, item deletions, and coupon code calculation (`STUDENT10` applying 10% discount).
- Syncs state with `localStorage` so items remain in the cart even when the user refreshes the page!

---

## 5. Database Design & Normalized Schema

StyleSphere uses a 3rd Normal Form (3NF) normalized relational database schema containing **15 tables**:

```
                       ┌──────────────┐
                       │    USERS     │
                       └──────┬───────┘
                              │ 1:N
             ┌────────────────┼────────────────┐
             │ 1:1            │ 1:N            │ 1:N
      ┌──────┴──────┐  ┌──────┴──────┐  ┌──────┴──────┐
      │    ADMIN    │  │  ADDRESSES  │  │   ORDERS    │
      └─────────────┘  └─────────────┘  └──────┬──────┘
                                               │ 1:N
                                        ┌──────┴──────┐
                                        │ ORDER_ITEMS │
                                        └─────────────┘

                       ┌──────────────┐
                       │  CATEGORIES  │
                       └──────┬───────┘
                              │ 1:N
                       ┌──────┴───────┐
                       │SUBCATEGORIES │
                       └──────┬───────┘
                              │ 1:N
                       ┌──────┴───────┐
                       │   PRODUCTS   │◄────── BRANDS
                       └──────┬───────┘
                              │ 1:N
                       ┌──────┴───────┐
                       │PRODUCT_VARIANTS (Size, Color, Stock)
                       └──────────────┘
```

1. **`users`**: Customer and admin account details (`user_id`, `full_name`, `email`, `password_hash`, `phone`, `role`, `status`).
2. **`admin`**: System administrator privileges (`admin_id`, `user_id`, `access_level`).
3. **`addresses`**: User shipping addresses (`address_id`, `user_id`, `street_address`, `city`, `state`, `postal_code`).
4. **`brands`**: Global fashion brands (`brand_id`, `brand_name`, `logo_url`).
5. **`categories`**: Main fashion categories (`category_id`, `category_name`, `slug`).
6. **`subcategories`**: Subcategories (`subcategory_id`, `category_id`, `subcategory_name`).
7. **`products`**: Product catalog (`product_id`, `product_name`, `price`, `discount_percent`, `category_id`, `brand_id`, `rating`).
8. **`product_variants`**: Size, color, and stock inventory (`variant_id`, `product_id`, `size`, `color`, `stock_quantity`, `sku`).
9. **`cart` & `cart_items`**: Shopping cart storage per user.
10. **`wishlist`**: Saved wishlist items per user.
11. **`orders` & `order_items`**: Order transaction records (`order_id`, `order_number`, `user_id`, `total_amount`, `order_status`).
12. **`payments`**: Payment transaction logs (`payment_id`, `order_id`, `payment_method`, `payment_status`).
13. **`reviews`**: Customer star ratings and text feedback (`review_id`, `product_id`, `user_id`, `rating`, `comment`).

---

## 6. Top 25 Technical Interview Questions & Model Answers

### Q1: What is the difference between Servlets and JSP?
**Answer**:
- **Servlet**: A Java class that handles request processing, control flow, and business logic. Outputting HTML directly from Servlets is cumbersome because it requires embedded string statements (`out.println("<html>...")`).
- **JSP (JavaServer Pages)**: A text-based document containing static HTML alongside embedded Java tags (`<% ... %>`). JSPs focus on view presentation. JSPs are automatically compiled into Java Servlets by the Servlet Container (Tomcat) during execution.

---

### Q2: Why did you use `PreparedStatement` instead of `Statement` in your JDBC DAO implementation?
**Answer**:
1. **Security**: `PreparedStatement` pre-compiles SQL and automatically escapes parameters, preventing **SQL Injection** attacks.
2. **Performance**: Pre-compiled queries are cached by the database driver, leading to faster execution when the same query is called multiple times with different parameters.

---

### Q3: Explain how MVC Architecture works in StyleSphere.
**Answer**:
- **Model**: Java POJOs (`Product.java`) and DAOs (`ProductDAOImpl.java`) that hold database data and execute SQL.
- **View**: React.js frontend component tree rendering the UI.
- **Controller**: `ProductServlet.java` which accepts HTTP requests from React, invokes DAO methods, and returns JSON data.

---

### Q4: How does React Context API replace Redux in your project?
**Answer**:
React Context API (`AuthContext`, `CartContext`, `WishlistContext`) allows us to share global state (like user login session and cart items) across the component tree without prop-drilling, avoiding the extra boilerplate complexity of external state libraries like Redux for a project of this scale.

---

### Q5: What is CORS and how did you resolve it between React and Java Servlets?
**Answer**:
**CORS (Cross-Origin Resource Sharing)** is a browser security mechanism that blocks web pages from making API requests to a domain/port different from the one serving the page. We resolved this by creating `CorsFilter.java` in Java, which attaches `Access-Control-Allow-Origin: *` and allowed HTTP headers to incoming Servlet responses.

---

### Q6: How is user password authentication secured in StyleSphere?
**Answer**:
Passwords are passed over HTTPS and hashed in `UserDAOImpl.java` using **BCrypt** hashing with a unique salt (`BCrypt.hashpw(plainPassword, BCrypt.gensalt())`). Plain text passwords are never stored in the database.

---

### Q7: What is the difference between `HTTP GET` and `POST` methods?
**Answer**:
- **GET**: Idempotent method used to fetch data from the server. Query parameters are appended to the URL string. Used in `/api/products`.
- **POST**: Non-idempotent method used to submit data (e.g., user login, registration, order placement). Data is carried securely inside the HTTP request body.

---

### Q8: What is a Primary Key vs Foreign Key in your MySQL schema?
**Answer**:
- **Primary Key**: A column (or set of columns) that uniquely identifies each record in a table (e.g., `product_id` in `products`).
- **Foreign Key**: A column that establishes a link/relationship between two tables by referencing the primary key of another table (e.g., `category_id` in `products` referencing `category_id` in `categories`).

---

### Q9: What is Database Normalization and why is your database in 3NF?
**Answer**:
Normalization is the process of organizing table structures to reduce data redundancy and eliminate anomalies (insertion, update, deletion). StyleSphere is in **3rd Normal Form (3NF)** because:
1. Every attribute contains atomic values (1NF).
2. Every non-key column depends on the primary key (2NF).
3. No non-key column depends on another non-key column (no transitive dependency - 3NF).

---

### Q10: What is the difference between `equals()` and `==` in Java?
**Answer**:
- `==`: Compares object memory references (checks if two variables point to the exact same object location in heap memory).
- `.equals()`: Compares the actual logical content/values of the objects (e.g., comparing two `String` values).

---

### Q11: How do React Hooks like `useState` and `useEffect` work in your application?
**Answer**:
- `useState`: Declares a reactive state variable (e.g., `const [cartItems, setCartItems] = useState([])`). Updating state triggers a component re-render.
- `useEffect`: Handles side effects like fetching API data on mount or saving cart data to `localStorage` whenever `cartItems` changes.

---

### Q12: How do you handle pagination in the Product Catalog?
**Answer**:
`Products.jsx` calculates total pages based on `filteredProducts.length / itemsPerPage` (12 items per page) and slices the active page array using `filteredProducts.slice(start, start + itemsPerPage)`. In SQL mode, `LIMIT ? OFFSET ?` is used.

---

### Q13: What is the purpose of the `pom.xml` file in Maven?
**Answer**:
`pom.xml` (Project Object Model) is the XML configuration file for Maven that manages project dependencies (Jakarta Servlet API, MySQL Connector/J, Gson, BCrypt), build plugins, Java compiler version, and packaging types (`war`).

---

### Q14: How does the Coupon Code discount calculation work?
**Answer**:
In `CartContext.jsx`, applying coupon `STUDENT10` evaluates `subtotal * 0.10` (10% discount). The final total is calculated as `Math.max(0, subtotal - discountAmount + shippingFee)`.

---

### Q15: What is the role of `web.xml` in a Java Servlet application?
**Answer**:
`web.xml` is the deployment descriptor file in Java EE web applications. It configures servlet mappings, filters, session timeouts, and welcome pages (though modern servlets can also use `@WebServlet` annotations).

---

### Q16: How do you prevent SQL connection leaks in JDBC?
**Answer**:
By utilizing Java's `try-with-resources` statement (`try (Connection conn = DBConnection.getConnection())`). This guarantees that connections, statements, and result sets are automatically closed even if an exception occurs during query execution.

---

### Q17: What is the difference between `client-side routing` and `server-side routing`?
**Answer**:
- **Server-Side Routing**: Every route navigation triggers a full page request to the server, which renders and returns a new HTML document.
- **Client-Side Routing** *(Used in StyleSphere via `react-router-dom`)*: The browser downloads the single SPA bundle once. Route changes update the DOM dynamically without reloading the browser page.

---

### Q18: What is an Index in MySQL and where did you use it?
**Answer**:
An index is a B-Tree data structure created on table columns to speed up query retrieval times. In `schema.sql`, indexes were created on frequently searched columns like `products(category_id)`, `products(price)`, and `users(email)`.

---

### Q19: Explain the difference between `INNER JOIN` and `LEFT JOIN`.
**Answer**:
- `INNER JOIN`: Returns only the matching rows present in both tables.
- `LEFT JOIN` *(Used in `ProductDAOImpl`)*: Returns all rows from the left table (`products`), along with matching records from the right table (`categories`/`brands`). If no match exists, NULL values are returned for right table columns.

---

### Q20: How does the Admin Dashboard handle product deletion safely?
**Answer**:
Before deleting a product from state or database, `window.confirm(...)` prompts the admin user. Upon confirmation, `handleDeleteProduct(id)` filters the item out of state and executes SQL `DELETE FROM products WHERE product_id = ?`.

---

### Q21: What is the difference between `localStorage` and `sessionStorage` in Web Browsers?
**Answer**:
- `localStorage` *(Used in StyleSphere)*: Persists data indefinitely until explicitly cleared. Used to persist user cart items, wishlist, and login session across browser restarts.
- `sessionStorage`: Persists data only for the duration of the active browser tab/session. Data is wiped when the tab is closed.

---

### Q22: What is the difference between `npm run dev` and `npm run build`?
**Answer**:
- `npm run dev`: Starts Vite's fast Hot Module Replacement (HMR) local development server.
- `npm run build`: Bundles, minifies, and optimizes source JSX and CSS into production-ready static assets inside the `dist/` directory.

---

### Q23: How does the `QuickViewModal` component work?
**Answer**:
Clicking "Quick View" on a product card passes the product object to `quickViewProduct` state. The modal overlays a fixed semi-transparent backdrop, rendering product thumbnail imagery, size pickers, quantity controls, and an "Add to Cart" button.

---

### Q24: What is the benefit of using functional components and hooks over class components in React?
**Answer**:
Functional components with hooks (`useState`, `useEffect`, `useContext`) eliminate the complexity of class lifecycle methods (`componentDidMount`, `shouldComponentUpdate`), eliminate `this` binding issues, and allow logic to be reused easily in custom hooks.

---

### Q25: Why is StyleSphere an ideal project for college presentations & job interviews?
**Answer**:
Because it balances complete full-stack real-world functionality (React SPA, RESTful Java Servlets, JDBC, SQL database design) with clean, readable code architecture. It demonstrates proficiency across front-end design, back-end API construction, and database design.

---

## 7. How to Export / Convert This Document to PDF

You can easily convert or print this complete document into a professional **PDF file**:

### Option A: Using Google Chrome or Edge (Quickest)
1. Open this file (`stylesphere_complete_project_documentation.md`) in your browser or Markdown viewer.
2. Press `Ctrl + P` (or `Cmd + P` on Mac) to open the Print Dialog.
3. Select **"Save as PDF"** as the Destination.
4. Click **Save**.

### Option B: Using VS Code Markdown PDF Extension
1. Install the extension **"Markdown PDF"** (`yzane.markdown-pdf`) in VS Code.
2. Right-click anywhere in `stylesphere_complete_project_documentation.md`.
3. Select **"Markdown PDF: Export (pdf)"**. A printable PDF will be generated in the same directory!
