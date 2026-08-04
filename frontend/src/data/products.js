// ============================================================
// StyleSphere - Complete Product Catalog Dataset (100 Products)
// ============================================================

export const CATEGORIES = [
  { id: 1, name: "Men's Clothing", slug: "mens-clothing", count: 24, image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Women's Clothing", slug: "womens-clothing", count: 22, image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Footwear", slug: "footwear", count: 18, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "Ethnic & Festive", slug: "ethnic-festive", count: 10, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "Active & Sportswear", slug: "active-sportswear", count: 8, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Accessories", slug: "accessories", count: 6, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80" },
  { id: 7, name: "Watches & Jewelry", slug: "watches-jewelry", count: 5, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80" },
  { id: 8, name: "Eyewear", slug: "eyewear", count: 3, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80" },
  { id: 9, name: "Kids & Youth", slug: "kids-youth", count: 2, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80" },
  { id: 10, name: "Outerwear & Winter", slug: "outerwear-winter", count: 2, image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80" }
];

export const BRANDS = [
  { id: 1, name: "Nike", logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" },
  { id: 2, name: "Adidas", logo: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=100" },
  { id: 3, name: "Zara", logo: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100" },
  { id: 4, name: "H&M", logo: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=100" },
  { id: 5, name: "Levi's", logo: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=100" },
  { id: 6, name: "Puma", logo: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=100" },
  { id: 7, name: "Tommy Hilfiger", logo: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=100" },
  { id: 8, name: "Calvin Klein", logo: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100" },
  { id: 9, name: "Urbanic", logo: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100" },
  { id: 10, name: "FabIndia", logo: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100" },
  { id: 11, name: "Roadster", logo: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=100" },
  { id: 12, name: "Allen Solly", logo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100" },
  { id: 13, name: "Biba", logo: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=100" },
  { id: 14, name: "Fossil", logo: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=100" },
  { id: 15, name: "Ray-Ban", logo: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100" }
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Nike Air Max Pulse Sneakers",
    brand: "Nike",
    brandId: 1,
    category: "Footwear",
    categoryId: 3,
    price: 8999,
    originalPrice: 10499,
    discount: 15,
    rating: 4.8,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Next-gen street sneaker with responsive heel cushioning and lightweight breathable mesh upper for maximum daily comfort.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    colors: ["Red/Black", "White/Blue", "All Black"],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isBestseller: true,
    gender: "UNISEX"
  },
  {
    id: 2,
    name: "Adidas Ultraboost Light Running Shoes",
    brand: "Adidas",
    brandId: 2,
    category: "Footwear",
    categoryId: 3,
    price: 12999,
    originalPrice: 15999,
    discount: 20,
    rating: 4.9,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultimate energy return running shoe with Primeknit textile upper and Continental Rubber outsole.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    colors: ["Core Black", "Cloud White", "Solar Orange"],
    inStock: true,
    isFeatured: true,
    isNewArrival: false,
    isBestseller: true,
    gender: "UNISEX"
  },
  {
    id: 3,
    name: "Zara Oversized Graphic Cotton Hoodie",
    brand: "Zara",
    brandId: 3,
    category: "Men's Clothing",
    categoryId: 1,
    price: 3290,
    originalPrice: 3690,
    discount: 10,
    rating: 4.6,
    reviewsCount: 19,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Relaxed fit heavyweight fleece hoodie featuring bold typography back print.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Charcoal Gray", "Off White"],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isBestseller: false,
    gender: "UNISEX"
  },
  {
    id: 4,
    name: "Levi's 501 Original Fit Denim Jeans",
    brand: "Levi's",
    brandId: 5,
    category: "Men's Clothing",
    categoryId: 1,
    price: 4599,
    originalPrice: 5999,
    discount: 25,
    rating: 4.75,
    reviewsCount: 120,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The iconic straight leg fit denim with signature button fly and timeless indigo wash.",
    sizes: ["30/32", "32/32", "34/32", "36/32"],
    colors: ["Dark Indigo", "Light Wash", "Black"],
    inStock: true,
    isFeatured: true,
    isNewArrival: false,
    isBestseller: true,
    gender: "MEN"
  },
  {
    id: 5,
    name: "H&M Linen Blend Resort Collar Shirt",
    brand: "H&M",
    brandId: 4,
    category: "Men's Clothing",
    categoryId: 1,
    price: 1999,
    originalPrice: 2299,
    discount: 10,
    rating: 4.4,
    reviewsCount: 15,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Breathable resort collar short-sleeve shirt crafted from airy flax linen blend.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sage Green", "White", "Terracotta"],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    isBestseller: false,
    gender: "MEN"
  },
  {
    id: 6,
    name: "Puma Suede Classic XXI Sneakers",
    brand: "Puma",
    brandId: 6,
    category: "Footwear",
    categoryId: 3,
    price: 5499,
    originalPrice: 7999,
    discount: 30,
    rating: 4.65,
    reviewsCount: 34,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Timeless low-top silhouette crafted from full suede leather with classic Puma Formstrip.",
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    colors: ["Peacoat Blue", "Black", "High Risk Red"],
    inStock: true,
    isFeatured: false,
    isNewArrival: false,
    isBestseller: true,
    gender: "UNISEX"
  },
  {
    id: 7,
    name: "Tommy Hilfiger Oxford Solid Casual Shirt",
    brand: "Tommy Hilfiger",
    brandId: 7,
    category: "Men's Clothing",
    categoryId: 1,
    price: 4999,
    originalPrice: 5999,
    discount: 15,
    rating: 4.7,
    reviewsCount: 27,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Premium combed cotton oxford fabric with custom fit and iconic flag embroidery.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Sky Blue", "Classic White", "Pink"],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isBestseller: false,
    gender: "MEN"
  },
  {
    id: 8,
    name: "Calvin Klein Monogram Crewneck T-Shirt",
    brand: "Calvin Klein",
    brandId: 8,
    category: "Men's Clothing",
    categoryId: 1,
    price: 2799,
    originalPrice: 3499,
    discount: 20,
    rating: 4.55,
    reviewsCount: 62,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Soft organic jersey cotton tee with minimal high-density logo print on front chest.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pure White", "Heather Gray", "Black"],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    isBestseller: true,
    gender: "MEN"
  },
  {
    id: 9,
    name: "Urbanic Floral Print Chiffon Midi Dress",
    brand: "Urbanic",
    brandId: 9,
    category: "Women's Clothing",
    categoryId: 2,
    price: 2490,
    originalPrice: 3850,
    discount: 35,
    rating: 4.8,
    reviewsCount: 53,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Flowy A-line summer dress featuring delicate floral motifs, V-neckline, and puff sleeves.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pastel Yellow", "Lilac Floral"],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isBestseller: true,
    gender: "WOMEN"
  },
  {
    id: 10,
    name: "FabIndia Handloom Silk Blend Straight Kurta",
    brand: "FabIndia",
    brandId: 10,
    category: "Ethnic & Festive",
    categoryId: 4,
    price: 3990,
    originalPrice: 4490,
    discount: 10,
    rating: 4.7,
    reviewsCount: 41,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Elegant traditional straight fit long kurta woven with fine silk yarns and handloom texture.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Royal Blue", "Maroon", "Mustard"],
    inStock: true,
    isFeatured: true,
    isNewArrival: false,
    isBestseller: true,
    gender: "MEN"
  },
  {
    id: 11,
    name: "Roadster Faux Leather Biker Jacket",
    brand: "Roadster",
    brandId: 11,
    category: "Outerwear & Winter",
    categoryId: 10,
    price: 4299,
    originalPrice: 7199,
    discount: 40,
    rating: 4.5,
    reviewsCount: 39,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Rugged black biker jacket with asymmetric zipper, lapel collar, and quilt paneling.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Jet Black", "Tan Brown"],
    inStock: true,
    isFeatured: false,
    isNewArrival: false,
    isBestseller: true,
    gender: "MEN"
  },
  {
    id: 12,
    name: "Allen Solly Slim Fit Stretch Chinos",
    brand: "Allen Solly",
    brandId: 12,
    category: "Men's Clothing",
    categoryId: 1,
    price: 2299,
    originalPrice: 2899,
    discount: 20,
    rating: 4.35,
    reviewsCount: 18,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Comfortable cotton elastane blend formal chinos perfect for versatile workwear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Beige", "Navy", "Olive Green"],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    isBestseller: false,
    gender: "MEN"
  },
  {
    id: 13,
    name: "Biba Printed Anarkali Kurta Set",
    brand: "Biba",
    brandId: 13,
    category: "Ethnic & Festive",
    categoryId: 4,
    price: 4599,
    originalPrice: 6130,
    discount: 25,
    rating: 4.85,
    reviewsCount: 76,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Vibrant printed cotton Anarkali suit with matching dupatta and palazzo trousers.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Coral Red", "Turquoise"],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isBestseller: true,
    gender: "WOMEN"
  },
  {
    id: 14,
    name: "Fossil Minimalist Chronograph Leather Watch",
    brand: "Fossil",
    brandId: 14,
    category: "Watches & Jewelry",
    categoryId: 7,
    price: 9995,
    originalPrice: 12495,
    discount: 20,
    rating: 4.8,
    reviewsCount: 95,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Sleek 44mm round stainless steel case with genuine brown leather strap.",
    sizes: ["One Size"],
    colors: ["Brown/Silver", "Black/Gold"],
    inStock: true,
    isFeatured: true,
    isNewArrival: false,
    isBestseller: true,
    gender: "MEN"
  },
  {
    id: 15,
    name: "Ray-Ban Classic Aviator Sunglasses",
    brand: "Ray-Ban",
    brandId: 15,
    category: "Eyewear",
    categoryId: 8,
    price: 8590,
    originalPrice: 9540,
    discount: 10,
    rating: 4.9,
    reviewsCount: 150,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Gold frame classic pilot style sunglasses with G-15 crystal green polarized lenses.",
    sizes: ["Standard 58mm"],
    colors: ["Gold/Green", "Black/Dark Gray"],
    inStock: true,
    isFeatured: true,
    isNewArrival: false,
    isBestseller: true,
    gender: "UNISEX"
  }
];

// Helper programmatically to expand up to 100 products for complete showcase
for (let i = 16; i <= 100; i++) {
  const brandObj = BRANDS[i % BRANDS.length];
  const catObj = CATEGORIES[i % CATEGORIES.length];
  const priceVal = 899 + ((i * 147) % 7500);
  const discountVal = (i * 7) % 35;
  const originalVal = Math.round(priceVal / (1 - (discountVal / 100)));

  PRODUCTS.push({
    id: i,
    name: `${brandObj.name} ${['Urban Slim', 'Classic Essential', 'Studio Fit', 'Pro Active', 'Vibe Wear'][i % 5]} ${catObj.name.split("'")[0]} #${i}`,
    brand: brandObj.name,
    brandId: brandObj.id,
    category: catObj.name,
    categoryId: catObj.id,
    price: priceVal,
    originalPrice: originalVal,
    discount: discountVal,
    rating: Number((4.0 + ((i % 10) * 0.1)).toFixed(1)),
    reviewsCount: 12 + ((i * 5) % 80),
    image: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80"
    ][i % 6],
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    description: `High quality ${catObj.name.toLowerCase()} featuring durable stitching, premium fabric blend, and ergonomic fit for daily style. Item code SKU-${i}.`,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray", "Olive"],
    inStock: i % 12 !== 0,
    isFeatured: i % 4 === 0,
    isNewArrival: i % 3 === 0,
    isBestseller: i % 5 === 0,
    gender: i % 3 === 0 ? "MEN" : i % 3 === 1 ? "WOMEN" : "UNISEX"
  });
}
