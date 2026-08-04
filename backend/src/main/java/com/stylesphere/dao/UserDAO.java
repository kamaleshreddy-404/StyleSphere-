package com.stylesphere.dao;

import com.stylesphere.model.User;

public interface UserDAO {
    User authenticate(String email, String password);
    User getUserByEmail(String email);
    User getUserById(int userId);
    boolean registerUser(User user, String plainPassword);
    boolean updateUserProfile(User user);
    boolean changePassword(int userId, String oldPassword, String newPassword);
}
