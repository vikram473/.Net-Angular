using System;
using System.Collections.Generic;
using System.Linq;

namespace Dotnet_Csharp_Problems.LinqProblems
{
    internal class Product_Linq_Queries
    {
        class Product
        {
            public int ProductCode { get; set; }
            public string ProductName { get; set; }
            public string Category { get; set; }
            public double Mrp { get; set; }
        }

        static void DisplayProducts(IEnumerable<Product> products)
        {
            foreach (var p in products)
            {
                Console.WriteLine("Code: " + p.ProductCode + " | Name: " + p.ProductName + " | Category: " + p.Category + " | Mrp: " + p.Mrp);
            }
        }

        static void Main(string[] args)
        {
            List<Product> products = new List<Product>()
            {
                new Product { ProductCode = 101, ProductName = "Soap", Category = "FMCG", Mrp = 25 },
                new Product { ProductCode = 102, ProductName = "Rice", Category = "Grain", Mrp = 60 },
                new Product { ProductCode = 103, ProductName = "Oil", Category = "FMCG", Mrp = 120 },
                new Product { ProductCode = 104, ProductName = "Wheat", Category = "Grain", Mrp = 45 },
                new Product { ProductCode = 105, ProductName = "Shampoo", Category = "FMCG", Mrp = 80 }
            };

            // 1. Products with category "FMCG"
            Console.WriteLine("1. Products with Category FMCG:");
            var fmcgProducts = products.Where(p => p.Category == "FMCG");
            DisplayProducts(fmcgProducts);

            // 2. Products with category "Grain"
            Console.WriteLine("\n2. Products with Category Grain:");
            var grainProducts = products.Where(p => p.Category == "Grain");
            DisplayProducts(grainProducts);

            // 3. Sort by ProductCode ascending
            Console.WriteLine("\n3. Products sorted by ProductCode ascending:");
            var sortByCode = products.OrderBy(p => p.ProductCode);
            DisplayProducts(sortByCode);

            // 4. Sort by Category ascending
            Console.WriteLine("\n4. Products sorted by Category ascending:");
            var sortByCategory = products.OrderBy(p => p.Category);
            DisplayProducts(sortByCategory);

            // 5. Sort by Mrp ascending
            Console.WriteLine("\n5. Products sorted by Mrp ascending:");
            var sortByMrpAsc = products.OrderBy(p => p.Mrp);
            DisplayProducts(sortByMrpAsc);

            // 6. Sort by Mrp descending
            Console.WriteLine("\n6. Products sorted by Mrp descending:");
            var sortByMrpDesc = products.OrderByDescending(p => p.Mrp);
            DisplayProducts(sortByMrpDesc);

            // 7. Group by Category
            Console.WriteLine("\n7. Products grouped by Category:");
            var groupByCategory = products.GroupBy(p => p.Category);
            foreach (var group in groupByCategory)
            {
                Console.WriteLine("Category: " + group.Key);
                DisplayProducts(group);
            }

            // 8. Group by Mrp
            Console.WriteLine("\n8. Products grouped by Mrp:");
            var groupByMrp = products.GroupBy(p => p.Mrp);
            foreach (var group in groupByMrp)
            {
                Console.WriteLine("Mrp: " + group.Key);
                DisplayProducts(group);
            }

            // 9. Highest price product in FMCG category
            Console.WriteLine("\n9. Highest price product in FMCG category:");
            var highestFmcg = products
                .Where(p => p.Category == "FMCG")
                .OrderByDescending(p => p.Mrp)
                .FirstOrDefault();

            if (highestFmcg != null)
            {
                Console.WriteLine("Code: " + highestFmcg.ProductCode + " | Name: " + highestFmcg.ProductName + " | Category: " + highestFmcg.Category + " | Mrp: " + highestFmcg.Mrp);
            }

            // 10. Count of total products
            Console.WriteLine("\n10. Total products count: " + products.Count());

            // 11. Count of total FMCG products
            Console.WriteLine("11. Total FMCG products count: " + products.Count(p => p.Category == "FMCG"));

            // 12. Max price
            Console.WriteLine("12. Max price: " + products.Max(p => p.Mrp));

            // 13. Min price
            Console.WriteLine("13. Min price: " + products.Min(p => p.Mrp));

            // 14. All products below Rs.30
            Console.WriteLine("14. Are all products below Rs.30? " + products.All(p => p.Mrp < 30));

            // 15. Any products below Rs.30
            Console.WriteLine("15. Is any product below Rs.30? " + products.Any(p => p.Mrp < 30));

            Console.ReadLine();
        }
    }
}