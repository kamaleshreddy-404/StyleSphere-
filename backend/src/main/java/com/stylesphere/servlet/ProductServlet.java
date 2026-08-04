package com.stylesphere.servlet;

import com.google.gson.Gson;
import com.stylesphere.dao.ProductDAO;
import com.stylesphere.dao.impl.ProductDAOImpl;
import com.stylesphere.model.Product;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

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

        String pathInfo = req.getPathInfo();
        if (pathInfo != null && pathInfo.length() > 1) {
            try {
                int id = Integer.parseInt(pathInfo.substring(1));
                Product p = productDAO.getProductById(id);
                if (p != null) {
                    out.print(gson.toJson(p));
                } else {
                    resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
                    out.print("{\"error\": \"Product not found\"}");
                }
                return;
            } catch (NumberFormatException ignored) {}
        }

        // List / Filter
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
