using System;

namespace Dotnet_Csharp_Problems.oops
{
    internal class Bank_Account_with_Encapsulation
    {
        // Private field
        private double balance;

        // Public method to deposit amount
        public void Deposit(double amount)
        {
            if (amount > 0)
            {
                balance += amount;
                Console.WriteLine("Deposited Amount = " + amount);
            }
            else
            {
                Console.WriteLine("Invalid deposit amount!");
            }
        }

        // Public method to withdraw amount
        public void Withdraw(double amount)
        {
            if (amount <= 0)
            {
                Console.WriteLine("Invalid withdrawal amount!");
            }
            else if (amount > balance)
            {
                Console.WriteLine("Insufficient balance!");
            }
            else
            {
                balance -= amount;
                Console.WriteLine("Withdrawn Amount = " + amount);
            }
        }

        // Public method to get current balance
        public double GetBalance()
        {
            return balance;
        }

        static void Main(string[] args)
        {
            Bank_Account_with_Encapsulation account = new Bank_Account_with_Encapsulation();

            // Sample Input
            account.Deposit(1000);
            account.Withdraw(300);

            // Display balance
            Console.WriteLine("Current Balance = " + account.GetBalance());

            Console.ReadLine();
        }
    }
}