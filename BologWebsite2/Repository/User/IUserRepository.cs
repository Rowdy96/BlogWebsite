using BologWebsite2.ApplicationClasses;
using BologWebsite2.Models;


namespace BologWebsite2.Repository
{
    interface IUserRepository
    {
        UserAc GetUser(AppUser user);
    }
}
