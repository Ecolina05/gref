using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GREF.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : GenericController<User>
    {
        private readonly DataContext _context;

        public UserController(IGenericUnitOfWork<User> unitOfWork, DataContext context) : base(unitOfWork, context)
        {
            _context = context;
        }
    }
}
