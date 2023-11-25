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
        private readonly IGenericUnitOfWork<Country> _unitOfWork;
        private readonly DataContext _context;

        public CountriesController(IGenericUnitOfWork<Country> unitOfWork, DataContext context) : base(unitOfWork, context)
        {
            _context = context;
            _unitOfWork = unitOfWork;
        }

        //[HttpGet("{id}")]
        //public override async Task<IActionResult> GetAsync(int id)
        //{
        //    var country = await _context.Countries.FindAsync(id);
        //    if (country == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(country);
        //}

        [HttpGet("{id}")]
        public override async Task<IActionResult> GetAsync(int id)
        {
            var country = await _unitOfWork.GetCountryAsync(id);
            if (country == null)
            {
                return NotFound();
            }
            return Ok(country);
        }



    }
}
