﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public  interface SRepository<T,ID>
    {
       

       List<T> Gets(ID id);
        //    List<T> Gets(T e);
    }
}
