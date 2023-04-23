using Microsoft.AspNetCore.Mvc;
using Mission14_jjw227.Data;

namespace Mission14_jjw227.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;

        public MovieController (MoviesDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movies> Get()
        {
            var x = context.Movies.ToArray();

            return context.Movies.ToArray();
        }
    }
}
