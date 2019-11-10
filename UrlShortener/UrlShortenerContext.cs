using System;
using Microsoft.EntityFrameworkCore;

namespace UrlShortener
{
    public class UrlShortenerContext: DbContext
    {
        public UrlShortenerContext(DbContextOptions<UrlShortenerContext> context) : base(context)
        {
        }

        public DbSet<Url> Urls { get; set; }
    }
    
    public class Url
    {
        public int id { get; set; }
        public string long_url { get; set; }
        public string short_url { get; set; }
        public DateTime created { get; set; }
        public DateTime updated { get; set; }
    }
}