CREATE PROCEDURE sp_TotalSalesPerStore
AS
BEGIN
    SELECT
        s.store_name,
        SUM(oi.quantity * oi.list_price) AS total_sales
    FROM orders o
    INNER JOIN stores s
        ON o.store_id = s.store_id
    INNER JOIN order_items oi
        ON o.order_id = oi.order_id
    GROUP BY s.store_name;
END;

CREATE PROCEDURE sp_OrdersByDateRange
    @start_date DATE,
    @end_date DATE
AS
BEGIN
    SELECT
        order_id,
        customer_id,
        store_id,
        order_date
    FROM orders
    WHERE order_date BETWEEN @start_date AND @end_date;
END;


CREATE FUNCTION fn_TotalPriceAfterDiscount
(
    @price DECIMAL(10,2),
    @discount DECIMAL(10,2)
)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @final_price DECIMAL(10,2);

    SET @final_price = @price - @discount;

    RETURN @final_price;
END;

SELECT dbo.fn_TotalPriceAfterDiscount(1000,100) AS final_price;

CREATE FUNCTION fn_Top5SellingProducts()
RETURNS TABLE
AS
RETURN
(
    SELECT TOP 5
        p.product_name,
        SUM(oi.quantity) AS total_quantity_sold
    FROM order_items oi
    INNER JOIN products p
        ON oi.product_id = p.product_id
    GROUP BY p.product_name
    ORDER BY total_quantity_sold DESC
);

SELECT * FROM dbo.fn_Top5SellingProducts();

EXEC sp_TotalSalesPerStore;

SELECT
product_name,
dbo.fn_TotalPriceAfterDiscount(list_price,100)
FROM products;

