using GREF.Shared.Entities;
using GREF.Shared.Responses;

namespace GREF.Intertfaces
{
    public interface IGenericRepository<T> where T : class
    {
        Task<Response<T>> GetAsync(int id);

        Task<Response<IEnumerable<T>>> GetAsync();

        Task<Response<T>> AddAsync(T entity);

        Task<Response<T>> DeleteAsync(int id);

        Task<Response<T>> UpdateAsync(T entity);
        Task<Response<T>> GetAsyncUserLogin(string email, string pwd);

        Task<Country> GetCountryAsync(int id);
        Task<City> GetCitiesAsync(int id);
        Task<Grupos> GetGruposAsync(int id);
    }
}
