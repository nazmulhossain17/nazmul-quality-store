import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCheckbox,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
       <>
       <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>

        <h2 className="fw-bold mb-2 text-center">Sign in</h2>
        <p className="text-white-50 mb-3">Please enter your login and password!</p>
        <label>Email</label>
        <MDBInput wrapperClass='mb-4 w-100' id='formControlLg' type='email' size="lg"/>
        <label>Password</label>
        <MDBInput wrapperClass='mb-2 w-100' id='formControlLg' type='password' size="lg"/>
        <Link>Forget Password</Link>
        <br/>
        <MDBBtn size='lg'>
          Login
        </MDBBtn>
        <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>

        <hr className="my-2" />

        <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
          <MDBIcon fab icon="google" className="mx-2"/>
          Sign in with google
        </MDBBtn>

        <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
          <MDBIcon fab icon="facebook-f" className="mx-2"/>
          Sign in with facebook
        </MDBBtn>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
       </>
    );
};

export default Login;