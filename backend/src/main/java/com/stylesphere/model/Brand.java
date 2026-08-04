package com.stylesphere.model;

public class Brand {
    private int brandId;
    private String brandName;
    private String logoUrl;
    private String description;
    private boolean isFeatured;

    public Brand() {}

    public Brand(int brandId, String brandName, String logoUrl, String description, boolean isFeatured) {
        this.brandId = brandId;
        this.brandName = brandName;
        this.logoUrl = logoUrl;
        this.description = description;
        this.isFeatured = isFeatured;
    }

    public int getBrandId() { return brandId; }
    public void setBrandId(int brandId) { this.brandId = brandId; }

    public String getBrandName() { return brandName; }
    public void setBrandName(String brandName) { this.brandName = brandName; }

    public String getLogoUrl() { return logoUrl; }
    public void setLogoUrl(String logoUrl) { this.logoUrl = logoUrl; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public boolean isFeatured() { return isFeatured; }
    public void setFeatured(boolean featured) { isFeatured = featured; }
}
