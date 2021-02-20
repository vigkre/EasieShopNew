using System.Threading.Tasks;
using API.Core.Entities;
using System.Collections.Generic;

namespace API.Core.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductByNameAsync(string name);
        Task<List<Product>> GetProductsAsync();

    }
}