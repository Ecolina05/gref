using GREF.Shared.Entities;
using GREF.Shared.Responses;
using Microsoft.EntityFrameworkCore.Update;

namespace GREF.Intertfaces
{
    public interface IGenericUnitOfWork<T> where T : class
    {
        Task<Response<IEnumerable<T>>> GetAsync();

        Task<Response<T>> AddAsync(T model);

        Task<Response<T>> UpdateAsync(T model);

        Task<Response<T>> DeleteAsync(int id);

        Task<Response<T>> GetAsync(int id);
        Task<Response<T>> GetAsyncUserLogin(string email, string pwd);

        Task<Country> GetCountryAsync(int id);
        Task<City> GetCitiesAsync(int id);
        Task<Grupos> GetGruposAsync(int id);
    }
}
