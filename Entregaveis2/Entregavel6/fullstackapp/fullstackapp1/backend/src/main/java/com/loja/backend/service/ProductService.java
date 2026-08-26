
package com.loja.backend.service;
import com.loja.backend.model.Product;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    public List<Product> getProducts() {
        return List.of(
                new Product(
                        1L,
                        "Mouse Gamer",
                        199.90,
                        "Periféricos"
                ),
                new Product(
                        2L,
                        "Teclado Mecânico",
                        399.90,
                        "Periféricos"
                ),
                new Product(
                        3L,
                        "Monitor UltraWide",
                        1499.90,
                        "Monitores"
                )
        );

    }
}