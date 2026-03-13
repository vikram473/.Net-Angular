using System;

namespace Week_4_day_4
{
    // Class for student result analysis
    internal class StudentResultAnalyzer
    {
        // Method using out parameters to return total and average
        public void CalculateResult(int m1, int m2, int m3, out int totalMarks, out double averageMarks)
        {
            totalMarks = m1 + m2 + m3;
            averageMarks = totalMarks / 3.0;
        }
    }

    // Only one Program class and one Main method in the project
    internal class Program
    {
        static void Main(string[] args)
        {
            StudentResultAnalyzer analyzer = new StudentResultAnalyzer();

            Console.Write("Enter number of students: ");
            int studentCount = Convert.ToInt32(Console.ReadLine());

            for (int i = 1; i <= studentCount; i++)
            {
                Console.WriteLine("\nStudent " + i);

                int m1 = ReadValidMark("Enter mark for Subject 1: ");
                int m2 = ReadValidMark("Enter mark for Subject 2: ");
                int m3 = ReadValidMark("Enter mark for Subject 3: ");

                // Variables for out parameters
                int total;
                double average;

                // Call method using out parameters
                analyzer.CalculateResult(m1, m2, m3, out total, out average);

                // Determine pass/fail
                string resultStatus;
                if (average >= 40)
                {
                    resultStatus = "Pass";
                }
                else
                {
                    resultStatus = "Fail";
                }

                // Display output
                Console.WriteLine("Total Marks = " + total);
                Console.WriteLine("Average Marks = " + average);
                Console.WriteLine("Result = " + resultStatus);
            }
        }

        // Method for input validation (marks must be between 0 and 100)
        static int ReadValidMark(string message)
        {
            int mark;

            while (true)
            {
                Console.Write(message);
                mark = Convert.ToInt32(Console.ReadLine());

                if (mark >= 0 && mark <= 100)
                {
                    return mark;
                }
                else
                {
                    Console.WriteLine("Invalid input! Marks must be between 0 and 100.");
                }
            }
        }
    }
}