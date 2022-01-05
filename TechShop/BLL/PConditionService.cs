using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BEL;
using DAL;

namespace BLL
{
    public class PConditionService
    {

        public static List< PConditionModel>GetAll()
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap< PCondition,  PConditionModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map<List< PConditionModel>>(DataAccessFactory.PConditionDataAccess().GetAll());
            return data;
        }
       

        

        public static void Delete(int id)
        {
            DataAccessFactory. PConditionDataAccess().Delete(id);
        }

        public static void Add( PConditionModel e)
        {
            var data = new Mapper(new MapperConfiguration(cfg => cfg.CreateMap<  PConditionModel,  PCondition>())).Map< PCondition>(e);
            DataAccessFactory. PConditionDataAccess().Add(data);
        }
        public static void Edit( PConditionModel e)
        {
            var data = new Mapper(new MapperConfiguration(cfg => cfg.CreateMap< PConditionModel, PCondition>())).Map< PCondition>(e);
            DataAccessFactory. PConditionDataAccess().Edit(data);
        }
        public static  PConditionModel Get(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap< PCondition,  PConditionModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map< PConditionModel>(DataAccessFactory. PConditionDataAccess().Get(id));
            return data;
        }

    }
}
