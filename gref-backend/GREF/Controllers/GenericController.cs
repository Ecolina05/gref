﻿using GREF.Data;
using GREF.Intertfaces;
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
        [HttpGet("{id}")]
        public virtual async Task<IActionResult> GetAsync(int id)
        {
            var action = await _unitOfWork.GetAsync(id);
            if (action.WasSuccess)
            {
                return Ok(action.Result);
            }
            return NotFound();
        }

        [HttpPost]
        public virtual async Task<IActionResult> PostAsync(T model)
        {
            var action = await _unitOfWork.AddAsync(model);
            if (action.WasSuccess)
            {
                return Ok(action.Result);
            }
            return BadRequest(action.Message);
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
