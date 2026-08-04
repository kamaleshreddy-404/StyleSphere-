package com.stylesphere.dao;

import com.stylesphere.model.Product;
import java.util.List;

public interface ProductDAO {
    List<Product> getAllProducts(int limit, int offset);
    List<Product> filterProducts(Integer categoryId, Integer brandId, Double minPrice, Double maxPrice, String gender, String sortBy);
    Product getProductById(int productId);
    boolean addProduct(Product product);
    boolean updateProduct(Product product);
    boolean deleteProduct(int productId);
    int getTotalCount();
}
