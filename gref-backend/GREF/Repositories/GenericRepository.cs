﻿using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using GREF.Shared.Responses;
using Microsoft.EntityFrameworkCore;

namespace GREF.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly DataContext _context;
        private readonly DbSet<T> _entity;

        public GenericRepository(DataContext context)
        {
            _context = context;
            _entity = context.Set<T>();
        }

        public async Task<Response<T>> AddAsync(T entity)
        {
            _context.Add(entity);
            try
            {
                await _context.SaveChangesAsync();
                return new Response<T>
                {
                    WasSuccess = true,
                    Result = entity
                };
            }
            catch (DbUpdateException dbUpdateException)
            {
                return DbUpdateExceptionResponse(dbUpdateException);
            }
            catch (Exception exception)
            {
                return ExceptionResponse(exception);
            }
        }

        public async Task<Response<T>> DeleteAsync(int id)
        {
            var row = await _entity.FindAsync(id);
            if (row != null)
            {
                _entity.Remove(row);
                await _context.SaveChangesAsync();
                return new Response<T>
                {
                    WasSuccess = true,
                };
            }
            return new Response<T>
            {
                WasSuccess = false,
                Message = "Registro no encontrado"
            };
        }

        public async Task<Response<T>> GetAsync(int id)
        {
            var row = await _entity.FindAsync(id);
            if (row != null)
            {
                return new Response<T>
                {
                    WasSuccess = true,
                    Result = row
                };
            }
            return new Response<T>
            {
                WasSuccess = false,
                Message = "Registro no encontrado"
            };
        }
        public async Task<Country> GetCountryAsync(int id)
        {
            var country = await _context.Countries
                    .Include(c => c.States!)
                    .ThenInclude(s => s.Cities)
                    .FirstOrDefaultAsync(c => c.Id == id);
            return country!;
        }

        public async Task<City> GetCitiesAsync(int id)
        {
            var country = await _context.Cities
                    .Include(c => c.Id!)
                    .FirstOrDefaultAsync(c => c.Id == id);
            return country!;
        }
        public async Task<Grupos> GetGruposAsync(int id)
        {
            var grupos = await _context.Grupos
                    .Include(c => c.Id!)
                    .FirstOrDefaultAsync(c => c.Id == id);
            return grupos!;
        }

        public async Task<Response<T>> GetAsyncUserLogin(string email, string pwd)
        {
            var row = await _context.Users.FirstOrDefaultAsync(x => x.Email == email && x.Pwd == pwd);
            if (row != null)
            {
                return new Response<T>
                {
                    WasSuccess = true,
                    Result = (T)Convert.ChangeType(row, typeof(T))
                };
            }
            return new Response<T>
            {
                WasSuccess = false,
                Message = "Registro no encontrado"
            };
        }

        public async Task<Response<IEnumerable<T>>> GetAsync()
        {
            return new Response<IEnumerable<T>>
            {
                WasSuccess = true,
                Result = await _entity.ToListAsync()
            };
        }

        public async Task<Response<T>> UpdateAsync(T entity)
        {
            try
            {
                _context.Update(entity);
                await _context.SaveChangesAsync();
                return new Response<T>
                {
                    WasSuccess = true,
                    Result = entity
                };
            }
            catch (DbUpdateException dbUpdateException)
            {
                return DbUpdateExceptionResponse(dbUpdateException);
            }
            catch (Exception exception)
            {
                return ExceptionResponse(exception);
            }
        }

        private Response<T> ExceptionResponse(Exception exception)
        {
            return new Response<T>
            {
                WasSuccess = false,
                Message = exception.Message
            };
        }

        private Response<T> DbUpdateExceptionResponse(DbUpdateException dbUpdateException)
        {
            if (dbUpdateException.InnerException!.Message.Contains("duplicate"))
            {
                return new Response<T>
                {
                    WasSuccess = false,
                    Message = "Ya existe el registro que estas intentando crear."
                };
            }
            else
            {
                return new Response<T>
                {
                    WasSuccess = false,
                    Message = dbUpdateException.InnerException.Message
                };
            }
        }
    }
}
