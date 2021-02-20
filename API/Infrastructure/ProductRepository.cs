using System.Collections.Generic;
using System.Threading.Tasks;
using API.Core.Entities;
using API.Core.Interfaces;
using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Infrastructure
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext context;

        public ProductRepository(DataContext context)
        {
            this.context = context;
        }
        public async Task<Product> GetProductByNameAsync(string name)
        {
            return await context.Products.FirstOrDefaultAsync(p => p.Name == name);
        }

        public async Task<List<Product>> GetProductsAsync()
        {
            return await context.Products.ToListAsync();
        }
    }
}