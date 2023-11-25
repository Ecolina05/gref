using GREF.Controllers;
using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GREF.UnitTest.Controllers
{
    [TestClass]
    public class GruposControllerTest
    {
        private readonly DbContextOptions<DataContext> _options;
        private readonly Mock<IGenericUnitOfWork<Grupos>> _unitOfWorkMock;

        public GruposControllerTest()
        {
            _options = new DbContextOptionsBuilder<DataContext>().UseInMemoryDatabase(Guid.NewGuid().ToString()).Options;
            _unitOfWorkMock = new Mock<IGenericUnitOfWork<Grupos>>();
        }
        [TestMethod]
        public async Task GetAsync_ReturnsNotFound()
        {
            //Arrange
            using var context = new DataContext(_options);
            var controller = new GruposController(_unitOfWorkMock.Object, context);

            //Act
            var result = await controller.GetAsync(1) as NotFoundResult;
            //Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(404, result.StatusCode);

            //clean up
            context.Database.EnsureDeleted();
            context.Dispose();
        }

        [TestMethod]
        public async Task GetAsync_ReturnsRecord()
        {

            //Arrange
            using var context = new DataContext(_options);
            var grupos = new Grupos { Id=1, NombreGrupo="familia", Descripcion="familia"};

            _unitOfWorkMock.Setup(x => x.GetGruposAsync(grupos.Id)).ReturnsAsync(grupos);

            var controller = new GruposController(_unitOfWorkMock.Object, context);

            //Act
            var result = await controller.GetAsync(grupos.Id) as OkObjectResult;
            //Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(200, result.StatusCode);

            //clean up
            context.Database.EnsureDeleted();
            context.Dispose();
        }
    }
}
