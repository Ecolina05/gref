using Microsoft.EntityFrameworkCore;
using GREF.Shared.Entities;


namespace GREF.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<City> Cities { get; set; }

        public DbSet<Country> Countries { get; set; }

        public DbSet<State> States { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Country>().HasIndex(c => c.Name).IsUnique();
            modelBuilder.Entity<State>().HasIndex(s => new { s.Name, s.CountryId }).IsUnique();
            modelBuilder.Entity<City>().HasIndex(c => new { c.Name, c.StateId }).IsUnique();
        }
    }
}
