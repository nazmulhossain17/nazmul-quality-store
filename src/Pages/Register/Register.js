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

const Register = () => {
    return (
        <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>

        <h2 className="fw-bold mb-2 text-center">Sign up</h2>
        <p className="text-white-50 mb-3">Please enter your login and password!</p>
        <label>Name</label>
        <MDBInput wrapperClass='mb-4 w-100' id='formControlLg' type='text' size="lg"/>
        <label>Email</label>
        <MDBInput wrapperClass='mb-4 w-100' id='formControlLg' type='email' size="lg"/>
        <label>Password</label>
        <MDBInput wrapperClass='mb-2 w-100' id='formControlLg' type='password' size="lg"/>
        <label>Phone</label>
        <MDBInput wrapperClass='mb-2 w-100' id='formControlLg' type='number' size="lg"/>
        <label>Address</label>
        <MDBInput wrapperClass='mb-2 w-100' id='formControlLg' type='text' size="lg"/>
        <MDBBtn size='lg'>
          Sign up
        </MDBBtn>
        <p>Already have an account? <Link to='/login'>Sign In</Link></p>


      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
    );
};

export default Register;