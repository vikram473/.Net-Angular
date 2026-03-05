CREATE TABLE categories (
 category_id INT PRIMARY KEY,
 category_name VARCHAR(100)
);
CREATE TABLE products (
 product_id INT PRIMARY KEY,
 product_name VARCHAR(100),
 category_id INT,
 model_year INT,
 list_price DECIMAL(10,2),
 FOREIGN KEY (category_id) REFERENCES categories(category_id)
);


INSERT INTO categories VALUES
(1,'Mountain Bikes'),
(2,'Road Bikes'),
(3,'Electric Bikes');

INSERT INTO products VALUES
(1,'Trail Master',1,2017,800),
(2,'Hill Rider',1,2018,600),
(3,'Rock Explorer',1,2019,500),

(4,'Speed Racer',2,2017,900),
(5,'Road King',2,2018,700),

(6,'Volt Bike',3,2020,1500),
(7,'Eco Ride',3,2021,1200);

SELECT
    p.product_name + ' (' + CAST(p.model_year AS VARCHAR) + ')' AS product_info,
    p.product_name,
    p.model_year,
    p.list_price,
    p.list_price -
    (
        SELECT AVG(list_price)
        FROM products
        WHERE category_id = p.category_id
    ) AS price_difference
FROM products p
WHERE p.list_price >
(
    SELECT AVG(list_price)
    FROM products
    WHERE category_id = p.category_id
);
