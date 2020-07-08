using BologWebsite2.ApplicationClasses;
using BologWebsite2.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using BologWebsite2.DataContext;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace BologWebsite2.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly BlogWebsiteContext _context;
        public UsersController(SignInManager<AppUser> signInManager
                              , UserManager<AppUser> userManager
                              , BlogWebsiteContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetLoggedInUSer()
        {

            var username = User.Identity.Name;
            if (username == null)
            {
                return RedirectToAction("Login", "Account");
            }
            else
            {
                AppUser user = await _userManager.FindByNameAsync(username);
                var userRoles = await _userManager.GetRolesAsync(user);
                UserAc userAC = new UserAc
                {
                    Id = user.Id,
                    Name = user.Name,
                    Email = user.Email,
                    Roles = userRoles,
                    IsUserAllowedToDelete =user.IsUserAllowedToDelete,
                    IsUserAllowedToEdit = user.IsUserAllowedToEdit,
                    IsUserAllowedToPost = user.IsUserAllowedToPost
                };

                return Ok(userAC);
            }
        }

        [HttpGet]

        public async Task<IActionResult> GetUserList()
        {
            List<AppUser> usersACs = await _context.User.Where(x=>x.Email != "Admin@gmail.com").ToListAsync();

            return Ok(usersACs);
        }

        [HttpPut]
        public async Task<IActionResult> GivePermission([FromBody] AppUser appUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _context.User.Update(appUser);
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }
    }
}
