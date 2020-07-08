using System;

namespace BologWebsite2.Models
{
    public class Posts
    {
        public int Id { get; set; }
        public String PostDescription { get; set; }
        public DateTime CreationDate { get; set; }
        public string UserId { get; set; }
        public AppUser User { get; set; }
    }
}
