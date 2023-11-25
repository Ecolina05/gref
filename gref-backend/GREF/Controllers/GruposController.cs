using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GREF.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GruposController : GenericController<Grupos>
    {
        private readonly IGenericUnitOfWork<Grupos> _unitOfWork;
        private readonly DataContext _context;

        public GruposController(IGenericUnitOfWork<Grupos> unitOfWork, DataContext context) : base(unitOfWork, context)
        {
            _context = context;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public override async Task<IActionResult> GetAsync()
        {
            return Ok(await _context.Grupos
                .Include(c => c.Id)
                .ToListAsync());
        }

        [HttpGet("{id}")]
        public override async Task<IActionResult> GetAsync(int id)
        {
            var country = await _unitOfWork.GetGruposAsync(id);
            if (country == null)
            {
                return NotFound();
            }
            return Ok(country);
        }
    }
}
