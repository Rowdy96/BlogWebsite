using BologWebsite2.ApplicationClasses;
using BologWebsite2.Models;
using System;


namespace BologWebsite2.Repository.User
{
    public class UserRepository : IUserRepository
    {
        public UserAc GetUser(AppUser user)
        {
            UserAc userAC = new UserAc();
            userAC.Id = user.Id;
            userAC.Name = user.Name;
            userAC.Email = user.Email;

            return userAC;
        }
    }
}
