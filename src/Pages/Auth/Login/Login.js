import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";
import './Login.css';
import { useAuth } from "../../../context/auth";
import Layout from "../../../components/Layout/Layout";
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
}
from 'mdb-react-ui-kit';
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const location = useLocation()
  const [auth, setAuth] = useAuth();
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try{
      const res = await axios.post('/api/v1/auth/login',{email, password})
      if(res.data.success){
        toast.success(res.data.message)
        setAuth({
          ...auth,
          user: res.data.user,
          token:res.data.token,
        })
        localStorage.setItem('auth', JSON.stringify(res.data))
        navigate(location.state || '/')
      }
      else{
        toast.success(res.data.message)
      }
    } catch(error){
      console.log(error)
      toast.error('Something went wrong')
    }
  }
  return (
     <>
     <Layout>
     {/* <div className="form-container" style={{ minHeight: "90vh" }}>
    <form onSubmit={handleSubmit}>
      <h4 className="title">Sign In</h4>
      <div className="mb-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter Your Email "
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Your Password"
          required
        />
      </div>
     
      <p type='button' onClick={() =>{navigate('/forget-password')}}>
       Forget password
      </p>
      <button type="submit" className="btn btn-primary">
        Sign In
      </button>
      <p>Don't have an account? <Link to='/register'>Sign up</Link></p>
    </form>
  </div> */}
  <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>
      <form onClick={handleSubmit}>
        <h2 className="fw-bold mb-2 text-center">Sign in</h2>
        
        <label>Email</label>
        <MDBInput wrapperClass='mb-4 w-100' onChange={(e) => setEmail(e.target.value)} value={email}  id='formControlLg' type='email' size="lg" placeholder="Enter Your Email" required/>

        <label>Password</label>
        <MDBInput wrapperClass='mb-4 w-100' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password"  id='formControlLg' type='password' size="lg" required/>

        <p type='button' onClick={() =>{navigate('/forget-password')}}>Forget Password</p>
        <button type='submit' style={{ width: '100%', backgroundColor: 'blue', fontSize: '15px', padding: '13px 23px', borderRadius: '13px', color: '#fff', cursor: 'pointer', textAlign: 'center'}}>Sign In</button>
        <p>Don't have an account? <Link to='/register'>Sign up</Link></p>
        <hr className="my-4" />

        <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
          <MDBIcon fab icon="google" className="mx-2"/>
          Sign in with google
        </MDBBtn>

        <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
          <MDBIcon fab icon="facebook-f" className="mx-2"/>
          Sign in with facebook
        </MDBBtn>
          </form>
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
  </Layout>
     </>
  );
};

export default Login;