
using GREF.Controllers;
using GREF.Data;
using GREF.Intertfaces;
using GREF.Shared.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace GREF.UnitTest.Controllers
{
    [TestClass]
    public class CountriesControllerTest
    {
        private readonly DbContextOptions<DataContext> _options;
        private readonly Mock<IGenericUnitOfWork<Country>> _unitOfWorkMock;

        public CountriesControllerTest()
        {
            _options = new DbContextOptionsBuilder<DataContext>().UseInMemoryDatabase(Guid.NewGuid().ToString()).Options;
            _unitOfWorkMock = new Mock<IGenericUnitOfWork<Country>>();
        }
        [TestMethod]
        public async Task GetAsync_ReturnsNotFound()
        {
            //Arrange
            using var context = new DataContext(_options);
            //ar response = new Mock<CityResponse>(cities);

            //_unitOfWorkMock.Setup(x => x.GetAsync(1));          
            var controller = new GenericController<Country>(_unitOfWorkMock.Object, context);

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
            // Arrange 
            using var context = new DataContext(_options);
            var country = new Country { Id = 1, Name = "test" };
            _unitOfWorkMock.Setup(x => x.GetCountryAsync(country.Id)).ReturnsAsync(country);
            var controller = new CountriesController(_unitOfWorkMock.Object, context);

            // Act
            var result = await controller.GetAsync(country.Id) as OkObjectResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(200, result.StatusCode);
            _unitOfWorkMock.Verify(x => x.GetCountryAsync(country.Id), Times.Once());

            // Clean up (if needed)
            context.Database.EnsureDeleted();

        }
    }
}
