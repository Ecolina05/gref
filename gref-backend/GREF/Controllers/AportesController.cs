using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GREF.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AportesController : GenericController<Aportes>
    {
        private readonly IGenericUnitOfWork<Aportes> _unitOfWork;
        private readonly DataContext _context;

        public AportesController(IGenericUnitOfWork<Aportes> unitOfWork, DataContext context) : base(unitOfWork, context)
        {
            _context = context;
            _unitOfWork = unitOfWork;
        }
        //[HttpGet]
        //public override async Task<IActionResult> GetAsync()
        //{
        //    return Ok(await _context.Aportes
        //        .Include(c => c.Id)
        //        .ToListAsync());
        //}

        //[HttpGet("{id}")]
        //public override async Task<IActionResult> GetAsync(int id)
        //{
        //    var country = await _unitOfWork.GetCitiesAsync(id);
        //    if (country == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(country);
        //}
    }
}
