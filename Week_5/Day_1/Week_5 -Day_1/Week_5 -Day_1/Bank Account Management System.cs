using System;

namespace Dotnet_Csharp_Problems.oops
{
    internal class Bank_Account_Management_System
    {
        class BankAccount
        {
            // Private fields
            private string accountNumber;
            private double balance;

            // Public property for Account Number
            public string AccountNumber
            {
                get { return accountNumber; }
                set { accountNumber = value; }
            }

            // Public property for Balance (Read only outside)
            public double Balance
            {
                get { return balance; }
                private set { balance = value; }
            }

            // Constructor
            public BankAccount(string accNo, double initialBalance)
            {
                accountNumber = accNo;
                balance = initialBalance;
            }

            // Deposit method
            public void Deposit(double amount)
            {
                if (amount > 0)
                {
                    Balance += amount;
                    Console.WriteLine("Deposit Successful!");
                    Console.WriteLine("Current Balance = " + Balance);
                }
                else
                {
                    Console.WriteLine("Invalid deposit amount!");
                }
            }

            // Withdraw method
            public void Withdraw(double amount)
            {
                if (amount <= 0)
                {
                    Console.WriteLine("Invalid withdrawal amount!");
                }
                else if (amount > Balance)
                {
                    Console.WriteLine("Insufficient balance!");
                }
                else
                {
                    Balance -= amount;
                    Console.WriteLine("Withdrawal Successful!");
                    Console.WriteLine("Current Balance = " + Balance);
                }
            }
        }

        static void Main(string[] args)
        {
            BankAccount account = new BankAccount("ACC1001", 0);

            account.Deposit(5000);
            account.Withdraw(2000);

            Console.ReadLine();
        }
    }
}