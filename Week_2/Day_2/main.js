import { calculateCartTotal } from "./cartUtils.js";

const products = [
    { name: "Pen", price: 10, quantity: 3 },
    { name: "Notebook", price: 50, quantity: 2 },
    { name: "Bag", price: 500, quantity: 1 }
];

const total = calculateCartTotal(products);

const invoice = `
INVOICE
--------------------
${products.map(p =>
    `${p.name} - ₹${p.price} x ${p.quantity}`
).join("\n")}
--------------------
Total: ₹${total}
`;

document.getElementById("invoice").innerText = invoice;