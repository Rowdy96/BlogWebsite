using System.ComponentModel.DataAnnotations;


namespace BologWebsite2.ApplicationClasses
{
    public class SigninAc
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Display(Name = "Confirm Password")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "error in match")]
        public string ConfirmPassword { get; set; }
    }
}
