using Microsoft.AspNetCore.Mvc;
using movie_back.Data;

namespace movie_back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //this is an api endpoint named movie
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            //where ensures the edited field = yes and the order by lists the titles alphabetically
            var x = context.Movies.ToArray();
            return context.Movies
                .Where(mt => mt.Edited == "Yes")
                .OrderBy(mt => mt.Title)
                .ToArray();
            //inbetween movieTimes and .ToArray thta is where you can put .Where and other sorting things!
        }
    }
}
