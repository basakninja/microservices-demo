package main

import (
    "encoding/json"
    "log"
    "net/http"
)

type ShippingRequest struct {
    Address string `json:"address"`
    Weight  float64 `json:"weight"`
}

type ShippingResponse struct {
    Cost     float64 `json:"cost"`
    Tracking string  `json:"tracking"`
}

func main() {
    http.HandleFunc("/shipping", shippingHandler)
    log.Println("Shipping Service running on port 8086")
    log.Fatal(http.ListenAndServe(":8086", nil))
}

func shippingHandler(w http.ResponseWriter, r *http.Request) {
    var req ShippingRequest
    json.NewDecoder(r.Body).Decode(&req)
    resp := ShippingResponse{Cost: 5.99, Tracking: "TRACK123"}
    json.NewEncoder(w).Encode(resp)
}
