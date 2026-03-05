--Store Wise Sales Summary--

CREATE TABLE stores (
 store_id INT PRIMARY KEY,
 store_name VARCHAR(100)
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
 quantity INT,
 list_price DECIMAL(10,2),
 FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

INSERT INTO stores VALUES
(1,'Hyderabad Store'),
(2,'Delhi Store'),
(3,'Mumbai Store');

INSERT INTO orders VALUES
(101,1,4),
(102,1,1),
(103,2,4),
(104,3,4);

INSERT INTO order_items VALUES
(1,101,2,500),
(2,101,1,700),
(3,103,3,300),
(4,104,2,800);

SELECT * FROM stores;
SELECT * FROM orders;
SELECT * FROM order_items;

SELECT
    s.store_name,
    SUM(oi.quantity * oi.list_price) AS total_sales
FROM stores s
INNER JOIN orders o
ON s.store_id = o.store_id
INNER JOIN order_items oi
ON o.order_id = oi.order_id

WHERE o.order_status = 4

GROUP BY s.store_name
ORDER BY total_sales DESC;