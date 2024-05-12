import React, {useEffect, useState} from 'react';
import './Error.css';
import App from './App';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';


const Error = () => {
  const[time,setTime]=useState(false);
  const {id} = useParams();

  useEffect(() => { 
    

    
    const timer = setTimeout(() => {
      console.log('Hi');
      alert(id +" This Page location doesn't Exist or either in WIP.");
      setTime(true);
    }, 4000);
    

    // Clean up the timer
    return () => clearTimeout(timer);
    },[id]);

    
    //console.log(id);
  return (

    <div >
    {time ? <p>This Page location doesn't Exist or either in WIP.</p>:
    <p><ReactLoading type={"bars"} color={"yellow"} height={100} width={100} className='RL'/></p>}
    
    </div>
  )
}

export default Error
