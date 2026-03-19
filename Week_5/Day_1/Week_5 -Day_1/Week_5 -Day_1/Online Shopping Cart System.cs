using System;

namespace Dotnet_Csharp_Problems.oops
{
    internal class Online_Shopping_Cart_System
    {
        // Base class
        class Product
        {
            // Private fields
            private string name;
            private double price;

            // Public property for Name
            public string Name
            {
                get { return name; }
                set { name = value; }
            }

            // Public property for Price with validation
            public double Price
            {
                get { return price; }
                set
                {
                    if (value >= 0)
                    {
                        price = value;
                    }
                    else
                    {
                        Console.WriteLine("Price cannot be negative!");
                    }
                }
            }

            // Constructor
            public Product(string name, double price)
            {
                Name = name;
                Price = price;
            }

            // Virtual method
            public virtual double CalculateDiscount()
            {
                return Price;
            }
        }

        // Derived class Electronics
        class Electronics : Product
        {
            public Electronics(string name, double price) : base(name, price)
            {
            }

            public override double CalculateDiscount()
            {
                return Price - (Price * 0.05);
            }
        }

        // Derived class Clothing
        class Clothing : Product
        {
            public Clothing(string name, double price) : base(name, price)
            {
            }

            public override double CalculateDiscount()
            {
                return Price - (Price * 0.15);
            }
        }

        static void Main(string[] args)
        {
            Product product1 = new Electronics("Laptop", 20000);
            Product product2 = new Clothing("Shirt", 2000);

            Console.WriteLine("Electronics Final Price after 5% discount = " + product1.CalculateDiscount());
            Console.WriteLine("Clothing Final Price after 15% discount = " + product2.CalculateDiscount());

            Console.ReadLine();
        }
    }
}