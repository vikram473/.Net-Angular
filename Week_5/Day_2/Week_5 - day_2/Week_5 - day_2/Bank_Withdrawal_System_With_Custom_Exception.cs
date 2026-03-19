using System;

namespace Dotnet_Csharp_Problems.ExceptionHandling
{
    // Custom Exception Class
    public class InsufficientBalanceException : Exception
    {
        public InsufficientBalanceException(string message) : base(message)
        {
        }
    }

    internal class Bank_Withdrawal_System_With_Custom_Exception
    {
        class BankAccount
        {
            private double balance;

            // Constructor
            public BankAccount(double balance)
            {
                this.balance = balance;
            }

            // Withdraw Method
            public void Withdraw(double amount)
            {
                if (amount <= 0)
                {
                    throw new Exception("Withdrawal amount must be greater than zero.");
                }

                if (amount > balance)
                {
                    throw new InsufficientBalanceException("Withdrawal amount exceeds available balance.");
                }

                balance -= amount;
                Console.WriteLine("Withdrawal Successful!");
                Console.WriteLine("Remaining Balance = " + balance);
            }
        }

        static void Main(string[] args)
        {
            try
            {
                Console.Write("Enter Balance: ");
                double balance = Convert.ToDouble(Console.ReadLine());

                Console.Write("Enter Withdraw Amount: ");
                double amount = Convert.ToDouble(Console.ReadLine());

                BankAccount account = new BankAccount(balance);
                account.Withdraw(amount);
            }
            catch (InsufficientBalanceException ex)
            {
                Console.WriteLine("Error: " + ex.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: " + ex.Message);
            }
            finally
            {
                Console.WriteLine("Transaction completed.");
            }

            Console.ReadLine();
        }
    }
}