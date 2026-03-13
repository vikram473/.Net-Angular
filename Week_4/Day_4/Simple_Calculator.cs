using System;

namespace Week_4_Day_3_Hands_On
{
    internal class Simple_Calculator
    {
        static void Main(string[] args)
        {
            // Accept first number
            Console.Write("Enter First Number: ");
            string firstInput = Console.ReadLine() ?? "";

            // Accept second number
            Console.Write("Enter Second Number: ");
            string secondInput = Console.ReadLine() ?? "";

            // Accept operator
            Console.Write("Enter Operator (+, -, *, /): ");
            string op = Console.ReadLine() ?? "";

            double num1, num2;

            // Validate number inputs
            if (!double.TryParse(firstInput, out num1) || !double.TryParse(secondInput, out num2))
            {
                Console.WriteLine("Invalid input! Please enter valid numbers.");
            }
            else
            {
                switch (op)
                {
                    case "+":
                        Console.WriteLine("Result: " + (num1 + num2));
                        break;

                    case "-":
                        Console.WriteLine("Result: " + (num1 - num2));
                        break;

                    case "*":
                        Console.WriteLine("Result: " + (num1 * num2));
                        break;

                    case "/":
                        if (num2 == 0)
                        {
                            Console.WriteLine("Error: Division by zero is not allowed.");
                        }
                        else
                        {
                            Console.WriteLine("Result: " + (num1 / num2));
                        }
                        break;

                    default:
                        Console.WriteLine("Invalid operator! Please use +, -, *, / only.");
                        break;
                }
            }

            Console.ReadLine();
        }
    }
}
