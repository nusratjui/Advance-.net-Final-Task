import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const DeliverymanUpdate = (props) => {
  
const [isOpen, setIsOpen] = React.useState(false);
const [ID,SetID]=useState('');
const [employeeDetails, setemployeeDetails] = useState([]);
const { register, handleSubmit, formState: { errors } ,reset} = useForm();
const showModal = (Id) => {
setIsOpen(true);
console.log(Id);
SetID(Id);
fetch(`https://localhost:44344/api/Deliveryman/get/${Id}`)
.then(res=>res.json())
.then(res => {
    setemployeeDetails(res);
    //reset();
})
};
const hideModal = () => {
setIsOpen(false);
//reset();
};
const onSubmitEdit = data => {
console.log(data);
const url=`https://localhost:44344/api/Deliveryman/edit`;
fetch(url, {
method: 'POST',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
.then(res => res.json())
.then(data => {
alert(data);
//reset();
})
alert("Edited Successfully");
hideModal();
}
return (
<div>
   <>
   <span className="fa-stack" onClick={()=>showModal(props.EmpID)}>
   <i className="fa fa-square fa-stack-2x"></i>
   <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
   </span>
   <Modal show={isOpen} onHide={hideModal} size="lg">
      <Modal.Header>
         <Modal.Title>Assign Order to DeliveryMan</Modal.Title>
         <button onClick={hideModal} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </Modal.Header>
      <Modal.Body>
         <div className="main-body">
            <div className="row gutters-sm">
               <div className="col-md-4 mb-3">
                  <div className="card">
                     <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                           <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                           <div className="mt-3">
                              <h4>{employeeDetails.DName}</h4>
                              <p className="text-secondary mb-1">{employeeDetails.DId}</p>
                              <p className="text-muted font-size-sm">{employeeDetails.DStatus}</p>
                              {/* <button className="btn btn-outline-primary">Message</button> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-8">
                  <div className="card mb-3">
                     <div className="card-body">
                        Form WIll be Added Here
                        {Object.keys(employeeDetails).length !==0 && 
                        <form onSubmit={handleSubmit(onSubmitEdit)}>
                           <label htmlFor="DId" className="form-label mt-2" hidden>Employee ID</label>
                           <input className="form-control" id="DId" type="hidden" {...register("DId", { required: true })} placeholder="" defaultValue={`${employeeDetails.DId}`}/>
                           {errors.DId && 
                           <p className="text-danger">This field is required</p>
                           }
                           <label htmlFor="DOrderid" className="form-label mt-2">Deliveryman assigned order id</label>
                           <input className="form-control" id="DOrderid" {...register("DOrderid", { required: true })} placeholder="" defaultValue={`${employeeDetails.DOrderid}`}/>
                           {errors.DOrderid && 
                           <p className="text-danger">This field is required</p>
                           }
                           <label htmlFor="DEmail" className="form-label mt-2" hidden>Manager Email</label>
                           <input className="form-control" id="DEmail" type="hidden" {...register("DEmail", { required: true })} placeholder=""  defaultValue={`${employeeDetails.DEmail}`}/>
                           {errors.DEmail && 
                           <p className="text-danger">This field is required</p>
                           }
                           <label htmlFor="DPassword" className="form-label mt-2" hidden>Manager Password</label>
                           <input className="form-control" id="DPassword"  type="hidden" {...register("DPassword", { required: true })} placeholder=""  defaultValue={`${employeeDetails.DPassword}`}/>
                           {errors.DPassword && 
                           <p className="text-danger">This field is required</p>
                           }
                           <label htmlFor="DSchedule" className="form-label mt-2" >Deliveryman Schedule</label>
                           <input className="form-control" id="DSchedule" {...register("DSchedule", { required: true })} placeholder=""  defaultValue={`${employeeDetails.DSchedule}`}/>
                           {errors.DSchedule && 
                           <p className="text-danger">This field is required</p>
                           }
                           <label htmlFor="DSalary" className="form-label mt-2">Deliveryman Salary</label>
                           <input className="form-control" id="DSalary" {...register("DSalary", { required: true })} placeholder=""  defaultValue={`${employeeDetails.DSalary}`}/>
                           {errors.DSalary && 
                           <p className="text-danger">This field is required</p>
                           }
                           {/* <input className="form-control " id="MPicture" {...register("MPicture", { required: true })} placeholder=""  defaultValue={`${employeeDetails.MPicture}`}/> */}
                           <label htmlFor="DPhone" className="form-label mt-2" hidden>Manager BasicSalary</label>
                           <input className="form-control" id="DPhone" type="hidden" {...register("DPhone", { required: true })} placeholder=""  defaultValue={`${employeeDetails.DPhone}`}/>
                           {errors.DPhone && 
                           <p className="text-danger">This field is required</p>
                           }
                           <input className="form-control " id="DName"  type="hidden" {...register("DName", { required: true })} placeholder="" defaultValue="0"  defaultValue={`${employeeDetails.DName}`}/>
                           <input className="form-control " id="DStatus" type="hidden" {...register("DStatus", { required: true })} placeholder="" defaultValue="0"  defaultValue={`${employeeDetails.DStatus}`}/> 
                         
                           <p className="text-center mt-2">
                              <input className="btn btn-success my-2" type="submit" defaultValue="Edit Manager"/>
                           </p>
                        </form>
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Modal.Body>
   </Modal>
   </>
</div>
);
};

export default DeliverymanUpdate;