
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEL
{
   public class NewsModel
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Text { get; set; }
        public System.DateTime CreatedAt { get; set; }
        public int Fk_User_Id { get; set; }
  
    }
}
