USE EcommDb;

CREATE TABLE #OrderRevenue
(
    order_id INT,
    store_id INT,
    revenue DECIMAL(10,2)
);

BEGIN TRY

    BEGIN TRANSACTION

    DECLARE @order_id INT
    DECLARE @store_id INT
    DECLARE @revenue DECIMAL(10,2)

    -- Declare cursor
    DECLARE order_cursor CURSOR FOR
    SELECT order_id, store_id
    FROM orders
    WHERE order_status = 4;

    OPEN order_cursor

    FETCH NEXT FROM order_cursor
    INTO @order_id, @store_id

    WHILE @@FETCH_STATUS = 0
    BEGIN

        -- Calculate revenue for each order
        SELECT @revenue =
        SUM((quantity * list_price) - discount)
        FROM order_items
        WHERE order_id = @order_id;

        -- Insert result into temp table
        INSERT INTO #OrderRevenue
        VALUES (@order_id, @store_id, ISNULL(@revenue,0));

        FETCH NEXT FROM order_cursor
        INTO @order_id, @store_id

    END

    CLOSE order_cursor
    DEALLOCATE order_cursor

    COMMIT TRANSACTION

END TRY

BEGIN CATCH

    ROLLBACK TRANSACTION

    DECLARE @ErrorMessage NVARCHAR(4000)
    SET @ErrorMessage = ERROR_MESSAGE()

    RAISERROR(@ErrorMessage,16,1)

END CATCH

SELECT
    s.store_name,
    SUM(r.revenue) AS total_store_revenue
FROM #OrderRevenue r
JOIN stores s
ON r.store_id = s.store_id
GROUP BY s.store_name;