CREATE TABLE stores (
 store_id INT PRIMARY KEY,
 store_name VARCHAR(100)
);
CREATE TABLE products (
 product_id INT PRIMARY KEY,
 product_name VARCHAR(100)
);
CREATE TABLE orders (
 order_id INT PRIMARY KEY,
 store_id INT,
 order_status INT,
 FOREIGN KEY (store_id) REFERENCES stores(store_id)
);
CREATE TABLE order_items (
 item_id INT PRIMARY KEY,
 order_id INT,
 product_id INT,
 quantity INT,
 list_price DECIMAL(10,2),
 discount DECIMAL(10,2),
 FOREIGN KEY (order_id) REFERENCES orders(order_id),
 FOREIGN KEY (product_id) REFERENCES products(product_id)
);
CREATE TABLE stocks (
 stock_id INT PRIMARY KEY,
 store_id INT,
 product_id INT,
 quantity INT,
 FOREIGN KEY (store_id) REFERENCES stores(store_id),
 FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO stores VALUES
(1,'Hyderabad Store'),
(2,'Delhi Store');

INSERT INTO products VALUES
(1,'Laptop'),
(2,'Mobile'),
(3,'Tablet');

INSERT INTO orders VALUES
(101,1,4),
(102,1,4),
(103,2,4);

INSERT INTO order_items VALUES
(1,101,1,5,1000,100),
(2,101,2,3,500,50),
(3,102,1,2,1000,100),
(4,103,3,4,700,70);

INSERT INTO stocks VALUES
(1,1,1,0),
(2,1,2,10),
(3,2,3,0);

SELECT
    s.store_name,
    p.product_name,
    SUM(oi.quantity) AS total_quantity_sold,
    SUM((oi.quantity * oi.list_price) - oi.discount) AS total_revenue
FROM orders o
JOIN order_items oi
    ON o.order_id = oi.order_id
JOIN stores s
    ON o.store_id = s.store_id
JOIN products p
    ON oi.product_id = p.product_id
JOIN stocks st
    ON st.store_id = o.store_id
    AND st.product_id = oi.product_id
WHERE st.quantity = 0
GROUP BY
    s.store_name,
    p.product_name;

  