USE EcommDb;
GO

CREATE TABLE stores (
    store_id INT PRIMARY KEY,
    store_name VARCHAR(100)
);
GO

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100)
);
GO

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);
GO

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    store_id INT,
    order_status INT,
    order_date DATE,
    shipped_date DATE NULL,
    required_date DATE NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (store_id) REFERENCES stores(store_id)
);
GO

CREATE TABLE stocks (
    stock_id INT PRIMARY KEY,
    store_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (store_id) REFERENCES stores(store_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
GO

CREATE TABLE order_items (
    item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    store_id INT,
    quantity INT,
    list_price DECIMAL(10,2),
    discount DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (store_id) REFERENCES stores(store_id)
);
GO

SELECT * FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_NAME IN ('orders','products','stores');