﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ProductRepo : IRepository<Product, int>
    {

        Entities db;
        public ProductRepo(Entities db)
        {
            this.db = db;
        }
        public void Add(Product e)
        {
            db.Products.Add(e);
            db.SaveChanges();
        }

        public void Delete(int id)
        {
            var emp = db.Products.FirstOrDefault(e => e.PId == id);
            db.Products.Remove(emp);
            db.SaveChanges();
        }

        public void Edit(Product e)
        {
            var emp = db.Products.FirstOrDefault(em => em.PId == e.PId);
            db.Entry(emp).CurrentValues.SetValues(e);
            db.SaveChanges();
        }

        public Product Get(int id)
        {
            return db.Products.FirstOrDefault(e => e.PId == id);
        }

        public List<Product> GetAll()
        {
            return db.Products.ToList();
        }

        public List<Product> Getorder(int id)
        {
            throw new NotImplementedException();
        }

        public List<Product> Gets(int id)
        {
            throw new NotImplementedException();
        }

  
    }
}
