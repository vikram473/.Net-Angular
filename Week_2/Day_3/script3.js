const products = ["Laptop", "Mobile", "Tablet", "Headphones", "Charger"];

const input = document.getElementById("search");
const list = document.getElementById("productList");
const noResult = document.getElementById("noResult");

const renderProducts = items => {
    list.innerHTML = "";
    noResult.textContent = "";

    if (items.length === 0) {
        noResult.textContent = "No Results Found";
        return;
    }

    items.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        list.appendChild(li);
    });
};

renderProducts(products);

input.addEventListener("input", () => {
    const filtered = products.filter(p =>
        p.toLowerCase().includes(input.value.toLowerCase())
    );
    renderProducts(filtered);
});