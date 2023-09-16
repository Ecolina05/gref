using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GREF.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountriesController : GenericController<Country>
    {
        private readonly DataContext _context;

        public CountriesController(IGenericUnitOfWork<Country> unitOfWork, DataContext context) : base(unitOfWork, context)
        {
            _context = context;
        }
    }
}
