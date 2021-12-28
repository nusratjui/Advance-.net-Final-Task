import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const VoucherUpdate = (props) => {
   
const [isOpen, setIsOpen] = React.useState(false);
const [ID,SetID]=useState('');
const [employeeDetails, setemployeeDetails] = useState([]);
const { register, handleSubmit, formState: { errors } ,reset} = useForm();
const showModal = (Id) => {
setIsOpen(true);
console.log(Id);
SetID(Id);
fetch(`https://localhost:44344/api/Voucher/get/${Id}`)
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
const url=`https://localhost:44344/api/Voucher/edit`;
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
         <Modal.Title>Edit Vouchar Details</Modal.Title>
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
                              <h4>{employeeDetails.VouId}</h4>
                              {/* <p className="text-secondary mb-1">VouCode</p> */}
                              <p className="text-muted font-size-sm">{employeeDetails.VouCode}</p>
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
                           <label htmlFor="VouId" className="form-label mt-2">Voucher ID</label>
                           <input className="form-control" id="VouId" {...register("VouId", { required: true })} placeholder="" defaultValue={`${employeeDetails.VouId}`}/>
                           {errors.VouId && 
                           <p className="text-danger">This field is required</p>
                           }
                           <label htmlFor="VouCode" className="form-label mt-2">Voucher Code</label>
                           <input className="form-control" id="VouCode" {...register("VouCode", { required: true })} placeholder="" defaultValue={`${employeeDetails.VouCode}`}/>
                           {errors.VouCode && 
                           <p className="text-danger">This field is required</p>
                           }
                           <label htmlFor="VouDiscount" className="form-label mt-2">Voucher Discount</label>
                           <input className="form-control" id="VouDiscount" {...register("VouDiscount", { required: true })} placeholder=""  defaultValue={`${employeeDetails.VouDiscount}`}/>
                           {errors.VouDiscount && 
                           <p className="text-danger">This field is required</p>
                           }
                          
                           

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

export default VoucherUpdate;