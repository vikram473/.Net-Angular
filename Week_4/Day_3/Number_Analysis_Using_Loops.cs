using System;

namespace Week_4_Day_3_Hands_On
{
    internal class Number_Analysis_Using_Loops
    {
        static void Main(string[] args)
        {
            // Accept input
            Console.Write("Enter Number: ");
            string input = Console.ReadLine() ?? "";

            int n;

            // Validate input
            if (!int.TryParse(input, out n))
            {
                Console.WriteLine("Invalid input! Please enter a valid integer.");
            }
            else if (n <= 0)
            {
                Console.WriteLine("Please enter a number greater than 0.");
            }
            else
            {
                int evenCount = 0;
                int oddCount = 0;
                int sum = 0;

                // Loop from 1 to N
                for (int i = 1; i <= n; i++)
                {
                    sum += i;

                    if (i % 2 == 0)
                    {
                        evenCount++;
                    }
                    else
                    {
                        oddCount++;
                    }
                }

                // Display results
                Console.WriteLine("Even Count: " + evenCount);
                Console.WriteLine("Odd Count: " + oddCount);
                Console.WriteLine("Sum: " + sum);
            }

            Console.ReadLine();
        }
    }
}