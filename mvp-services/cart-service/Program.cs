using System.Collections.Concurrent;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var carts = new ConcurrentDictionary<string, List<CartItem>>();

app.MapPost("/cart/{userId}", (string userId, CartItem item) => {
    var list = carts.GetOrAdd(userId, _ => new List<CartItem>());
    list.Add(item);
    return Results.Ok(list);
});

app.MapGet("/cart/{userId}", (string userId) => {
    carts.TryGetValue(userId, out var list);
    return Results.Ok(list ?? new List<CartItem>());
});

app.Run("http://0.0.0.0:8082");

record CartItem(string productId, int quantity);
