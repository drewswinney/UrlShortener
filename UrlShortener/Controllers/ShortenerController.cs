using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace UrlShortener.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ShortenerController : ControllerBase
    {
        private readonly UrlShortenerContext _context;
        private static Random random = new Random();
        
        public ShortenerController(UrlShortenerContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<string>> GetShort(string long_url)
        {
            var shortUrl = RandomString(6);
            Url url = new Url() { long_url = long_url, short_url = shortUrl, created = DateTime.Now, updated = DateTime.Now } ;


            if (_context.Urls.Where(u => u.long_url == long_url).Any())
            {
                return _context.Urls.Where(u => u.long_url == long_url).FirstOrDefault().short_url;
            }

            _context.Urls.Add(url);
            _context.SaveChanges();
            return shortUrl;
        }
        
        [HttpGet]
        public async Task<ActionResult<string>> GetLong(string short_url)
        {
            if (!_context.Urls.Where(url => url.short_url == short_url).Any())
            {
                return NotFound();
            }

            return _context.Urls.Where(url => url.short_url == short_url).FirstOrDefault().long_url;
        }
        
            
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}