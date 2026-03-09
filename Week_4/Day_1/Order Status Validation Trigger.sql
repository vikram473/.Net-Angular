
CREATE TRIGGER trg_ValidateOrderStatus
ON orders
AFTER UPDATE
AS
BEGIN
    BEGIN TRY

        -- Check invalid updates
        IF EXISTS (
            SELECT 1
            FROM inserted
            WHERE order_status = 4
            AND shipped_date IS NULL
        )
        BEGIN
            RAISERROR ('Order cannot be marked as Completed because shipped_date is NULL.',16,1);
            ROLLBACK TRANSACTION;
            RETURN;
        END

    END TRY

    BEGIN CATCH
        ROLLBACK TRANSACTION;

        DECLARE @ErrorMessage NVARCHAR(4000);
        SET @ErrorMessage = ERROR_MESSAGE();

        RAISERROR (@ErrorMessage,16,1);
    END CATCH
END;

IF EXISTS (
SELECT 1
FROM inserted
WHERE order_status = 4
AND shipped_date IS NULL
)

UPDATE orders
SET shipped_date = '2024-06-10',
order_status = 4
WHERE order_id = 101;