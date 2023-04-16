import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
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
          navigate('/')
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
       <div className="form-container" style={{ minHeight: "90vh" }}>
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
       
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
        <p>Don't have an account? <Link to='/register'>Sign up</Link></p>
      </form>
    </div>
       </>
    );
};

export default Login;