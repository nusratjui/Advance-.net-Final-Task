

using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BEL;

namespace BBL
{
    class UserService
    {
        public static IEnumerable<UserModel> GetAllUser()
        {
            return DataAccessFactory.UserDataAccess().Get().Select(Mapper.Map<User, UserModel>);
        }

        public static UserModel GetUserById(int id)
        {
            var _User = DataAccessFactory.UserDataAccess().Get(id);
            if (_User != null)
            {
                return Mapper.Map<User, UserModel>(_User);
            }
            else
            {
                return null;

            }
        }

        public static bool RegisterUser(UserModel user)
        {
            return DataAccessFactory.UserDataAccess().Add(Mapper.Map<UserModel, User>(user));
        }

        public static bool DeleteUserById(int id)
        {
            return DataAccessFactory.UserDataAccess().Delete(id);
        }

        public static bool EditUser(int id, UserModel user)
        {
            return DataAccessFactory.UserDataAccess().Edit(id, Mapper.Map<UserModel, User>(user));
        }
    }
}
