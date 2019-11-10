using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Moq;
using UrlShortener.Controllers;
using Xunit;

namespace UrlShortener.Tests
{
    public class ShortenerTests
    {
        [Fact]
        public async void GetShortShouldReturnSuccessIfExists()
        {
            var longUrl =
                "https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8";
            var shortUrl = "XJF4FR";
            
            //Arrange
            var connection = new SqliteConnection("DataSource=:memory:");
            connection.Open();

            try
            {
                var options = new DbContextOptionsBuilder<UrlShortenerContext>()
                    .UseSqlite(connection)
                    .Options;

                using (var context = new UrlShortenerContext(options))
                {
                    context.Database.EnsureCreated();
                }

                using (var context = new UrlShortenerContext(options))
                {
                    context.Urls.Add(new Url()
                        {created = DateTime.Now, long_url = longUrl, short_url = shortUrl, updated = DateTime.Now});
                    context.SaveChanges();
                }
                
                using (var context = new UrlShortenerContext(options))
                {
                    //Act
                    ShortenerController controller = new ShortenerController(context);
                    string result = (await controller.GetShort(longUrl)).Value;
                
                    //Assert
                    Assert.Equal(shortUrl, result);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        
        [Fact]
        public async void GetLongShouldReturnSuccessIfExists()
        {
            var longUrl =
                "https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8";
            var shortUrl = "XJF4FR";
            
            //Arrange
            var connection = new SqliteConnection("DataSource=:memory:");
            connection.Open();

            try
            {
                var options = new DbContextOptionsBuilder<UrlShortenerContext>()
                    .UseSqlite(connection)
                    .Options;

                using (var context = new UrlShortenerContext(options))
                {
                    context.Database.EnsureCreated();
                }

                using (var context = new UrlShortenerContext(options))
                {
                    context.Urls.Add(new Url()
                        {created = DateTime.Now, long_url = longUrl, short_url = shortUrl, updated = DateTime.Now});
                    context.SaveChanges();
                }
                
                using (var context = new UrlShortenerContext(options))
                {
                    //Act
                    ShortenerController controller = new ShortenerController(context);
                    string result = (await controller.GetLong(shortUrl)).Value;
                
                    //Assert
                    Assert.Equal(longUrl, result);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Fact]
        public async void GetShortShouldReturnSuccessIfNotExists()
        { 
            var longUrl =
                "https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8";
            var shortUrl = "XJF4FR";
            
            //Arrange
            var connection = new SqliteConnection("DataSource=:memory:");
            connection.Open();

            try
            {
                var options = new DbContextOptionsBuilder<UrlShortenerContext>()
                    .UseSqlite(connection)
                    .Options;

                using (var context = new UrlShortenerContext(options))
                {
                    context.Database.EnsureCreated();
                }

                using (var context = new UrlShortenerContext(options))
                {
                    //Act
                    ShortenerController controller = new ShortenerController(context);

                    string result = (await controller.GetShort(longUrl)).Value;

                    Assert.NotNull(result);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Fact]
        public async void GetLongShouldReturnNotFoundIfExists()
        {
            var shortUrl = "XJF4FR";
            
            //Arrange
            var connection = new SqliteConnection("DataSource=:memory:");
            connection.Open();

            try
            {
                var options = new DbContextOptionsBuilder<UrlShortenerContext>()
                    .UseSqlite(connection)
                    .Options;

                using (var context = new UrlShortenerContext(options))
                {
                    context.Database.EnsureCreated();
                }

                using (var context = new UrlShortenerContext(options))
                {
                    //Act
                    ShortenerController controller = new ShortenerController(context);

                    ActionResult result = (await controller.GetLong(shortUrl)).Result;

                    Assert.IsType<NotFoundResult>(result);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}