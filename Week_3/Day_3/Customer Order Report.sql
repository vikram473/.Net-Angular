--Customer Order Report--

CREATE TABLE customers (
 customer_id INT PRIMARY KEY,
 first_name VARCHAR(50),
 last_name VARCHAR(50)
);

CREATE TABLE orders (
 order_id INT PRIMARY KEY,
 customer_id INT,
 order_date DATE,
 order_status INT,
 FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers (customer_id, first_name, last_name) VALUES
(1, 'John', 'Smith'),
(2, 'Alice', 'Johnson'),
(3, 'Michael', 'Brown'),
(4, 'Emma', 'Davis'),
(5, 'David', 'Wilson');

INSERT INTO orders (order_id, customer_id, order_date, order_status) VALUES
(101, 1, '2025-02-01', 1),
(102, 2, '2025-02-05', 4),
(103, 3, '2025-02-08', 2),
(104, 1, '2025-02-10', 1),
(105, 4, '2025-02-12', 4),
(106, 5, '2025-02-15', 3),
(107, 2, '2025-02-18', 1);

SELECT * FROM customers;
SELECT * FROM orders;

SELECT
    c.first_name,
    c.last_name,
    o.order_id,
    o.order_date,
    o.order_status
FROM customers c
INNER JOIN orders o
ON c.customer_id = o.customer_id

WHERE o.order_status = 1
   OR o.order_status = 4

ORDER BY o.order_date DESC;