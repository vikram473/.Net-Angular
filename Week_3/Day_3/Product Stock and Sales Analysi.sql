--Product Stock and Sales Analysi--
CREATE TABLE products (
 product_id INT PRIMARY KEY,
 product_name VARCHAR(100)
);
CREATE TABLE stores (
 store_id INT PRIMARY KEY,
 store_name VARCHAR(100)
);
CREATE TABLE stocks (
 stock_id INT PRIMARY KEY,
 product_id INT,
 store_id INT,
 quantity INT,
 FOREIGN KEY (product_id) REFERENCES products(product_id),
 FOREIGN KEY (store_id) REFERENCES stores(store_id)
);
CREATE TABLE order_items (
 item_id INT PRIMARY KEY,
 product_id INT,
 store_id INT,
 quantity INT,
 FOREIGN KEY (product_id) REFERENCES products(product_id),
 FOREIGN KEY (store_id) REFERENCES stores(store_id)
);


INSERT INTO products VALUES
(1,'Laptop'),
(2,'Mobile'),
(3,'Tablet');
INSERT INTO stores VALUES
(1,'Hyderabad Store'),
(2,'Delhi Store');
INSERT INTO stocks VALUES
(1,1,1,20),
(2,2,1,15),
(3,3,1,10),
(4,1,2,12),
(5,2,2,18);
INSERT INTO order_items VALUES
(1,1,1,5),
(2,1,1,3),
(3,2,1,4),
(4,1,2,6);


SELECT
    p.product_name,
    s.store_name,
    st.quantity AS available_stock,
    SUM(oi.quantity) AS total_quantity_sold
FROM stocks st
INNER JOIN products p
ON st.product_id = p.product_id
INNER JOIN stores s
ON st.store_id = s.store_id
LEFT JOIN order_items oi
ON st.product_id = oi.product_id
AND st.store_id = oi.store_id

GROUP BY
    p.product_name,
    s.store_name,
    st.quantity
ORDER BY
    p.product_name;