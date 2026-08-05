# 🎓 StyleSphere - Master File-by-File Technical Interview & Concept Guide

This master document breaks down **every important file in StyleSphere** (Java Servlets, JDBC DAOs, Utilities, Database Scripts, React Contexts, API Services, Pages, and Components) with technical questions and model answers for college vivas and software engineering job interviews.

---

## 1. Database Files & SQL Architecture

### `database/schema.sql`

#### Q1: Explain the relational database design of StyleSphere. How many tables are present and how are they normalized?
**Answer**:
StyleSphere uses a **15-table normalized schema** in 3rd Normal Form (3NF). Key tables include `users`, `admin`, `addresses`, `brands`, `categories`, `subcategories`, `products`, `product_variants`, `cart`, `cart_items`, `wishlist`, `orders`, `order_items`, `payments`, and `reviews`. 3NF ensures no non-key attribute transitively depends on a primary key.

#### Q2: Why did you use Foreign Key constraints with ON DELETE CASCADE vs RESTRICT?
**Answer**:
- `ON DELETE CASCADE`: Used on dependent items like `cart_items` and `order_items` so that deleting a cart or order automatically cleans up associated items.
- `ON DELETE RESTRICT`: Used on primary entities like `categories` and `brands` to prevent accidental deletion of a brand/category if active products reference it.

#### Q3: What indexes were created in schema.sql and why?
**Answer**:
Indexes were created on high-frequency search and filter columns: `idx_product_cat (category_id)`, `idx_product_brand (brand_id)`, `idx_product_price (price)`, and `idx_user_email (email)`. Indexes use B-Tree data structures to reduce query execution time from O(N) linear scan to O(log N).

---

## 2. Backend Utility & Security Filter Files

### `backend/src/main/java/com/stylesphere/util/DBConnection.java`

#### Q4: Walk through DBConnection.java. How does static driver loading work?
**Answer**:
The static initializer block `static { Class.forName("com.mysql.cj.jdbc.Driver"); }` executes once when JVM loads the class, registering MySQL's JDBC Driver with Java's `DriverManager`. The static method `getConnection()` returns a new active SQL `Connection` instance.

### `backend/src/main/java/com/stylesphere/filter/CorsFilter.java`

#### Q5: What is CORS and how does CorsFilter.java work?
**Answer**:
CORS (Cross-Origin Resource Sharing) is a browser security mechanism blocking cross-origin HTTP requests. `CorsFilter.java` uses `@WebFilter("/*")` to intercept all responses and append headers:
`Access-Control-Allow-Origin: *`, `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`. It also returns HTTP 200 OK for preflight `OPTIONS` requests.

---

## 3. Backend Data Access Object (DAO) Files

### `backend/src/main/java/com/stylesphere/dao/impl/ProductDAOImpl.java`

#### Q6: How does dynamic multi-criteria filtering work in ProductDAOImpl.java?
**Answer**:
`filterProducts(...)` builds a dynamic SQL query string using `StringBuilder`. It appends conditions (category, brand, min/max price, gender) conditionally based on non-null parameters. It orders results dynamically based on `sortBy` parameters (`price_asc`, `price_desc`, `rating`).

### `backend/src/main/java/com/stylesphere/dao/impl/UserDAOImpl.java`

#### Q7: How is BCrypt password hashing implemented in UserDAOImpl.java?
**Answer**:
When registering a user, plain text passwords are encrypted via `BCrypt.hashpw(plainPassword, BCrypt.gensalt())`. During authentication, `BCrypt.checkpw(password, user.getPasswordHash())` compares the user's password input against the stored cryptographic hash.

---

## 4. Backend Servlet Controllers

### `backend/src/main/java/com/stylesphere/servlet/ProductServlet.java`

#### Q8: How does ProductServlet.java process HTTP GET requests and serialize JSON responses?
**Answer**:
`ProductServlet` extends `HttpServlet` and overrides `doGet()`. It parses query parameters from `HttpServletRequest`, calls `productDAO.filterProducts(...)`, packs the product list into a Java Map, and uses Google Gson (`gson.toJson(responseData)`) to output UTF-8 application/json data via `HttpServletResponse.getWriter()`.

### `backend/src/main/java/com/stylesphere/servlet/AuthServlet.java`

#### Q9: How does session management work in AuthServlet.java?
**Answer**:
Upon successful login authentication, `req.getSession(true)` initializes an HTTP Session object and attaches the authenticated user POJO: `session.setAttribute("user", u)`. On logout, `session.invalidate()` destroys the active session state.

---

## 5. Frontend Services & State Management Files

### `frontend/src/services/api.js`

#### Q10: What is the Dual-Layer Architecture in api.js?
**Answer**:
`api.js` uses standard `fetch()` to call Java Servlet backend REST endpoints (`http://localhost:8080/stylesphere-api/api/*`). If Tomcat/MySQL is offline, a `try-catch` block catches network errors and seamlessly falls back to filtering client-side data from `data/products.js`, ensuring zero downtime during frontend demonstrations.

### `frontend/src/context/CartContext.jsx`

#### Q11: How does CartContext.jsx handle shopping cart state, coupon calculations, and persistence?
**Answer**:
- State: `cartItems` state array storing product ID, size, color, quantity, and price.
- Persistence: `useEffect` saves `cartItems` to browser `localStorage` on change.
- Coupon Calculation: Validating code `STUDENT10` applies a 10% discount (`subtotal * 0.10`). `total` is computed dynamically as `Math.max(0, subtotal - discountAmount + shippingFee)`.

### `frontend/src/context/AuthContext.jsx`

#### Q12: How is Role-Based Access Control (RBAC) managed in AuthContext.jsx?
**Answer**:
`AuthContext` exposes `user` state and boolean getter `isAdmin: user?.role === 'ADMIN'`. If `isAdmin` is true, admin navigation controls and access to `AdminDashboard.jsx` are enabled.

---

## 6. Frontend Pages & Components

### `frontend/src/pages/Products.jsx`

#### Q13: How does client-side filtering, sorting, and pagination work in Products.jsx?
**Answer**:
- Filtering: `useMemo` applies search keywords, category ID, brand ID, price slider, and gender tag against `PRODUCTS`.
- Sorting: Array sort methods rearrange items by `price_low`, `price_high`, `rating`, or `newest`.
- Pagination: `totalPages = Math.ceil(filteredProducts.length / itemsPerPage)`. Current page items are extracted via `filteredProducts.slice(start, start + itemsPerPage)`.

### `frontend/src/pages/AdminDashboard.jsx`

#### Q14: Explain the Admin Product CRUD and Order status workflow in AdminDashboard.jsx.
**Answer**:
- Create: Modal form captures product name, brand, category, price, discount, and image URL, adding a new item to product state.
- Read: Renders tabular list of inventory with filter search box.
- Delete: Confirms action and removes item by ID.
- Order Status Update: Dropdown allows updating order status from `PROCESSING` to `SHIPPED` or `DELIVERED`.

### `frontend/src/pages/Checkout.jsx`

#### Q15: How does Checkout.jsx handle address forms and payment method selection?
**Answer**:
Captures user shipping address fields (full name, phone, street, city, postal code) and payment options (UPI, Credit Card, Debit Card, Cash on Delivery). Submitting the form generates a unique order number (e.g. `ORD-2026-89421`), triggers an order confirmation modal, and clears the active shopping cart state upon completion.
