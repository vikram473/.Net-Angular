CREATE TABLE brands (
 brand_id INT PRIMARY KEY,
 brand_name VARCHAR(50)
);

CREATE TABLE categories (
 category_id INT PRIMARY KEY,
 category_name VARCHAR(50)
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

INSERT INTO brands VALUES
(1,'Nike'),
(2,'Adidas'),
(3,'Puma');

INSERT INTO categories VALUES
(1,'Shoes'),
(2,'Clothing'),
(3,'Accessories');

INSERT INTO products VALUES
(1,'Running Shoes',1,1,2023,800),
(2,'Sports T-Shirt',2,2,2022,400),
(3,'Training Shoes',3,1,2024,650),
(4,'Jacket',2,2,2023,900),
(5,'Cap',1,3,2022,300);

SELECT * FROM brands;
SELECT * FROM categories;
SELECT * FROM products;

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
ON p.category_id = c.category_id

WHERE p.list_price > 500
ORDER BY p.list_price ASC;