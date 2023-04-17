import React, { useEffect, useState } from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';
import { useLocation, useNavigate } from 'react-router-dom';

function Spinner({path= "login"}) {
  
  const [count, setCount] = useState()
  const navigate = useNavigate();
  const location = useLocation()

    useEffect(()=>{
      const interval = setInterval(()=>{
        setCount((preValue) => --preValue);
      }, 1000);
      count === 0 && navigate(`${path}`, { 
        state: location.pathname,
      })
      return () => clearInterval(interval)
    },[count, navigate, location, path])
  
  return (
    <div className='d-flex justify-content-center'>
      <MDBSpinner role='status'>
        <span className='visually-hidden'>Loading...{count}</span>
      </MDBSpinner>
    </div>
  );
}

export default Spinner;