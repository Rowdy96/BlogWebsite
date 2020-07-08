using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace BologWebsite2.Models
{
    public class AppUser: IdentityUser
    {
        public string Name { get; set; }
        public bool IsUserAllowedToPost { get; set; }
        public bool IsUserAllowedToDelete { get; set; }
        public bool IsUserAllowedToEdit { get; set; }

        public ICollection<Posts> Posts { get; set; }
    }
}
