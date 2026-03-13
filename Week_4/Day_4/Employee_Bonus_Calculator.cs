using System;

namespace Week_4_Day_3_Hands_On
{
    internal class Employee_Bonus_Calculator
    {
        static void Main(string[] args)
        {
            Console.Write("Enter Name: ");
            string name = Console.ReadLine() ?? "";

            Console.Write("Enter Salary: ");
            string salaryInput = Console.ReadLine() ?? "";

            Console.Write("Enter Experience: ");
            string expInput = Console.ReadLine() ?? "";

            double salary;
            int experience;

            if (!double.TryParse(salaryInput, out salary) || !int.TryParse(expInput, out experience))
            {
                Console.WriteLine("Invalid input! Please enter valid salary and experience.");
            }
            else if (salary < 0 || experience < 0)
            {
                Console.WriteLine("Salary and experience cannot be negative.");
            }
            else
            {
                double bonusPercentage = (experience >= 3) ? 0.10 : 0.05;

                double bonus = salary * bonusPercentage;
                double finalSalary = salary + bonus;

                Console.WriteLine("Employee: " + name);
                Console.WriteLine("Bonus: ₹" + bonus.ToString("F2"));
                Console.WriteLine("Final Salary: ₹" + finalSalary.ToString("F2"));
            }

            Console.ReadLine();
        }
    }
}