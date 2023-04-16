import React, { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
      e.preventDefault()
      try{
        const res = await axios.post('/api/v1/auth/register',{name, email, password, phone, address})
        if(res.data.success){
          toast.success(res.data.message)
          navigate('/login')
        }
        else{
          toast.success(res.data.message)
        }
      } catch(error){
        console.log(error)
        toast.error('Something went wrong')
      }
  }
  // console.log(process.env.REACT_APP_API)

    return (
      <div className="form-container" style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">REGISTER FORM</h4>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
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
        <div className="mb-3">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Phone"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Address"
            required
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          REGISTER
        </button>
        <p>Already have an account? <Link to='/login'>Sign In</Link></p>
      </form>
    </div>
    );
};

export default Register;