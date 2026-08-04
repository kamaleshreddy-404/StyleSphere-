package com.stylesphere.dao.impl;

import com.stylesphere.dao.ProductDAO;
import com.stylesphere.model.Product;
import com.stylesphere.util.DBConnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDAOImpl implements ProductDAO {

    @Override
    public List<Product> getAllProducts(int limit, int offset) {
        List<Product> list = new ArrayList<>();
        String sql = "SELECT p.*, c.category_name, b.brand_name FROM products p " +
                     "LEFT JOIN categories c ON p.category_id = c.category_id " +
                     "LEFT JOIN brands b ON p.brand_id = b.brand_id " +
                     "ORDER BY p.product_id DESC LIMIT ? OFFSET ?";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, limit);
            ps.setInt(2, offset);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                list.add(mapResultSetToProduct(rs));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

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

    @Override
    public Product getProductById(int productId) {
        String sql = "SELECT p.*, c.category_name, b.brand_name FROM products p " +
                     "LEFT JOIN categories c ON p.category_id = c.category_id " +
                     "LEFT JOIN brands b ON p.brand_id = b.brand_id WHERE p.product_id = ?";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, productId);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return mapResultSetToProduct(rs);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public boolean addProduct(Product p) {
        String sql = "INSERT INTO products (product_name, slug, description, price, discount_percent, category_id, subcategory_id, brand_id, main_image, gender_tag) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, p.getProductName());
            ps.setString(2, p.getSlug());
            ps.setString(3, p.getDescription());
            ps.setBigDecimal(4, p.getPrice());
            ps.setBigDecimal(5, p.getDiscountPercent());
            ps.setInt(6, p.getCategoryId());
            ps.setInt(7, p.getSubcategoryId());
            ps.setInt(8, p.getBrandId());
            ps.setString(9, p.getMainImage());
            ps.setString(10, p.getGenderTag());
            return ps.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public boolean updateProduct(Product p) {
        String sql = "UPDATE products SET product_name=?, price=?, discount_percent=?, category_id=?, brand_id=?, main_image=? WHERE product_id=?";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, p.getProductName());
            ps.setBigDecimal(2, p.getPrice());
            ps.setBigDecimal(3, p.getDiscountPercent());
            ps.setInt(4, p.getCategoryId());
            ps.setInt(5, p.getBrandId());
            ps.setString(6, p.getMainImage());
            ps.setInt(7, p.getProductId());
            return ps.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public boolean deleteProduct(int productId) {
        String sql = "DELETE FROM products WHERE product_id = ?";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, productId);
            return ps.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public int getTotalCount() {
        String sql = "SELECT COUNT(*) FROM products";
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            if (rs.next()) return rs.getInt(1);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }

    private Product mapResultSetToProduct(ResultSet rs) throws SQLException {
        Product p = new Product();
        p.setProductId(rs.getInt("product_id"));
        p.setProductName(rs.getString("product_name"));
        p.setSlug(rs.getString("slug"));
        p.setDescription(rs.getString("description"));
        p.setPrice(rs.getBigDecimal("price"));
        p.setDiscountPercent(rs.getBigDecimal("discount_percent"));
        p.setCategoryId(rs.getInt("category_id"));
        p.setCategoryName(rs.getString("category_name"));
        p.setBrandId(rs.getInt("brand_id"));
        p.setBrandName(rs.getString("brand_name"));
        p.setMainImage(rs.getString("main_image"));
        p.setGenderTag(rs.getString("gender_tag"));
        p.setFeatured(rs.getBoolean("is_featured"));
        p.setNewArrival(rs.getBoolean("is_new_arrival"));
        p.setBestseller(rs.getBoolean("is_bestseller"));
        p.setRating(rs.getDouble("rating"));
        p.setReviewCount(rs.getInt("review_count"));
        p.setCreatedAt(rs.getTimestamp("created_at"));
        return p;
    }
}
