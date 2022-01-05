using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class PConditionRepo : IRepository<PCondition,int>
    {
        Entities db;
        public PConditionRepo(Entities db)
        {
            this.db = db;
        }

        public void Add( PCondition e)
        {
            db. PConditions.Add(e);
          //  db.SaveChanges();


            try
            {
                db.SaveChanges();
            }
            catch (System.Data.Entity.Validation.DbEntityValidationException dbEx)
            {
                Exception raise = dbEx;
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        string message = string.Format("{0}:{1}",
                        validationErrors.Entry.Entity.ToString(),
                        validationError.ErrorMessage);
                        // raise a new exception nesting
                        // the current instance as InnerException
                        raise = new InvalidOperationException(message, raise);
                    }
                }
                throw raise;
            }
        }

        public List< PCondition> GetAll()
        {
            return db. PConditions.ToList();
        }

        public  PCondition Get(int id)
        {
            return db. PConditions.FirstOrDefault(e => e.PCId == id);
        }

        public void Edit( PCondition e)
        {
            var emp = db. PConditions.FirstOrDefault(em => em.PCId == e.PCId);
            db.Entry(emp).CurrentValues.SetValues(e);
            db.SaveChanges();
        }

        public void Delete(int id)
        {
            var emp = db. PConditions.FirstOrDefault(e => e.PCId == id);
            db. PConditions.Remove(emp);
            db.SaveChanges();
        }

        public List< PCondition> Gets(int id)
        {
            throw new NotImplementedException();
        }

        public List< PCondition> Getorder(int id)
        {
            throw new NotImplementedException();
        }
    }
}
