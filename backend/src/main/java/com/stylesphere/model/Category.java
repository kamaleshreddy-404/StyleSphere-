package com.stylesphere.model;

public class Category {
    private int categoryId;
    private String categoryName;
    private String slug;
    private String imageUrl;
    private String description;
    private boolean isFeatured;

    public Category() {}

    public Category(int categoryId, String categoryName, String slug, String imageUrl, String description, boolean isFeatured) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.slug = slug;
        this.imageUrl = imageUrl;
        this.description = description;
        this.isFeatured = isFeatured;
    }

    public int getCategoryId() { return categoryId; }
    public void setCategoryId(int categoryId) { this.categoryId = categoryId; }

    public String getCategoryName() { return categoryName; }
    public void setCategoryName(String categoryName) { this.categoryName = categoryName; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public boolean isFeatured() { return isFeatured; }
    public void setFeatured(boolean featured) { isFeatured = featured; }
}
