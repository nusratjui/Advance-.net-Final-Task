using BEL;
using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace TechShop.Controllers
{
    [EnableCors("*","*","*")]
    public class PConditionController : ApiController
    {
       
        [Route("api/PCondition/All")]
        [HttpGet]
        public List<PConditionModel>GetAll()
        {
            return PConditionService.GetAll();
        }

      

        [Route("api/Pcondition/delete/{id}")]
        [HttpPost]
        public void Delete(int id)
        {
            PConditionService.Delete(id);
        }


        [Route("api/Pcondition/get/{id}")]
        [HttpGet]
        public PConditionModel Get(int id)
        {
            return PConditionService.Get(id);
        }


        [Route("api/Pcondition/add")]
        [HttpPost]
        public void Add(PConditionModel e)
        {
            PConditionService.Add(e);
        }

        [Route("api/Pcondition/edit")]
        [HttpPost]

        public void Edit(PConditionModel e)
        {
            PConditionService.Edit(e);
        }
    }
}
