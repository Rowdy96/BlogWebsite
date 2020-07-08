using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BologWebsite2.Models;
using Microsoft.AspNetCore.Identity;
using BologWebsite2.ApplicationClasses;

namespace BologWebsite2.Controllers
{
    public class HomeController : Controller
    {
        private UserManager<AppUser> _userManager { get; set; }
        private SignInManager<AppUser> _signInManager { get; set; }
        private RoleManager<IdentityRole> _roleManager { get; set; }

        public HomeController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;

        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginAc model)
        {
            if (ModelState.IsValid)
            {

                var result = await _signInManager.PasswordSignInAsync(model.Email,
                                                                      model.Password
                                                                      , model.RememberMe
                                                                      , false);
                if (result.Succeeded)
                {
                    return RedirectToAction("Index");
                }

                ModelState.AddModelError("", "Invalid Login Attempt");

            }

            return View(model);
        }

        [HttpGet("Signin")]
        public IActionResult Signin()
        {
            return View();
        }

        [HttpPost("Signin")]
        public async Task<IActionResult> Signin(SigninAc model)
        {
            if (ModelState.IsValid)
            {
                var user = new AppUser
                {
                    UserName = model.Email,
                    Name = model.Name,
                    Email = model.Email
                };
                var result = await _userManager.CreateAsync(user, model.Password);
                await _userManager.AddToRoleAsync(user, "user");

                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    return RedirectToAction("Index");
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
            }

            return View();
        }

        [Route("Logout")]
        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Login", "Home");
        }


        [Route("GetCurrentUser")]
        [HttpGet("GetCurrentUser")]
        public async Task<AppUser> GetCurrentUser()
        {
            var username = User.Identity.Name;
            AppUser user = await _userManager.FindByNameAsync(username);
            return user;
        }

    }
}
