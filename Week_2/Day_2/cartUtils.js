export const calculateCartTotal = products =>
    products.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );