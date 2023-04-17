import React, { useEffect, useState } from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';
import { useLocation, useNavigate } from 'react-router-dom';

function Spinner() {
  
  const [count, setCount] = useState(5)
  const navigate = useNavigate();
  const location = useLocation()

    useEffect(()=>{
      const interval = setInterval(()=>{
        setCount((preValue) => --preValue);
      }, 1000);
      count === 0 && navigate('/login', {
        state: location.pathname,
      })
      return () => clearInterval(interval)
    },[count, navigate, location])
  
  return (
    <div className='d-flex justify-content-center'>
      <MDBSpinner role='status'>
        <span className='visually-hidden'>Loading...{count}</span>
      </MDBSpinner>
    </div>
  );
}

export default Spinner;