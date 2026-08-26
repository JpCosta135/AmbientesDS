package com.loja.backend.controller;

import com.loja.backend.model.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class HelloController {

    @GetMapping("/products")
    public List<Product> products() {
        return List.of(

                new Product(
                        1L,
                        "Mouse Gamer",
                        199.90
                ),

                new Product(
                        2L,
                        "Teclado Mecânico",
                        399.90
                ),

                new Product(
                        3L,
                        "Monitor",
                        1299.90
                )
                );
    }
}