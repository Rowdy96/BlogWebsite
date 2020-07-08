using BologWebsite2.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BologWebsite2.DataContext
{
    public class BlogWebsiteContext: IdentityDbContext
    {
        public BlogWebsiteContext(DbContextOptions<BlogWebsiteContext> options) : base(options)
        {

        }

        public DbSet<Posts> Posts { get; set; }
        public DbSet<AppUser> User { get; set; }
    }
}
