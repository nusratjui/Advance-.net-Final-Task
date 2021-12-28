import React, { useEffect, useState } from 'react';
import CustomerDetails from './CustomerDetails/CustomerDetails';
import './ManageCustomer.css';
// import CustomerUpdate from './CustomerUpdate/CustomerUpdate';


const ManageCustomer = () => {
    const [managers, setManagers] = useState([]);
    useEffect(() => {
         fetch('https://localhost:44344/api/Customer/All')
         .then(res => res.json())
         .then(result => setManagers(result))
         }, [managers])
         const handleDelete=(id)=>{
              console.log(id);
              const proceed=window.confirm(`Are you sure, To delete ,id is ${id}`);
              if(proceed){
              fetch(`https://localhost:44344/api/Customer/delete/${id}`,{
              method: 'POST'
              })
              .then(res => res.json())
              .then(data=>{
              if(data.deletedCount>0){
              alert('Deleted Successfully');
              const remainingManagers= managers.filter(emp => emp._id !== id)
              setManagers(remainingManagers)
              }
              })
              }
              }
return (
<div className="container">
  <div className="row">
     <div className="col-lg-12">
        <div className="main-box clearfix">
           <div className="table-responsive">
              <table className="table user-list">
                 <thead>
                    <tr>
                       <th><span>Customer ID</span></th>
                       <th><span>Customer Name</span></th>
                       <th className="text-center"><span>Customer Email</span></th>
                       <th><span>Customer Address</span></th>
                       <th>&nbsp;</th>
                    </tr>
                 </thead>
                 <tbody>
                 {
                    Object.keys(managers).length !== 0 &&
                    managers.map(manager =>
                    <tr key={manager.CId}>
                       <td>
                          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                          <a href="#" className="user-link">{manager.CId}</a>
                          {/* <span className="user-subhead">Manager</span> */}
                       </td>
                       <td>
                        <p>  {manager.CName}</p>  
                       </td>
                       <td className="text-center">
                          <span className="label label-default">{manager.CEmail}</span>
                       </td>
                       <td>
                          <a href="#">{manager.CAddress}</a>
                       </td>
                       <td style={{ width: '20%' }}>
                       <div className="table-link d-flex">
                            {/* View Details  */}
                             <CustomerDetails EmpID={manager.CId}></CustomerDetails>
                             {/* <CustomerUpdate EmpID={manager.CId}></CustomerUpdate> */}
                             {/* Delete Manager  */}
                             <span className="fa-stack" onClick= {()=> handleDelete(manager.CId)}>
                             <i className="fa fa-square fa-stack-2x"></i>
                             <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </div>
                            </td>
                            </tr>
                    )}
                 </tbody>
              </table>
              {/* <DeliverymanAdd></DeliverymanAdd> */}
           </div>
        </div>
     </div>
  </div>
</div>
);
};


export default ManageCustomer;