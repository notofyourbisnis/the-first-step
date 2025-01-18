package com.example.work.controllers;

import com.example.work.entities.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {

    @GetMapping("/products")
    public List<Product> getProducts() {
        // Example list of products with images
        List<Product> products = new ArrayList<>();
        products.add(new Product(1L, "Laptop", "High performance laptop", 1200.99, 10, "/images/laptop.jpg"));
        products.add(new Product(2L, "Smartphone", "Latest model smartphone", 899.99, 25, "/images/smartphone.jpg"));
        products.add(new Product(3L, "Headphones", "Noise-canceling headphones", 199.99, 50, "/images/headphones.jpg"));
        return products;
    }
}
