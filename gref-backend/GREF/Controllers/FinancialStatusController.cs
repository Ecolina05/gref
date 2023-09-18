using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using GREF.Shared.Masters;
using Microsoft.AspNetCore.Mvc;

namespace GREF.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FinancialStatusController:GenericController<FinancialStatus>
    {
        private readonly DataContext _context;

        public FinancialStatusController(IGenericUnitOfWork<FinancialStatus> unitOfWork, DataContext context) : base(unitOfWork, context)
        {
            _context = context;
        }
    }
}
