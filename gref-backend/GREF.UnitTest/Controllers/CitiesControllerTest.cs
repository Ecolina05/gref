using Azure;
using GREF.Controllers;
using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using GREF.Shared.Responses;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;


namespace GREF.UnitTest.Controllers
{
    [TestClass]
    public class CitiesControllerTest
    {
        private readonly DbContextOptions<DataContext> _options;
        private readonly Mock<IGenericUnitOfWork<City>> _unitOfWorkMock;

        public CitiesControllerTest()
        {
            _options = new DbContextOptionsBuilder<DataContext>().UseInMemoryDatabase(Guid.NewGuid().ToString()).Options;
            _unitOfWorkMock = new Mock<IGenericUnitOfWork<City>>();
        }

        [TestMethod]
        public async Task GetAsync_ReturnsNotFound()
        {
            //Arrange
            using var context = new DataContext(_options);
            var controller = new CitiesController(_unitOfWorkMock.Object, context);

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
            var cities = new City { Id = 1, Name = "Antioquia", StateId = 1 };

            _unitOfWorkMock.Setup(x => x.GetCitiesAsync(cities.Id)).ReturnsAsync(cities);
            
            
            var controller = new CitiesController(_unitOfWorkMock.Object, context);

            //Act
            var result = await controller.GetAsync(cities.Id) as OkObjectResult;
            //Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(200, result.StatusCode);

            //clean up
            context.Database.EnsureDeleted();
            context.Dispose();
        }
    }
}
