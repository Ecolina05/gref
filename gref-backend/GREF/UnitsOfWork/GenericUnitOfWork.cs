﻿using GREF.Intertfaces;
using GREF.Shared.Entities;
using GREF.Shared.Responses;

namespace GREF.UnitsOfWork
{
    public class GenericUnitOfWork<T> : IGenericUnitOfWork<T> where T : class
    {
        private readonly IGenericRepository<T> _repository;

        public GenericUnitOfWork(IGenericRepository<T> repository)
        {
            _repository = repository;
        }

        public async Task<Response<T>> AddAsync(T model) => await _repository.AddAsync(model);

        public async Task<Response<T>> DeleteAsync(int id) => await _repository.DeleteAsync(id);

        public async Task<Response<IEnumerable<T>>> GetAsync() => await _repository.GetAsync();

        public async Task<Response<T>> GetAsync(int id) => await _repository.GetAsync(id);

        public async Task<Response<T>> UpdateAsync(T model) => await _repository.UpdateAsync(model);
        public async Task<Response<T>> GetAsyncUserLogin(string email, string pwd) => await _repository.GetAsyncUserLogin(email, pwd);
        public async Task<Country> GetCountryAsync(int id) => await _repository.GetCountryAsync(id);
        public async Task<City> GetCitiesAsync(int id) => await _repository.GetCitiesAsync(id);
    }
}
