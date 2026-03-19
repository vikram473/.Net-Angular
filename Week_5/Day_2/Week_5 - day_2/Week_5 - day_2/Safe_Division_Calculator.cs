using System;

namespace Dotnet_Csharp_Problems.ExceptionHandling
{
    internal class Safe_Division_Calculator
    {
        class Calculator
        {
            public void Divide(int numerator, int denominator)
            {
                try
                {
                    int result = numerator / denominator;
                    Console.WriteLine("Result = " + result);
                }
                catch (DivideByZeroException)
                {
                    Console.WriteLine("Error: Cannot divide by zero");
                }
                finally
                {
                    Console.WriteLine("Operation completed safely");
                }
            }
        }

        static void Main(string[] args)
        {
            Calculator calc = new Calculator();

            Console.Write("Enter Numerator: ");
            int numerator = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter Denominator: ");
            int denominator = Convert.ToInt32(Console.ReadLine());

            calc.Divide(numerator, denominator);

            Console.ReadLine();
        }
    }
}