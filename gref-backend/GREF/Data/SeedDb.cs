using GREF.Services;
using Microsoft.EntityFrameworkCore;

namespace GREF.Data
{
    public class SeedDb
    {
        private readonly DataContext _context;
        private readonly IApiService _apiService;

        public SeedDb(DataContext context, IApiService apiService)
        {
            _context = context;
            _apiService = apiService;
        }

        public async Task SeedAsync()
        {
            await _context.Database.EnsureCreatedAsync();
            //await CheckCountriesAsync();
            //await CheckCategoriesAsync();
        }
    }
}
