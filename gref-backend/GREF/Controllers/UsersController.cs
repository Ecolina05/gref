using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GREF.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : GenericController<Users>
    {
        private readonly DataContext _context;

        public UsersController(IGenericUnitOfWork<Users> unitOfWork, DataContext context) : base(unitOfWork, context)
        {
            _context = context;
        }
    }
}
