using System.Collections.Generic;


namespace BologWebsite2.ApplicationClasses
{
    public class UserAc
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public ICollection<string> Roles { get; set; }
        public bool IsUserAllowedToPost { get; set; }
        public bool IsUserAllowedToDelete { get; set; }
        public bool IsUserAllowedToEdit { get; set; }
    }
}
