import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { loginservices } from '../Service/Dataservices';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate();
  const [data, setData] = useState({Email:"",Password:""});
  
  const handleChange=(e)=>
    {
      setData({...data,[e.target.name]:e.target.value});
      console.log(data);
    }
const handleSubmit=async()=>
{
           try {
          console.log(data);
         const response =   await loginservices(data);
         console.log(response);
         if(response.data=="OK")
         {
          navigate(`/services`)
         }
         else{
                navigate(`/login`)
         }
        
           } catch (error) {
            console.log(error);
           }
}
  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Login Laundry App</h4>
            </div>

            <p>Please login to your account</p>


            <MDBInput wrapperClass='mb-4' label='Email address' id='form1'name="Email" onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' name='Password' onChange={handleChange}/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleSubmit}>Sign in</MDBBtn>
              {/* <a className="text-muted" href="#!">Forgot password?</a> */}
            </div>

            {/* <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger'>
                Danger
              </MDBBtn>
            </div> */}

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">Best Wash & Iron service</h4>
              <p class="small mb-0">Smart Laundary is the first Online Laundry Platform in DIU with the latest technology in washing, dry cleaning and laundry. Our services combine our expertise and experience acquired over a period of time to provide you with clean laundry in the shortest possible turnaround time.


              </p>
            </div>

          </div>


        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;