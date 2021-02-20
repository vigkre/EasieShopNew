using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using API.Data;
using API.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using API.Core.Interfaces;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository productRepository;

        public ProductsController(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await productRepository.GetProductsAsync();
        }

        [Route("ProductByName/{name}")]
        [HttpGet]
        public async Task<ActionResult<Product>> GetProductByName(string name)
        {
            return await productRepository.GetProductByNameAsync(name);
        }
    }
}