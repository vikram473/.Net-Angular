using System;

namespace Week_4_Day_3_Hands_On
{
    internal class Student_Grade_Evaluator
    {
        static void Main(string[] args)
        {
            // Accept student name
            Console.Write("Enter Name: ");
            string name = Console.ReadLine() ?? "";

            // Accept student marks
            Console.Write("Enter Marks: ");
            string input = Console.ReadLine() ?? "";

            int marks;

            // Validate numeric input
            if (!int.TryParse(input, out marks))
            {
                Console.WriteLine("Invalid input! Please enter numeric marks.");
            }
            // Validate range
            else if (marks < 0 || marks > 100)
            {
                Console.WriteLine("Invalid Marks! Please enter marks between 0 and 100.");
            }
            else
            {
                string grade;

                // Determine grade using if-else
                if (marks >= 90)
                {
                    grade = "A";
                }
                else if (marks >= 75)
                {
                    grade = "B";
                }
                else if (marks >= 60)
                {
                    grade = "C";
                }
                else if (marks >= 40)
                {
                    grade = "D";
                }
                else
                {
                    grade = "Fail";
                }

                // Display result
                Console.WriteLine("Student: " + name);
                Console.WriteLine("Grade: " + grade);
            }

            Console.ReadLine();
        }
    }
}
