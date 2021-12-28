import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const VoucherAdd = () => {
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
    const url=`https://localhost:44344/api/Voucher/add`;
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
                  <button className="btn btn-primary"  onClick={showAddEmpModal}>Add New Voucher</button>
               </div>
               <>
               <Modal show={isOpenAddEmp} onHide={hideAddEmpModal} size="lg">
                  <Modal.Header>
                     <Modal.Title>Add New Voucher</Modal.Title>
                     <button onClick={hideAddEmpModal} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </Modal.Header>
                  <Modal.Body>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="VouId" className="form-label mt-2">Voucher ID</label>
                        <input className="form-control" id="VouId" {...register("VouId", { required: true })} placeholder="" />
                        {errors.VouId && 
                        <p className="text-danger">This field is required</p>
                        }
                        <label htmlFor="VouCode" className="form-label mt-2">Voucher Code</label>
                        <input className="form-control" id="VouCode" {...register("VouCode", { required: true })} placeholder="" />
                        {errors.VouCode && 
                        <p className="text-danger">This field is required</p>
                        }
                        <label htmlFor="VouDiscount" className="form-label mt-2">Voucher Discount</label>
                        <input className="form-control" id="VouDiscount" {...register("VouDiscount", { required: true })} placeholder="" />
                        {errors.VouDiscount && 
                        <p className="text-danger">This field is required</p>
                        }
                       
                       
                        <p className="text-center mt-2">
                           <input className="btn btn-success my-2" type="submit" value="Add Voucher"/>
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


export default VoucherAdd;