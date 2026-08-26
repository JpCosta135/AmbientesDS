package com.loja.backend.model;

public class Product {
    private Long id;
    private String name;
    private Double price;
    private String category;

    public Product(Long id, String name, Double price, String category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    public Long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public Double getPrice() {
        return price;
    }
    public String getCategory() {
        return category;
    }





}
