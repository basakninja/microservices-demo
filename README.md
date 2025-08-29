# Microservices MVP

This repository provides a from-scratch microservices-based e-commerce demo.
Each service runs independently on its own port and showcases different
languages and frameworks.

## Services

- **api-gateway** – Node.js gateway exposing product, cart and checkout endpoints.
- **product-service** – Spring Boot service serving sample product data.
- **cart-service** – ASP.NET Core API keeping user carts in memory.
- **order-service** – Go service orchestrating checkout logic.
- **payment-service** – Node.js mock payment processor.
- **shipping-service** – Go service returning flat-rate shipping info.
- **notification-service** – Flask app simulating email notifications.
- **recommendation-service** – Flask app delivering static recommendations.
- **currency-service** – Node.js converter using fixed rates.
- **ad-service** – Spring Boot service returning simple ads.

All code here is newly implemented and not derived from external
repositories.
