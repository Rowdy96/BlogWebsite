using System;
using System.Threading.Tasks;
using BologWebsite2.DataContext;
using BologWebsite2.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BologWebsite2
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot/dist/App";
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddDbContext<BlogWebsiteContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("BlogWebsiteDbContext")));
            services.AddIdentity<AppUser, IdentityRole>().AddEntityFrameworkStores<BlogWebsiteContext>();
            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors(
               options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
           );
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseDefaultFiles();
            app.UseCookiePolicy();
            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute
                (
                    name: "default",
                    template: "{controller}/{action}",
                    defaults: new { controller = "Home", action = "Index" }
                );


                routes.MapSpaFallbackRoute(
                   name: "spa-fallback",
                   defaults: new { controller = "Home", action = "Index" });
            });

            CreateRoles(serviceProvider).Wait();
        }

        private async Task CreateRoles(IServiceProvider serviceProvider)
        {
            var RoleManager = serviceProvider
                              .GetRequiredService<RoleManager<IdentityRole>>();

            var UserManager = serviceProvider.GetRequiredService<UserManager<AppUser>>();

            string[] Roles = { "Admin", "User" };

            foreach (var roleName in Roles)
            {
                try
                {
                    var roleExist = await RoleManager.RoleExistsAsync(roleName);

                    if (!roleExist)
                    {
                        await RoleManager.CreateAsync(new IdentityRole(roleName));
                    }

                }
                catch (Exception e)
                {
                    Console.Write(e.Message);
                }

            }

            var admin = await UserManager.FindByNameAsync("Admin");

            if (admin == null)
            {
                var user = new AppUser
                {
                    UserName = "Admin@gmail.com",
                    Name = "Admin",
                    Email = "Admin@gmail.com",
                    IsUserAllowedToDelete = true,
                    IsUserAllowedToEdit = true,
                    IsUserAllowedToPost = true
                };

                var password = "Admin@123";

                var result = await serviceProvider.GetRequiredService<UserManager<AppUser>>().CreateAsync(user, password);

                if (result.Succeeded)
                {
                    await serviceProvider.GetRequiredService<UserManager<AppUser>>().AddToRoleAsync(user, "Admin");
                }

            }
        }
    }
}
