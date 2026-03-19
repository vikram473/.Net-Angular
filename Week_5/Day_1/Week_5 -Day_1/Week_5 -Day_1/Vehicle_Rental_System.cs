using System;

namespace Dotnet_Csharp_Problems.oops
{
    internal class Vehicle_Rental_System
    {
        // Base Class
        class Vehicle
        {
            private string brand;
            private double rentalRatePerDay;

            // Property for Brand
            public string Brand
            {
                get { return brand; }
                set { brand = value; }
            }

            // Property for RentalRatePerDay
            public double RentalRatePerDay
            {
                get { return rentalRatePerDay; }
                set
                {
                    if (value < 0)
                    {
                        Console.WriteLine("Rental rate cannot be negative.");
                    }
                    else
                    {
                        rentalRatePerDay = value;
                    }
                }
            }

            // Constructor
            public Vehicle(string brand, double rentalRatePerDay)
            {
                Brand = brand;
                RentalRatePerDay = rentalRatePerDay;
            }

            // Virtual Method
            public virtual double CalculateRental(int days)
            {
                if (days <= 0)
                {
                    Console.WriteLine("Invalid rental days.");
                    return 0;
                }

                return RentalRatePerDay * days;
            }
        }

        // Derived Class Car
        class Car : Vehicle
        {
            public Car(string brand, double rentalRatePerDay) : base(brand, rentalRatePerDay) { }

            public override double CalculateRental(int days)
            {
                if (days <= 0)
                {
                    Console.WriteLine("Invalid rental days.");
                    return 0;
                }

                return (RentalRatePerDay * days) + 500;
            }
        }

        // Derived Class Bike
        class Bike : Vehicle
        {
            public Bike(string brand, double rentalRatePerDay) : base(brand, rentalRatePerDay) { }

            public override double CalculateRental(int days)
            {
                if (days <= 0)
                {
                    Console.WriteLine("Invalid rental days.");
                    return 0;
                }

                double total = RentalRatePerDay * days;
                return total - (total * 0.05);
            }
        }

        static void Main(string[] args)
        {
            Vehicle v1 = new Car("Toyota", 2000);
            Vehicle v2 = new Bike("Honda", 1000);

            Console.WriteLine("Car Total Rental = " + v1.CalculateRental(3));
            Console.WriteLine("Bike Total Rental = " + v2.CalculateRental(3));

            Console.ReadLine();
        }
    }
}