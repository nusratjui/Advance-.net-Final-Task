﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public  interface IRepository<T,ID>
    {
        void Add(T e);

        List<T>GetAll();

        T Get(ID id);

        void Edit(T e);
        void Delete(ID id);

        List<T> Gets(ID id);

        List<T> Getorder(ID id);
    }
}
