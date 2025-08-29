package com.example.product;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {
    private final List<Product> products = Arrays.asList(
            new Product("1", "Widget", 9.99),
            new Product("2", "Gadget", 19.99)
    );

    @GetMapping("/products")
    public List<Product> all() {
        return products;
    }

    @GetMapping("/products/{id}")
    public Product byId(@PathVariable String id) {
        Optional<Product> p = products.stream().filter(pr -> pr.getId().equals(id)).findFirst();
        return p.orElse(null);
    }
}
