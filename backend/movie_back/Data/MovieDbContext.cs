using Microsoft.EntityFrameworkCore;
namespace movie_back.Data
{
    /*MovieDbContext inherits from DbContext*/
    public class MovieDbContext: DbContext
    {
        /*The DbSet<Movie> Movies property is used to define a collection of Movie entities which can be queried or modified in the database.*/
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }
        public DbSet<Movie> Movies { get; set; }
    }
}

