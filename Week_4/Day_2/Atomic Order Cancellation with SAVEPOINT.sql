USE EcommDb;
GO


CREATE OR ALTER PROCEDURE sp_CancelOrderWithSavepoint
    @order_id INT
AS
BEGIN
    BEGIN TRY
        -- Start transaction
        BEGIN TRANSACTION;

        -- Validate order exists
        IF NOT EXISTS (
            SELECT 1
            FROM orders
            WHERE order_id = @order_id
        )
        BEGIN
            RAISERROR ('Order not found.', 16, 1);
        END

        -- Validate order is not already rejected
        IF EXISTS (
            SELECT 1
            FROM orders
            WHERE order_id = @order_id
              AND order_status = 3
        )
        BEGIN
            RAISERROR ('Order is already rejected/cancelled.', 16, 1);
        END

        -- Create SAVEPOINT before stock restoration
        SAVE TRANSACTION SaveBeforeStockRestore;

        -- Validate stock records exist for all order items
        IF EXISTS (
            SELECT 1
            FROM order_items oi
            LEFT JOIN stocks s
                ON s.product_id = oi.product_id
               AND s.store_id = oi.store_id
            WHERE oi.order_id = @order_id
              AND s.stock_id IS NULL
        )
        BEGIN
            RAISERROR ('Stock restoration failed: matching stock record not found.', 16, 1);
        END

        -- Restore stock quantities based on order_items
        UPDATE s
        SET s.quantity = s.quantity + x.total_qty
        FROM stocks s
        INNER JOIN (
            SELECT
                store_id,
                product_id,
                SUM(quantity) AS total_qty
            FROM order_items
            WHERE order_id = @order_id
            GROUP BY store_id, product_id
        ) x
            ON s.store_id = x.store_id
           AND s.product_id = x.product_id;

        -- Update order status to Rejected (3)
        UPDATE orders
        SET order_status = 3
        WHERE order_id = @order_id;

        -- Commit only if all succeed
        COMMIT TRANSACTION;

        PRINT 'Order cancelled successfully. Stock restored and order marked as Rejected (3).';

    END TRY
    BEGIN CATCH
        DECLARE @ErrorMessage NVARCHAR(4000);
        SET @ErrorMessage = ERROR_MESSAGE();

        -- Rollback transaction safely
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;

        RAISERROR (@ErrorMessage, 16, 1);
    END CATCH
END;
GO

INSERT INTO customers (customer_id, first_name, last_name)
VALUES
(1, 'John', 'Smith'),
(2, 'Alice', 'Johnson');

INSERT INTO stores (store_id, store_name)
VALUES
(1, 'Hyderabad Store'),
(2, 'Delhi Store');

INSERT INTO products (product_id, product_name)
VALUES
(1, 'Laptop'),
(2, 'Mobile');

INSERT INTO stocks (stock_id, store_id, product_id, quantity)
VALUES
(1, 1, 1, 10),   -- Laptop stock in Hyderabad
(2, 1, 2, 20),   -- Mobile stock in Hyderabad
(3, 2, 1, 15);   -- Laptop stock in Delhi

INSERT INTO orders (order_id, customer_id, store_id, order_status, order_date, shipped_date, required_date)
VALUES
(101, 1, 1, 4, '2025-03-01', '2025-03-03', '2025-03-05'),
(102, 2, 1, 1, '2025-03-02', NULL, '2025-03-06');

INSERT INTO order_items (item_id, order_id, product_id, store_id, quantity, list_price, discount)
VALUES
(1001, 101, 1, 1, 2, 1000, 100),  -- 2 laptops
(1002, 101, 2, 1, 1, 500, 50),    -- 1 mobile
(1003, 102, 1, 1, 1, 1000, 100);  -- pending order

SELECT * FROM orders;
SELECT * FROM order_items;
SELECT * FROM stocks;



EXEC sp_CancelOrderWithSavepoint @order_id = 101;

SELECT * FROM orders WHERE order_id = 101;
SELECT * FROM stocks;