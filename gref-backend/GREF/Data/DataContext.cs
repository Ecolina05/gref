using Microsoft.EntityFrameworkCore;
using GREF.Shared.Entities;
using GREF.Shared.Masters;
using System.Reflection.Metadata;

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
        public DbSet<Concepts> Concepts { get; set; }
        public DbSet<FinancialStatus> FinancialStatus { get; set; }
        public DbSet<RolType> RolType { get; set; }

        public DbSet<UserStatus> UserStatus { get; set; }

        public DbSet<User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Country>().HasIndex(c => c.Name).IsUnique();
            modelBuilder.Entity<State>().HasIndex(s => new { s.Name, s.CountryId }).IsUnique();
            modelBuilder.Entity<City>().HasIndex(c => new { c.Name, c.StateId }).IsUnique();
            modelBuilder.Entity<Concepts>().HasIndex(c => c.Name).IsUnique();
            modelBuilder.Entity<FinancialStatus>().HasIndex(c => c.Name).IsUnique();
            modelBuilder.Entity<RolType>().HasIndex(c => c.Name).IsUnique();
            modelBuilder.Entity<UserStatus>().HasIndex(c => c.Name).IsUnique();
            modelBuilder.Entity<User>().HasIndex(c => c.Document).IsUnique();
        }
    }
}
