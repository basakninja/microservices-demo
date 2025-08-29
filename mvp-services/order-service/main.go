package main

import (
    "encoding/json"
    "log"
    "net/http"
)

type OrderRequest struct {
    UserID string `json:"userId"`
}

type OrderResponse struct {
    OrderID string `json:"orderId"`
}

func main() {
    http.HandleFunc("/checkout", checkoutHandler)
    log.Println("Order Service running on port 8083")
    log.Fatal(http.ListenAndServe(":8083", nil))
}

func checkoutHandler(w http.ResponseWriter, r *http.Request) {
    var req OrderRequest
    json.NewDecoder(r.Body).Decode(&req)
    // here we would call Cart, Payment, Shipping, Notification services
    log.Println("Processing order for", req.UserID)
    resp := OrderResponse{OrderID: "ORDER-" + req.UserID}
    json.NewEncoder(w).Encode(resp)
}
