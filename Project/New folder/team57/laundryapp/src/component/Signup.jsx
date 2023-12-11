import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import img from "./Signup.jpeg";
import { Dataservices } from '../Service/Dataservices';

function Signup() {
  // State variables to store user input
  const navigate=useNavigate();
  const [data, setData] = useState({Name:"",Email:"",Password:""});
  

  
    

  const handleChange=(e)=>
    {
      setData({...data,[e.target.name]:e.target.value});
    
    }
const handleSubmit=async()=>
{
           try {
          console.log(data);
         const response =   await Dataservices(data);
         console.log(response);
         navigate(`/login`)
           } catch (error) {
            console.log(error);
           }
}
  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' name="Name" onChange={handleChange} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' name="Email" onChange={handleChange} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password'name="Password" onChange={handleChange} />
              </div>
{/* 
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'   />
              </div> */}

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Accept terms and conditions' />
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={handleSubmit} >
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <img src={img} alt="signup" />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;