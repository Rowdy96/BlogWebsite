using BologWebsite2.DataContext;
using BologWebsite2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BologWebsite2.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class PostsController : Controller
    {
        private readonly BlogWebsiteContext _context;

        public PostsController(BlogWebsiteContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Posts> GetAllPosts()
        {
            return _context.Posts.ToList();
        }

        [HttpGet("{id}")]
        public async Task<Posts> GetPost([FromRoute] int id)
        {
            return await _context.Posts.Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        [HttpPost]
        public async Task<IActionResult> CreatePost([FromBody] Posts post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            post.CreationDate = DateTime.Now;

            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();
            return Ok(post);

        }

        [HttpPut]
        public async Task<IActionResult> EditPost([FromBody] Posts post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
             _context.Posts.Update(post);
            await _context.SaveChangesAsync();
            return Ok(post);

        }

        [HttpDelete("{postId}")]
        public async Task<IActionResult> DeletePost([FromRoute] int postId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Posts deletepost = _context.Posts.FirstOrDefault(x=>x.Id == postId);

            if (deletepost == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(deletepost);
            await _context.SaveChangesAsync();

            return Ok(deletepost);

        }

    }
}
