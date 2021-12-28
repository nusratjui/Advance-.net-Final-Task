import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const CustomerDetails = (props) => {
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const [managerDetails, setManagerDetails] = useState([]);
    const showDetails = (id) => {
        console.log(id);
        setIsOpenDetails(true);
        fetch(`https://localhost:44344/api/Customer/get/${id}`)
        .then(res=>res.json())
        .then(res => setManagerDetails(res))
        }; 
        const hideDetails = () => {
        setIsOpenDetails(false);
        };
    return (
        <>
                           <span className="fa-stack" onClick={()=>showDetails(props.EmpID)}>
                           <i className="fa fa-square fa-stack-2x"></i>
                           <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                           </span>
                           <Modal show={isOpenDetails} onHide={hideDetails} size="lg" className="mt-2">
                              <Modal.Header>
                                 <Modal.Title>View Information</Modal.Title>
                                 <button onClick={hideDetails} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </Modal.Header>
                              <Modal.Body>
                                 {/* Start */}
                                 <div className="container">
                                    <div className="main-body">
                                       <div className="row gutters-sm">
                                          <div className="col-md-6 mb-3">
                                             <div className="card">
                                                <div className="card-body">
                                                   <div className="d-flex flex-column align-items-center text-center">
                                                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                                      <div className="mt-3">
                                                         <h4>Customer ID:{managerDetails.CId}</h4>
                                                         <p className="text-secondary mb-1">Customer name:{managerDetails.CName}</p>
                                                         {/* <p className="text-muted font-size-sm">Customer Address{managerDetails.CAddress}</p> */}
                                                         {/* <button className="btn btn-outline-primary">Message</button> */}
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-md-6">
                                             <div className="card mb-3">
                                                <div className="card-body">
                                                   <div className="row">
                                                      <div className="col-sm-3">
                                                         <h6 className="mb-0">CustomerAddress</h6>
                                                      </div>
                                                      <div className="col-sm-9 text-secondary">
                                                         {managerDetails.CAddress}
                                                      </div>
                                                   </div>
                                                   <hr />
                                                   <div className="row">
                                                      <div className="col-sm-3">
                                                         <h6 className="mb-0">Customer Email</h6>
                                                      </div>
                                                      <div className="col-sm-9 text-secondary">
                                                         {managerDetails.CEmail}
                                                      </div>
                                                   </div>
                                                   <hr />
                                                   <div className="row">
                                                      <div className="col-sm-3">
                                                         <h6 className="mb-0">Customer Phone</h6>
                                                      </div>
                                                      <div className="col-sm-9 text-secondary">
                                                         {managerDetails.CPhone}
                                                      </div>
                                                   </div>
                                                   
                                                  
                                                   <div className="row">
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 {/* End  */}
                              </Modal.Body>
                              <Modal.Footer>
                                 <button onClick={hideDetails} type="button" class="btn btn-primary">OK</button>
                              </Modal.Footer>
                           </Modal>
                           </>
    );
};



export default CustomerDetails;