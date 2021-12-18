using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using BLL;
using BEL;

namespace Newsportal.Controllers
{
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("Api/User")]
        public IHttpActionResult CreateUser(UserModel user)
        {
            if (ModelState.IsValid)
            {
                UserService.RegisterUser(user);
                return Ok("Inserted ");
            }
        }
        [HttpDelete]
        [Route("Api/User/{id}")]
        public IHttpActionResult DeleteUser(int id)
        {
            var status = UserService.DeleteUserById(id);
            if (status)
            {
                return Ok("Removed");
            }      
        }
        [HttpPut]
        [Route("Api/User/{id}")]
        public IHttpActionResult UpdateUser(int id, UserModel user)
        {
            if (ModelState.IsValid)
            {
                var status = UserService.EditUser(id, user);
                if (status)
                {
                    return Ok("Updated");
                }
            }
        }
        [HttpGet]
        [Route("Api/User")]
        public IHttpActionResult GetUser()
        {
            var _users = UserService.GetAllUser();
            if (_users == null)
            {
                return NotFound();
            }
        }
        [HttpGet]
        [Route("Api/User/{id}")]
        public IHttpActionResult GetUser(int id)
        {
            var _user = UserService.GetUserById(id);
            if (_user == null)
            {
                return NotFound();
            }
        }
     
    }
}
