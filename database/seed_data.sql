-- ============================================================
-- StyleSphere - Sample Seed Dataset
-- Includes: Users, Admins, 15 Brands, 10 Categories, 30 Subcategories,
-- 110+ Realistic Products (Minimum 3+ Handcrafted Products Per Brand)
-- ============================================================

USE stylesphere_db;

-- 1. USERS & ADMINS
INSERT INTO users (user_id, full_name, email, password_hash, phone, role, status) VALUES
(1, 'Admin User', 'admin@stylesphere.com', '$2a$10$E2919v.2.g.XmJ2lWv1wce8qPq4gM5/4iG4GZ/aRz/JtZ9xH9eYtK', '9876543210', 'ADMIN', 'ACTIVE'),
(2, 'Alex Johnson', 'alex.j@example.com', '$2a$10$E2919v.2.g.XmJ2lWv1wce8qPq4gM5/4iG4GZ/aRz/JtZ9xH9eYtK', '9876543211', 'CUSTOMER', 'ACTIVE'),
(3, 'Sophia Chen', 'sophia.c@example.com', '$2a$10$E2919v.2.g.XmJ2lWv1wce8qPq4gM5/4iG4GZ/aRz/JtZ9xH9eYtK', '9876543212', 'CUSTOMER', 'ACTIVE'),
(4, 'Rohan Sharma', 'rohan.s@example.com', '$2a$10$E2919v.2.g.XmJ2lWv1wce8qPq4gM5/4iG4GZ/aRz/JtZ9xH9eYtK', '9876543213', 'CUSTOMER', 'ACTIVE');

INSERT INTO admin (admin_id, user_id, department, access_level) VALUES
(1, 1, 'Super Admin', 'SUPER_ADMIN');

INSERT INTO addresses (address_id, user_id, full_name, phone, street_address, city, state, postal_code, is_default, address_type) VALUES
(1, 2, 'Alex Johnson', '9876543211', '123 College Green Road, Tech Park', 'Bangalore', 'Karnataka', '560001', TRUE, 'HOME'),
(2, 3, 'Sophia Chen', '9876543212', '45 North Campus Avenue', 'Delhi', 'Delhi', '110007', TRUE, 'HOME');

-- 2. BRANDS (15 Brands)
INSERT INTO brands (brand_id, brand_name, logo_url, description, is_featured) VALUES
(1, 'Nike', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100', 'Just Do It - Global sportswear icon.', TRUE),
(2, 'Adidas', 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=100', 'Impossible is Nothing.', TRUE),
(3, 'Zara', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100', 'High fashion & fast streetwear.', TRUE),
(4, 'H&M', 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=100', 'Sustainable style for everyone.', TRUE),
(5, 'Levi''s', 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=100', 'Original denim craftsmanship.', TRUE),
(6, 'Puma', 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=100', 'Forever Faster performance & apparel.', TRUE),
(7, 'Tommy Hilfiger', 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=100', 'Classic American cool style.', TRUE),
(8, 'Calvin Klein', 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100', 'Minimalist aesthetic & premium essentials.', TRUE),
(9, 'Urbanic', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100', 'Trendy gen-Z fashion catalog.', TRUE),
(10, 'FabIndia', 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100', 'Authentic Indian ethnic handlooms.', TRUE),
(11, 'Roadster', 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=100', 'Outdoor rugged streetwear.', FALSE),
(12, 'Allen Solly', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100', 'Friday dressing for modern pros.', FALSE),
(13, 'Biba', 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=100', 'Vibrant ethnic & fusion women apparel.', FALSE),
(14, 'Fossil', 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=100', 'Vintage inspired watches & accessories.', TRUE),
(15, 'Ray-Ban', 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100', 'Iconic eyewear for timeless look.', TRUE);

-- 3. CATEGORIES (10 Main Categories)
INSERT INTO categories (category_id, category_name, slug, image_url, description, is_featured) VALUES
(1, 'Men''s Clothing', 'mens-clothing', 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80', 'Stylish shirts, t-shirts, jeans, suits, and jackets.', TRUE),
(2, 'Women''s Clothing', 'womens-clothing', 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80', 'Dresses, tops, skirts, jeans, and activewear.', TRUE),
(3, 'Footwear', 'footwear', 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80', 'Sneakers, formal shoes, boots, and sandals.', TRUE),
(4, 'Ethnic & Festive', 'ethnic-festive', 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80', 'Kurtas, sarees, lehengas, and sherwanis.', TRUE),
(5, 'Active & Sportswear', 'active-sportswear', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80', 'Gym tees, trackpants, sports bras, and hoodies.', TRUE),
(6, 'Accessories', 'accessories', 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80', 'Bags, belts, wallets, and caps.', TRUE),
(7, 'Watches & Jewelry', 'watches-jewelry', 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80', 'Analog, digital, smartwatches, and minimalist jewelry.', TRUE),
(8, 'Eyewear', 'eyewear', 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80', 'Sunglasses, blue-light glasses, and frames.', FALSE),
(9, 'Kids & Youth', 'kids-youth', 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80', 'Vibrant kids outfits and school fashion.', FALSE),
(10, 'Outerwear & Winter', 'outerwear-winter', 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80', 'Puffer jackets, coats, cardigans, and sweaters.', TRUE);

-- 4. SUBCATEGORIES (30 Subcategories)
INSERT INTO subcategories (subcategory_id, category_id, subcategory_name, slug) VALUES
(1, 1, 'T-Shirts & Polos', 't-shirts-polos'),
(2, 1, 'Casual & Formal Shirts', 'casual-formal-shirts'),
(3, 1, 'Denim & Jeans', 'denim-jeans'),
(4, 1, 'Trousers & Chinos', 'trousers-chinos'),
(5, 2, 'Dresses & Jumpsuits', 'dresses-jumpsuits'),
(6, 2, 'Tops & Tees', 'tops-tees'),
(7, 2, 'Jeans & Trousers', 'womens-jeans-trousers'),
(8, 2, 'Skirts & Shorts', 'skirts-shorts'),
(9, 3, 'Casual Sneakers', 'casual-sneakers'),
(10, 3, 'Running & Sports Shoes', 'running-sports-shoes'),
(11, 3, 'Formal Shoes & Loafers', 'formal-shoes-loafers'),
(12, 3, 'Boots & High-Tops', 'boots-high-tops'),
(13, 4, 'Men''s Kurtas', 'mens-kurtas'),
(14, 4, 'Women''s Kurtis & Suits', 'womens-kurtis-suits'),
(15, 4, 'Sarees & Dupattas', 'sarees-dupattas'),
(16, 5, 'Training T-Shirts', 'training-t-shirts'),
(17, 5, 'Track Pants & Joggers', 'track-pants-joggers'),
(18, 5, 'Sports Jackets & Hoodies', 'sports-jackets-hoodies'),
(19, 6, 'Backpacks & Duffles', 'backpacks-duffles'),
(20, 6, 'Wallets & Belts', 'wallets-belts'),
(21, 6, 'Caps & Beanies', 'caps-beanies'),
(22, 7, 'Men''s Analog Watches', 'mens-analog-watches'),
(23, 7, 'Women''s Fashion Watches', 'womens-fashion-watches'),
(24, 7, 'Smartwatches', 'smartwatches'),
(25, 8, 'Aviator Sunglasses', 'aviator-sunglasses'),
(26, 8, 'Wayfarer Glasses', 'wayfarer-glasses'),
(27, 9, 'Boys Wear', 'boys-wear'),
(28, 9, 'Girls Wear', 'girls-wear'),
(29, 10, 'Heavy Puffer Jackets', 'heavy-puffer-jackets'),
(30, 10, 'Sweatshirts & Cardigans', 'sweatshirts-cardigans');

-- 5. PRODUCTS (Minimum 3+ Handcrafted Products Per Brand, total 45 handcrafted products)
INSERT INTO products (product_id, product_name, slug, description, price, discount_percent, category_id, subcategory_id, brand_id, main_image, gender_tag, is_featured, is_new_arrival, is_bestseller, rating, review_count) VALUES
-- Brand 1: Nike
(1, 'Nike Air Max Pulse Sneakers', 'nike-air-max-pulse', 'Next-gen street sneaker with responsive heel cushioning and lightweight breathable mesh upper.', 8999.00, 15.00, 3, 9, 1, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', 'UNISEX', TRUE, TRUE, TRUE, 4.85, 42),
(16, 'Nike Dri-FIT Fitness Training Tee', 'nike-dri-fit-training-tee', 'Sweat-wicking performance short sleeve tee designed for high intensity workouts.', 1795.00, 15.00, 5, 16, 1, 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80', 'MEN', FALSE, TRUE, TRUE, 4.60, 48),
(17, 'Nike Tech Fleece Windrunner Hoodie', 'nike-tech-fleece-hoodie', 'Premium lightweight warm fleece jacket featuring full zip and chevron design lines.', 7495.00, 16.00, 10, 30, 1, 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, TRUE, FALSE, 4.90, 64),

-- Brand 2: Adidas
(2, 'Adidas Ultraboost Light Running Shoes', 'adidas-ultraboost-light', 'Ultimate energy return running shoe with Primeknit textile upper and Continental Rubber outsole.', 12999.00, 20.00, 3, 10, 2, 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80', 'UNISEX', TRUE, FALSE, TRUE, 4.90, 88),
(18, 'Adidas Essentials 3-Stripes Track Pants', 'adidas-essentials-track-pants', 'Classic recycled polyester tricot pants with tapered ankle cuffs.', 2999.00, 20.00, 5, 17, 2, 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80', 'UNISEX', FALSE, TRUE, TRUE, 4.70, 31),
(19, 'Adidas Samba OG Classic Leather Sneakers', 'adidas-samba-og-sneakers', 'The timeless indoor football classic turned streetwear icon with soft leather and gum sole.', 9999.00, 16.00, 3, 9, 2, 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=800&q=80', 'UNISEX', TRUE, TRUE, TRUE, 4.85, 112),

-- Brand 3: Zara
(3, 'Zara Oversized Graphic Cotton Hoodie', 'zara-oversized-graphic-hoodie', 'Relaxed fit heavyweight fleece hoodie featuring bold typography back print.', 3290.00, 10.00, 1, 1, 3, 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80', 'UNISEX', TRUE, TRUE, FALSE, 4.60, 19),
(20, 'Zara High-Waisted Wide Leg Trousers', 'zara-high-waisted-wide-leg-trousers', 'Tailored full-length pants featuring front pleats and side slant pockets.', 2990.00, 15.00, 2, 7, 3, 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80', 'WOMEN', FALSE, TRUE, FALSE, 4.45, 22),
(21, 'Zara Faux Leather Cropped Biker Jacket', 'zara-cropped-biker-jacket', 'Sleek cropped moto jacket with lapel collar, silver metal zips, and adjustable belt.', 4990.00, 16.00, 2, 5, 3, 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80', 'WOMEN', TRUE, FALSE, TRUE, 4.75, 38),

-- Brand 4: H&M
(5, 'H&M Linen Blend Resort Shirt', 'hm-linen-blend-resort-shirt', 'Breathable resort collar short-sleeve shirt crafted from airy flax linen blend.', 1999.00, 10.00, 1, 2, 4, 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80', 'MEN', FALSE, TRUE, FALSE, 4.40, 15),
(22, 'H&M Relaxed Fit Heavyweight Sweatshirt', 'hm-relaxed-sweatshirt', 'Soft fleece cotton crewneck sweatshirt with dropped shoulders and ribbed cuffs.', 1499.00, 25.00, 1, 1, 4, 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, FALSE, TRUE, 4.60, 47),
(23, 'H&M Ribbed Cotton Bodycon Mini Dress', 'hm-ribbed-bodycon-dress', 'Form-fitting short dress in soft ribbed cotton jersey with square neckline.', 1299.00, 23.00, 2, 5, 4, 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80', 'WOMEN', FALSE, TRUE, FALSE, 4.45, 29),

-- Brand 5: Levi's
(4, 'Levi''s 501 Original Fit Denim Jeans', 'levis-501-original-fit-jeans', 'The iconic straight leg fit denim with signature button fly and timeless indigo wash.', 4599.00, 25.00, 1, 3, 5, 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, FALSE, TRUE, 4.75, 120),
(24, 'Levi''s Trucker Denim Jacket', 'levis-trucker-denim-jacket', 'The original trucker denim jacket since 1967. Durable cotton denim with point collar.', 5999.00, 20.00, 1, 3, 5, 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, TRUE, FALSE, 4.80, 52),
(25, 'Levi''s Batwing Logo Crewneck T-Shirt', 'levis-batwing-logo-tee', 'Essential soft cotton jersey t-shirt featuring iconic Levi''s red batwing logo print.', 1499.00, 16.00, 1, 1, 5, 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', 'MEN', FALSE, FALSE, TRUE, 4.60, 84),

-- Brand 6: Puma
(6, 'Puma Suede Classic XXI Sneakers', 'puma-suede-classic-xxi', 'Timeless low-top silhouette crafted from full suede leather with classic Puma Formstrip.', 5499.00, 30.00, 3, 9, 6, 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80', 'UNISEX', FALSE, FALSE, TRUE, 4.65, 34),
(26, 'Puma BMW M Motorsport Track Jacket', 'puma-bmw-track-jacket', 'High-octane motorsport track top with BMW M stripe branding and full zip closure.', 4999.00, 23.00, 5, 18, 6, 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, TRUE, FALSE, 4.80, 39),
(27, 'Puma Softride Pro Training Shoes', 'puma-softride-pro-shoes', 'Ultra-cushioned gym running shoes featuring Softride foam midsole and breathable mesh.', 4299.00, 28.00, 3, 10, 6, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', 'MEN', FALSE, TRUE, FALSE, 4.50, 26),

-- Brand 7: Tommy Hilfiger
(7, 'Tommy Hilfiger Oxford Solid Casual Shirt', 'tommy-hilfiger-oxford-shirt', 'Premium combed cotton oxford fabric with custom fit and iconic flag embroidery.', 4999.00, 15.00, 1, 2, 7, 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, TRUE, FALSE, 4.70, 27),
(28, 'Tommy Hilfiger Urban Commuter Backpack', 'tommy-hilfiger-commuter-backpack', 'Durable water-resistant navy canvas backpack with padded 15.6" laptop compartment.', 3899.00, 30.00, 6, 19, 7, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80', 'UNISEX', TRUE, FALSE, TRUE, 4.80, 45),
(29, 'Tommy Hilfiger Flag Pique Polo Shirt', 'tommy-hilfiger-flag-polo', 'Pure cotton pique polo with two-button placket and signature flag chest embroidery.', 3499.00, 18.00, 1, 1, 7, 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80', 'MEN', FALSE, TRUE, TRUE, 4.65, 58),

-- Brand 8: Calvin Klein
(8, 'Calvin Klein Monogram Crewneck T-Shirt', 'calvin-klein-monogram-tee', 'Soft organic jersey cotton tee with minimal high-density logo print on front chest.', 2799.00, 20.00, 1, 1, 8, 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', 'MEN', FALSE, TRUE, TRUE, 4.55, 62),
(30, 'Calvin Klein Genuine Leather Reversible Belt', 'calvin-klein-reversible-belt', 'Versatile 2-in-1 black and brown smooth leather belt with silver brushed metal buckle.', 3299.00, 23.00, 6, 20, 8, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, FALSE, FALSE, 4.75, 33),
(31, 'Calvin Klein Minimalist Zip Leather Wallet', 'calvin-klein-zip-wallet', 'Compact bi-fold leather wallet with RFID blocking technology and card slots.', 2499.00, 24.00, 6, 20, 8, 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80', 'UNISEX', FALSE, TRUE, TRUE, 4.60, 29),

-- Brand 9: Urbanic
(9, 'Urbanic Floral Print Chiffon Midi Dress', 'urbanic-floral-chiffon-midi-dress', 'Flowy A-line summer dress featuring delicate floral motifs, V-neckline, and puff sleeves.', 2490.00, 35.00, 2, 5, 9, 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80', 'WOMEN', TRUE, TRUE, TRUE, 4.80, 53),
(32, 'Urbanic High-Rise Utility Cargo Trousers', 'urbanic-cargo-trousers', 'Trendy Y2K aesthetic relaxed fit cargo pants with side flap pockets and elastic cuffs.', 1990.00, 31.00, 2, 7, 9, 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80', 'WOMEN', FALSE, TRUE, TRUE, 4.60, 41),
(33, 'Urbanic Satin Cowl Neck Party Top', 'urbanic-satin-cowl-top', 'Silky smooth satin camisole top featuring draped cowl neck and adjustable spaghetti straps.', 1290.00, 35.00, 2, 6, 9, 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80', 'WOMEN', TRUE, FALSE, FALSE, 4.40, 22),

-- Brand 10: FabIndia
(10, 'FabIndia Handloom Silk Blend Kurta', 'fabindia-handloom-silk-kurta', 'Elegant traditional straight fit long kurta woven with fine silk yarns.', 3990.00, 10.00, 4, 13, 10, 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, FALSE, TRUE, 4.70, 41),
(34, 'FabIndia Cotton Printed Ethnic Nehru Jacket', 'fabindia-nehru-jacket', 'Classic sleeveless ethnic vest jacket featuring block print motifs and mandarin collar.', 2990.00, 14.00, 4, 13, 10, 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80', 'MEN', FALSE, TRUE, TRUE, 4.80, 28),
(35, 'FabIndia Chanderi Silk Saree with Dupatta', 'fabindia-chanderi-saree', 'Lightweight hand-woven Chanderi cotton-silk drape saree with woven zari border.', 6490.00, 18.00, 4, 15, 10, 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80', 'WOMEN', TRUE, TRUE, FALSE, 4.90, 37),

-- Brand 11: Roadster
(11, 'Roadster Faux Leather Biker Jacket', 'roadster-faux-leather-biker-jacket', 'Rugged black biker jacket with asymmetric zipper, lapel collar, and quilt paneling.', 4299.00, 40.00, 10, 29, 11, 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80', 'MEN', FALSE, FALSE, TRUE, 4.50, 39),
(36, 'Roadster Outdoor Camo Cargo Pants', 'roadster-camo-cargo-pants', 'Heavy duty cotton twill cargo trousers with 6 utility pockets and adjustable waistband.', 1899.00, 36.00, 1, 4, 11, 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, TRUE, FALSE, 4.40, 65),
(37, 'Roadster Checked Cotton Casual Shirt', 'roadster-checked-casual-shirt', 'Rugged red and black buffalo check casual shirt with dual chest flap pockets.', 1299.00, 40.00, 1, 2, 11, 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80', 'MEN', FALSE, FALSE, TRUE, 4.30, 77),

-- Brand 12: Allen Solly
(12, 'Allen Solly Slim Fit Stretch Chinos', 'allen-solly-slim-fit-chinos', 'Comfortable cotton elastane blend formal chinos perfect for versatile workwear.', 2299.00, 20.00, 1, 4, 12, 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80', 'MEN', FALSE, TRUE, FALSE, 4.35, 18),
(38, 'Allen Solly Formal Textured Formal Shirt', 'allen-solly-formal-textured-shirt', 'Crisp formal shirt crafted from 100% fine cotton with Friday dressing subtle texture.', 1999.00, 23.00, 1, 2, 12, 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, FALSE, TRUE, 4.60, 42),
(39, 'Allen Solly Single-Breasted Formal Blazer', 'allen-solly-single-breasted-blazer', 'Sharp 2-button notch lapel blazer designed for corporate meetings and graduation events.', 6999.00, 22.00, 1, 2, 12, 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, TRUE, FALSE, 4.75, 19),

-- Brand 13: Biba
(13, 'Biba Printed Anarkali Kurta Set', 'biba-printed-anarkali-set', 'Vibrant printed cotton Anarkali suit with matching dupatta and palazzo trousers.', 4599.00, 25.00, 4, 14, 13, 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80', 'WOMEN', TRUE, TRUE, TRUE, 4.85, 76),
(40, 'Biba Straight Cotton Kurti with Dupatta', 'biba-straight-cotton-kurti', 'Daily wear straight fit breathable cotton kurti featuring ethnic block prints.', 2499.00, 24.00, 4, 14, 13, 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80', 'WOMEN', FALSE, TRUE, TRUE, 4.60, 53),
(41, 'Biba Festive Embellished Silk Lehenga Set', 'biba-embellished-silk-lehenga', 'Richly embroidered flared silk lehenga skirt with metallic zari choli and net dupatta.', 8999.00, 25.00, 4, 15, 13, 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80', 'WOMEN', TRUE, FALSE, FALSE, 4.90, 31),

-- Brand 14: Fossil
(14, 'Fossil Minimalist Chronograph Leather Watch', 'fossil-minimalist-chronograph-watch', 'Sleek 44mm round stainless steel case with genuine brown leather strap.', 9995.00, 20.00, 7, 22, 14, 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80', 'MEN', TRUE, FALSE, TRUE, 4.80, 95),
(42, 'Fossil Women Rose Gold Mesh Watch', 'fossil-rose-gold-mesh-watch', 'Delicate 32mm mother-of-pearl dial watch with stainless steel rose gold mesh band.', 8495.00, 22.00, 7, 23, 14, 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80', 'WOMEN', TRUE, TRUE, TRUE, 4.85, 68),
(43, 'Fossil Heritage Leather Crossbody Bag', 'fossil-leather-crossbody-bag', 'Crafted from 100% premium cowhide leather with brass hardware and adjustable strap.', 6995.00, 22.00, 6, 19, 14, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80', 'WOMEN', FALSE, TRUE, FALSE, 4.70, 24),

-- Brand 15: Ray-Ban
(15, 'Ray-Ban Classic Aviator Sunglasses', 'ray-ban-classic-aviator-sunglasses', 'Gold frame classic pilot style sunglasses with G-15 crystal green polarized lenses.', 8590.00, 10.00, 8, 25, 15, 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80', 'UNISEX', TRUE, FALSE, TRUE, 4.90, 150),
(44, 'Ray-Ban Wayfarer Classic Polarized Sunglasses', 'ray-ban-wayfarer-classic', 'The most recognizable style in eyewear history. Black acetate frame with G-15 green lenses.', 9290.00, 15.00, 8, 26, 15, 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80', 'UNISEX', TRUE, TRUE, TRUE, 4.85, 118),
(45, 'Ray-Ban Erika Round Frame Unisex Sunglasses', 'ray-ban-erika-round-sunglasses', 'Round oversized lenses with keyhole bridge and thin metal temples for retro style.', 7490.00, 16.00, 8, 25, 15, 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80', 'UNISEX', FALSE, TRUE, FALSE, 4.70, 82);

-- Generate remaining products up to 115 via consistent mock generation query pattern for database initialization
INSERT INTO products (product_id, product_name, slug, description, price, discount_percent, category_id, subcategory_id, brand_id, main_image, gender_tag, is_featured, is_new_arrival, is_bestseller, rating, review_count)
SELECT 
    n AS product_id,
    CONCAT('StyleSphere ', CASE (n % 5) WHEN 0 THEN 'Urban ' WHEN 1 THEN 'Classic ' WHEN 2 THEN 'Pro ' WHEN 3 THEN 'Eco ' ELSE 'Vibe ' END, 'Item #', n) AS product_name,
    CONCAT('stylesphere-item-', n) AS slug,
    CONCAT('High quality fashion apparel featuring premium stitching, breathable fabric, and durable build designed for modern daily lifestyle. Style reference SKU-', n) AS description,
    ROUND(800 + (n * 95) % 8000, 2) AS price,
    ROUND((n * 7) % 35, 2) AS discount_percent,
    1 + (n % 10) AS category_id,
    1 + (n % 30) AS subcategory_id,
    1 + (n % 15) AS brand_id,
    CASE (n % 6)
        WHEN 0 THEN 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80'
        WHEN 1 THEN 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'
        WHEN 2 THEN 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80'
        WHEN 3 THEN 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80'
        WHEN 4 THEN 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80'
        ELSE 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80'
    END AS main_image,
    CASE (n % 3) WHEN 0 THEN 'MEN' WHEN 1 THEN 'WOMEN' ELSE 'UNISEX' END AS gender_tag,
    (n % 4 = 0) AS is_featured,
    (n % 3 = 0) AS is_new_arrival,
    (n % 5 = 0) AS is_bestseller,
    ROUND(4.0 + (n % 10) * 0.1, 2) AS rating,
    10 + (n * 3) % 90 AS review_count
FROM (
    WITH RECURSIVE seq AS (
        SELECT 46 AS n
        UNION ALL
        SELECT n + 1 FROM seq WHERE n < 115
    )
    SELECT n FROM seq
) AS numbers;

-- 6. PRODUCT VARIANTS (Sizes & Stock for items)
INSERT INTO product_variants (product_id, size, color, color_hex, stock_quantity, sku) VALUES
(1, 'US 8', 'Black/Red', '#FF0000', 15, 'NK-AM-8'),
(1, 'US 9', 'Black/Red', '#FF0000', 20, 'NK-AM-9'),
(1, 'US 10', 'White/Blue', '#0000FF', 12, 'NK-AM-10'),
(2, 'US 8', 'Core Black', '#000000', 18, 'AD-UB-8'),
(2, 'US 9', 'Core Black', '#000000', 25, 'AD-UB-9'),
(3, 'M', 'Navy Blue', '#000080', 10, 'ZR-HD-M'),
(3, 'L', 'Navy Blue', '#000080', 15, 'ZR-HD-L'),
(4, '30/32', 'Dark Denim', '#1A237E', 30, 'LV-501-30'),
(4, '32/32', 'Dark Denim', '#1A237E', 40, 'LV-501-32');

-- 7. REVIEWS
INSERT INTO reviews (product_id, user_id, rating, review_title, comment) VALUES
(1, 2, 5, 'Super comfortable for daily wear!', 'The Air Max cushioning makes walking around campus effortless. Highly recommended.'),
(1, 3, 5, 'Clean design & perfect fit', 'Delivered fast. The color combo looks even better in person.'),
(2, 2, 5, 'Best running shoe of 2026', 'Incredible energy return while jogging. Fits true to size.'),
(4, 4, 4, 'Classic quality denim', 'Sturdy material and iconic look. Very satisfied with the purchase.');
