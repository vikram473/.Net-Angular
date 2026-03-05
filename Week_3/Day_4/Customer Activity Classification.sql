CREATE TABLE customers (
 customer_id INT PRIMARY KEY,
 first_name VARCHAR(50),
 last_name VARCHAR(50)
);
CREATE TABLE orders (
 order_id INT PRIMARY KEY,
 customer_id INT,
 order_value DECIMAL(10,2),
 FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers VALUES
(1,'John','Smith'),
(2,'Alice','Johnson'),
(3,'Michael','Brown'),
(4,'Emma','Davis'),
(5,'David','Wilson');

INSERT INTO orders VALUES
(101,1,4000),
(102,1,3000),
(103,2,6000),
(104,3,12000);

SELECT
    c.first_name + ' ' + c.last_name AS full_name,
    total_value,
    CASE
        WHEN total_value > 10000 THEN 'Premium'
        WHEN total_value BETWEEN 5000 AND 10000 THEN 'Regular'
        ELSE 'Basic'
    END AS customer_category
FROM customers c
INNER JOIN
(
    SELECT customer_id, SUM(order_value) AS total_value
    FROM orders
    GROUP BY customer_id
) t
ON c.customer_id = t.customer_id

UNION

SELECT
    c.first_name + ' ' + c.last_name AS full_name,
    NULL AS total_value,
    'No Orders' AS customer_category
FROM customers c
WHERE c.customer_id NOT IN
(
    SELECT customer_id FROM orders
);