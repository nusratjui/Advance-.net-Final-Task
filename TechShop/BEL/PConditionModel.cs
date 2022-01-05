using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEL
{
    public class PConditionModel
    {
        public int PCId { get; set; }
        public int PId { get; set; }
        public string PCondition1 { get; set; }
        public Nullable<int> PStock { get; set; }
        public Nullable<int> PSoldquantity { get; set; }
    }
}
