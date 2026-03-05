CREATE TABLE customers (
 customer_id INT PRIMARY KEY,
 first_name VARCHAR(50),
 last_name VARCHAR(50)
);
CREATE TABLE orders (
 order_id INT PRIMARY KEY,
 customer_id INT,
 order_status INT,
 order_date DATE,
 shipped_date DATE,
 required_date DATE,
 FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
CREATE TABLE archived_orders (
 order_id INT,
 customer_id INT,
 order_status INT,
 order_date DATE,
 shipped_date DATE,
 required_date DATE
);


INSERT INTO customers VALUES
(1,'John','Smith'),
(2,'Alice','Johnson'),
(3,'Michael','Brown');

INSERT INTO orders VALUES
(101,1,4,'2024-01-10','2024-01-12','2024-01-15'),
(102,1,3,'2023-01-05','2023-01-08','2023-01-10'),
(103,2,4,'2024-02-01','2024-02-05','2024-02-06'),
(104,3,1,'2024-03-01',NULL,'2024-03-05');

INSERT INTO archived_orders
SELECT *
FROM orders
WHERE order_status = 3;

DELETE FROM orders
WHERE order_status = 3
AND order_date < DATEADD(YEAR, -1, GETDATE());

SELECT customer_id
FROM customers
WHERE customer_id NOT IN
(
    SELECT customer_id
    FROM orders
    WHERE order_status <> 4
);

SELECT
order_id,
DATEDIFF(DAY, order_date, shipped_date) AS processing_delay
FROM orders
WHERE shipped_date IS NOT NULL;

SELECT
order_id,
order_date,
shipped_date,
required_date,
CASE
WHEN shipped_date > required_date THEN 'Delayed'
ELSE 'On Time'
END AS delivery_status
FROM orders
WHERE shipped_date IS NOT NULL;