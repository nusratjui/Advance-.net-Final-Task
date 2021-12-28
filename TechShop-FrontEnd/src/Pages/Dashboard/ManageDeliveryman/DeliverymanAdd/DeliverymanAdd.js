import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const DeliverymanAdd = () => {
    const [isOpenAddEmp, setIsOpenAddEmp] = React.useState(false);
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
    const showAddEmpModal = () => {
    reset();
    setIsOpenAddEmp(true);
    };
    const hideAddEmpModal = () => {
    setIsOpenAddEmp(false);
    };
    const onSubmit = data =>{
    // console.log(data);
    console.log(JSON.stringify(data));
    // axios.post(`https://localhost:44352/api/Employee/add`,data)
    // .then((res)=>{
    //      console.log(res.data);
    // })
    const url=`https://localhost:44344/api/Deliveryman/add`;
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
    alert("Added");
    })
    alert("Added Done");
    hideAddEmpModal();
    }
    return (
        <div>
            <div className="d-flex justify-content-center ">
                  <button className="btn btn-primary"  onClick={showAddEmpModal}>Add New Deliveryman</button>
               </div>
               <>
               <Modal show={isOpenAddEmp} onHide={hideAddEmpModal} size="lg">
                  <Modal.Header>
                     <Modal.Title>Add New Deliveryman</Modal.Title>
                     <button onClick={hideAddEmpModal} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </Modal.Header>
                  <Modal.Body>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="DName" className="form-label mt-2">Deliveryman Name</label>
                        <input className="form-control" id="DName" {...register("DName", { required: true })} placeholder="" />
                        {errors.DName && 
                        <p className="text-danger">This field is required</p>
                        }
                        <label htmlFor="DPassword" className="form-label mt-2">Deliveryman Password</label>
                        <input className="form-control" id="DPassword" {...register("DPassword", { required: true })} placeholder="" />
                        {errors.DPassword && 
                        <p className="text-danger">This field is required</p>
                        }
                        <label htmlFor="DEmail" className="form-label mt-2">Deliveryman Email</label>
                        <input className="form-control" id="DEmail" {...register("DEmail", { required: true })} placeholder="" />
                        {errors.DEmail && 
                        <p className="text-danger">This field is required</p>
                        }
                        <label htmlFor="DStatus" className="form-label mt-2">Deliveryman Status</label>
                        <input className="form-control" id="DStatus" {...register("DStatus", { required: true })} placeholder="" />
                        {errors.DStatus && 
                        <p className="text-danger">This field is required</p>
                        }
                        <label htmlFor="DPhone" className="form-label mt-2">Deliveryman Phone</label>
                        <input className="form-control" id="DPhone" {...register("DPhone", { required: true })} placeholder="" />
                        {errors.DPhone && 
                        <p className="text-danger">This field is required</p>
                        }
                        {/* <input className="form-control " id="MPicture" {...register("MPicture", { required: true })} placeholder="" defaultValue=""  /> */}
                        <label htmlFor="DSalary" className="form-label mt-2">Deliveryman Salary</label>
                        <input className="form-control" id="DSalary" {...register("DSalary", { required: true })} placeholder="" />
                        {errors.DOrderid && 
                        <p className="text-danger">This field is required</p>
                        }
                        <input className="form-control " id="DOrderid" type="hidden" {...register("DOrderid", { required: true })} placeholder="" Value="0"/>
                        {/* <input className="form-control " id="MPerformBonus" {...register("MPerformBonus", { required: true })} placeholder="" Value="0"/>  */}
                        <label htmlFor="DSchedule" className="form-label mt-2">Deliveryman Schedule</label>
                        <input className="form-control" id="DSchedule" {...register("DSchedule", { required: true })} placeholder="" />
                        {errors.DSchedule && 
                        <p className="text-danger">This field is required</p>
                        }
                        <p className="text-center mt-2">
                           <input className="btn btn-success my-2" type="submit" value="Add Employee"/>
                        </p>
                     </form>
                  </Modal.Body>
                  <Modal.Footer>
                  </Modal.Footer>
               </Modal>
               </>
        </div>
    );
};

export default DeliverymanAdd;