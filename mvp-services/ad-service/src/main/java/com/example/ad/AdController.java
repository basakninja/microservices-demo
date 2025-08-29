package com.example.ad;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AdController {
    private static final Map<String, String> ADS = Map.of(
            "electronics", "Buy one get one free on electronics!",
            "books", "Read more with 20% off all books"
    );

    @GetMapping("/ads")
    public String ad(@RequestParam String category) {
        return ADS.getOrDefault(category, "Great deals available now!");
    }
}
