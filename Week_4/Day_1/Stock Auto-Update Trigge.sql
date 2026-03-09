
CREATE TRIGGER trg_UpdateStockAfterOrder
ON order_items
AFTER INSERT
AS
BEGIN
    BEGIN TRY

        -- Check if stock is insufficient
        IF EXISTS (
            SELECT 1
            FROM stocks s
            JOIN inserted i
            ON s.product_id = i.product_id
            AND s.store_id = i.store_id
            WHERE s.quantity < i.quantity
        )
        BEGIN
            RAISERROR ('Stock is insufficient for this product.',16,1);
            ROLLBACK TRANSACTION;
            RETURN;
        END

        -- Update stock if sufficient
        UPDATE s
        SET s.quantity = s.quantity - i.quantity
        FROM stocks s
        JOIN inserted i
        ON s.product_id = i.product_id
        AND s.store_id = i.store_id;

    END TRY

    BEGIN CATCH
        ROLLBACK TRANSACTION;

        DECLARE @ErrorMessage NVARCHAR(4000)
        SET @ErrorMessage = ERROR_MESSAGE()

        RAISERROR (@ErrorMessage,16,1)
    END CATCH
END;

IF EXISTS (...)

RAISERROR ('Stock is insufficient',16,1);
ROLLBACK TRANSACTION;

UPDATE stocks
SET quantity = quantity - ordered_quantity

INSERT INTO order_items
(item_id,order_id,product_id,store_id,quantity,list_price,discount)
VALUES
(10,101,1,1,3,1000,100);