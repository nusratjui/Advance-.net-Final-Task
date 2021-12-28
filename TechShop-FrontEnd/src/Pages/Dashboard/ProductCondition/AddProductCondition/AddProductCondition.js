import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProductCondition = () => {
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
    const url=`https://localhost:44344/api/Pcondition/add`;
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
                  <button className="btn btn-primary"  onClick={showAddEmpModal}>Product Recommendation</button>
               </div>
               <>
               <Modal show={isOpenAddEmp} onHide={hideAddEmpModal} size="lg">
                  <Modal.Header>
                     <Modal.Title>Product recommendation</Modal.Title>
                     <button onClick={hideAddEmpModal} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </Modal.Header>
                  <Modal.Body>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="PCId" className="form-label mt-2" hidden >Deliveryman Name</label>
                        <input className="form-control" id="PCId" type="hidden" {...register("PCId", { required: true })} placeholder=""  value="10" />
                        {errors.PCId && 
                        <p className="text-danger">This field is required</p>
                        }
                        <label htmlFor="PId" className="form-label mt-2">Product ID</label>
                        <input className="form-control" id="PId" {...register("PId", { required: true })} placeholder="" />
                        {errors.PId && 
                        <p className="text-danger">This field is required</p>
                        }
                          <label htmlFor="PCondition" className="form-label mt-2">Product Condition</label>
                        <input className="form-control" id="PCondition" {...register("PCondition", { required: true })} placeholder="" />
                        {errors.PCondition && 
                        <p className="text-danger">This field is required</p>
                        }

                        <label htmlFor="PStock" className="form-label mt-2" hidden>Product ID</label>
                        <input className="form-control" id="PStock" type="hidden" {...register("PStock", { required: true })} placeholder="" value="12"/>
                        {errors.PStock && 
                        <p className="text-danger">This field is required</p>
                        }
                          <label htmlFor="PQuantity" className="form-label mt-2" hidden>Product Condition</label>
                        <input className="form-control" id="PQuantity" type="hidden" {...register("PQuantity", { required: true })} placeholder="" value="12"/>
                        {errors.PQuantity && 
                        <p className="text-danger">This field is required</p>
                        }
                      
                      
                        <p className="text-center mt-2">
                           <input className="btn btn-success my-2" type="submit" value="Recommend"/>
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



export default AddProductCondition;