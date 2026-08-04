package com.stylesphere.servlet;

import com.google.gson.Gson;
import com.stylesphere.dao.UserDAO;
import com.stylesphere.dao.impl.UserDAOImpl;
import com.stylesphere.model.User;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/api/auth/*")
public class AuthServlet extends HttpServlet {
    private UserDAO userDAO = new UserDAOImpl();
    private Gson gson = new Gson();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        PrintWriter out = resp.getWriter();
        String pathInfo = req.getPathInfo();

        StringBuilder sb = new StringBuilder();
        String line;
        try (BufferedReader reader = req.getReader()) {
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
        }
        Map<?, ?> body = gson.fromJson(sb.toString(), Map.class);
        Map<String, Object> result = new HashMap<>();

        if ("/login".equalsIgnoreCase(pathInfo)) {
            String email = (String) body.get("email");
            String password = (String) body.get("password");

            User u = userDAO.authenticate(email, password);
            if (u != null) {
                HttpSession session = req.getSession(true);
                session.setAttribute("user", u);
                result.put("status", "success");
                result.put("message", "Login successful");
                result.put("user", u);
            } else {
                resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                result.put("status", "error");
                result.put("message", "Invalid email or password");
            }
        } else if ("/register".equalsIgnoreCase(pathInfo)) {
            String name = (String) body.get("fullName");
            String email = (String) body.get("email");
            String phone = (String) body.get("phone");
            String pass = (String) body.get("password");

            User existing = userDAO.getUserByEmail(email);
            if (existing != null) {
                resp.setStatus(HttpServletResponse.SC_CONFLICT);
                result.put("status", "error");
                result.put("message", "Email is already registered");
            } else {
                User u = new User(0, name, email, phone, "CUSTOMER");
                boolean created = userDAO.registerUser(u, pass);
                if (created) {
                    result.put("status", "success");
                    result.put("message", "User registered successfully");
                } else {
                    resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                    result.put("status", "error");
                    result.put("message", "Failed to register user");
                }
            }
        } else if ("/logout".equalsIgnoreCase(pathInfo)) {
            HttpSession session = req.getSession(false);
            if (session != null) session.invalidate();
            result.put("status", "success");
            result.put("message", "Logged out");
        }

        out.print(gson.toJson(result));
    }
}
