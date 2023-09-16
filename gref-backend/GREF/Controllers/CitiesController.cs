using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GREF.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CitiesController : GenericController<City>
    {
        private readonly DataContext _context;

        public CitiesController(IGenericUnitOfWork<City> unitOfWork, DataContext context) : base(unitOfWork, context)
        {
            _context = context;
        }    
        

    }
}
