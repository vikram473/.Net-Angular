CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(100)
);
CREATE TABLE brands (
    brand_id INT PRIMARY KEY,
    brand_name VARCHAR(100)
);
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    brand_id INT,
    category_id INT,
    model_year INT,
    list_price DECIMAL(10,2),
    FOREIGN KEY (brand_id) REFERENCES brands(brand_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    city VARCHAR(50)
);
CREATE TABLE stores (
    store_id INT PRIMARY KEY,
    store_name VARCHAR(100),
    city VARCHAR(50)
);

INSERT INTO categories VALUES
(1,'Mountain Bikes'),
(2,'Road Bikes'),
(3,'Electric Bikes'),
(4,'Accessories'),
(5,'Clothing');

INSERT INTO brands VALUES
(1,'Trek'),
(2,'Giant'),
(3,'Specialized'),
(4,'Scott'),
(5,'Cannondale');

INSERT INTO products VALUES
(1,'Trek X-Caliber',1,1,2023,1200),
(2,'Giant Escape',2,2,2022,900),
(3,'Specialized Turbo',3,3,2024,2500),
(4,'Scott Helmet',4,4,2023,150),
(5,'Cannondale Jersey',5,5,2023,80);

INSERT INTO customers VALUES
(1,'John','Smith','Hyderabad'),
(2,'Alice','Johnson','Delhi'),
(3,'Michael','Brown','Hyderabad'),
(4,'Emma','Davis','Mumbai'),
(5,'David','Wilson','Delhi');

INSERT INTO stores VALUES
(1,'Hyderabad Bikes','Hyderabad'),
(2,'Delhi Wheels','Delhi'),
(3,'Mumbai Cyclery','Mumbai'),
(4,'Bangalore Bikes','Bangalore'),
(5,'Chennai Riders','Chennai');

SELECT
    p.product_name,
    b.brand_name,
    c.category_name,
    p.model_year,
    p.list_price
FROM products p
INNER JOIN brands b
ON p.brand_id = b.brand_id
INNER JOIN categories c
ON p.category_id = c.category_id;

SELECT *
FROM customers
WHERE city = 'Hyderabad';

SELECT
    c.category_name,
    COUNT(p.product_id) AS total_products
FROM categories c
LEFT JOIN products p
ON c.category_id = p.category_id
GROUP BY c.category_name;