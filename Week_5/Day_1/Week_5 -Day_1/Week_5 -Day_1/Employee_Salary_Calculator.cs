using System;

namespace Dotnet_Csharp_Problems.oops
{
    internal class Employee_Salary_Calculator
    {
        // Base class
        class Employee
        {
            // Properties
            public string Name { get; set; }
            public double BaseSalary { get; set; }

            // Constructor
            public Employee(string name, double baseSalary)
            {
                Name = name;
                BaseSalary = baseSalary;
            }

            // Virtual method
            public virtual double CalculateSalary()
            {
                return BaseSalary;
            }
        }

        // Derived class Manager
        class Manager : Employee
        {
            public Manager(string name, double baseSalary) : base(name, baseSalary)
            {
            }

            public override double CalculateSalary()
            {
                return BaseSalary + (BaseSalary * 0.20);
            }
        }

        // Derived class Developer
        class Developer : Employee
        {
            public Developer(string name, double baseSalary) : base(name, baseSalary)
            {
            }

            public override double CalculateSalary()
            {
                return BaseSalary + (BaseSalary * 0.10);
            }
        }

        static void Main(string[] args)
        {
            Employee emp1 = new Manager("Ravi", 50000);
            Employee emp2 = new Developer("Kiran", 50000);

            Console.WriteLine("Manager Salary = " + emp1.CalculateSalary());
            Console.WriteLine("Developer Salary = " + emp2.CalculateSalary());

            Console.ReadLine();
        }
    }
}