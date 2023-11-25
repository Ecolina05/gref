using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GREF.Controllers
{
    public class GenericController<T> : Controller where T : class
    {
        private readonly IGenericUnitOfWork<T> _unitOfWork;
        private readonly DataContext _context;
        private readonly DbSet<T> _entity;

        public GenericController(IGenericUnitOfWork<T> unitOfWork, DataContext context)
        {
            _unitOfWork = unitOfWork;
            _context = context;
            _entity = context.Set<T>();
        }
        [HttpGet()]
        public virtual async Task<IActionResult> GetAsync()
        {
            var action = await _unitOfWork.GetAsync();
            if (action != null)
            {
                return Ok(action.Result);
            }
            return NotFound();
        }

        [HttpGet("{id}")]
        public virtual async Task<IActionResult> GetAsync(int id)
        {
            var action = await _unitOfWork.GetAsync(id);
            if (action != null)
            {
                return Ok(action.Result);
            }
            return NotFound();
        }

        //[HttpGet("{id}")]
        //public virtual async Task<IActionResult> GetCountryAsync(int id)
        //{
        //    var action = await _unitOfWork.GetCountryAsync(id);
        //    if (action != null)
        //    {
        //        return Ok(action);
        //    }
        //    return NotFound();
        //}
        //[HttpGet("{id}")]
        //public virtual async Task<IActionResult> GetCitiesAsync(int id)
        //{
        //    var action = await _unitOfWork.GetCitiesAsync(id);
        //    if (action != null)
        //    {
        //        return Ok(action);
        //    }
        //    return NotFound();
        //}

        [HttpPost]
        public virtual async Task<IActionResult> PostAsync(T model)
        {
            if (model.GetType() == typeof(Users))
            {
                string? email = string.Empty;
                string? pwd = string.Empty;
                int? id = 1;

                var properties = typeof(T).GetProperties();
                foreach (var item in properties)
                {
                    if (item.Name.Equals("Id"))
                        id = (int?)item.GetValue(model);
                    if (item.Name.Equals("Email"))
                        email = (string?)item.GetValue(model);
                    if (item.Name.Equals("Pwd"))
                        pwd = (string?)item.GetValue(model);
                }

                if (id.Equals(1))
                {
                    var action1 = await _unitOfWork.GetAsyncUserLogin(email, pwd);
                    if (action1.WasSuccess)
                    {
                        return Ok(action1.Result);
                    }
                    return BadRequest(action1.Message);
                }
            }
            var action2 = await _unitOfWork.AddAsync(model);
            if (action2.WasSuccess)
            {
                return Ok(action2.Result);
            }
            return BadRequest(action2.Message);
        }

        [HttpPut]
        public virtual async Task<IActionResult> PutAsync(T model)
        {
            var action = await _unitOfWork.UpdateAsync(model);
            if (action.WasSuccess)
            {
                return Ok(action.Result);
            }
            return BadRequest(action.Message);
        }

        [HttpDelete("{id}")]
        public virtual async Task<IActionResult> DeleteAsync(int id)
        {
            var action = await _unitOfWork.GetAsync(id);
            if (!action.WasSuccess)
            {
                return NotFound();
            }
            action = await _unitOfWork.DeleteAsync(id);
            if (!action.WasSuccess)
            {
                return BadRequest(action.Message);
            }
            return NoContent();
        }
    }
}

