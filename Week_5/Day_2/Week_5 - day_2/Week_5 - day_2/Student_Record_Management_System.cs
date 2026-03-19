using System;
using System.Collections.Generic;

namespace Dotnet_Csharp_Problems.RecordProblems
{
    internal class Student_Record_Management_System
    {
        // Structure to store student details
        struct Student
        {
            public int RollNumber;
            public string Name;
            public string Course;
            public int Marks;
        }

        static void Main(string[] args)
        {
            List<Student> students = new List<Student>();

            Console.Write("Enter number of students: ");
            int n = Convert.ToInt32(Console.ReadLine());

            // Input student records
            for (int i = 0; i < n; i++)
            {
                Student s = new Student();

                Console.WriteLine("\nEnter details for Student " + (i + 1) + ":");

                // Roll Number validation
                while (true)
                {
                    Console.Write("Enter Roll Number: ");
                    if (int.TryParse(Console.ReadLine(), out s.RollNumber) && s.RollNumber > 0)
                        break;
                    else
                        Console.WriteLine("Invalid Roll Number! Please enter a positive integer.");
                }

                Console.Write("Enter Name: ");
                s.Name = Console.ReadLine();

                Console.Write("Enter Course: ");
                s.Course = Console.ReadLine();

                // Marks validation
                while (true)
                {
                    Console.Write("Enter Marks: ");
                    if (int.TryParse(Console.ReadLine(), out s.Marks) && s.Marks >= 0 && s.Marks <= 100)
                        break;
                    else
                        Console.WriteLine("Invalid Marks! Please enter between 0 and 100.");
                }

                students.Add(s);
            }

            // Display all records
            Console.WriteLine("\nStudent Records:");
            foreach (Student s in students)
            {
                Console.WriteLine("Roll No: " + s.RollNumber + " | Name: " + s.Name + " | Course: " + s.Course + " | Marks: " + s.Marks);
            }

            // Search functionality
            Console.Write("\nSearch Roll Number: ");
            int searchRoll = Convert.ToInt32(Console.ReadLine());

            bool found = false;

            foreach (Student s in students)
            {
                if (s.RollNumber == searchRoll)
                {
                    Console.WriteLine("\nSearch Result:");
                    Console.WriteLine("Student Found:");
                    Console.WriteLine("Roll No: " + s.RollNumber + " | Name: " + s.Name + " | Course: " + s.Course + " | Marks: " + s.Marks);
                    found = true;
                    break;
                }
            }

            if (!found)
            {
                Console.WriteLine("\nSearch Result:");
                Console.WriteLine("Student record not found.");
            }

            Console.ReadLine();
        }
    }
}