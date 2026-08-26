package com.loja.backend.controller;
import com.loja.backend.model.Product;
import com.loja.backend.service.ProductService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService service;

    public ProductController(
            ProductService service
    ) {
        this.service = service;

    }

    @GetMapping
    public List<Product> products() {

        return service.getProducts();

    }

}