using Microsoft.EntityFrameworkCore;

namespace Mission14_jjw227.Data
{
    public class MoviesDbContext : DbContext
    {
        public MoviesDbContext (DbContextOptions<MoviesDbContext> options) : base(options)
        { 
        
        }

        public DbSet<Movies> Movies { get; set; }
    }
}
