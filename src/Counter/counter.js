import React, { useState,useEffect } from 'react';
import './counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
    

    const [userName, setUserName]=useState('');
    const handleChange=(e)=>{
        setUserName(e.target.value);

    }
    const[password, setPassword]=useState('');
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleLogino=()=>{
        alert(`Username:${userName}\nPassword:${password}\n Login Success`)
    }

    
    return (
        <>
  
    <form  className='container'>
        <label>Username:</label>
        <br/>
        <input type='text' value={userName} onChange={handleChange} className='inputBox'/>
        <br/>
        <label>Password:</label><br/>
        <input type ='password' vlaue={password} onChange={handlePassword} className='inputBox'/>
        <br/>
       <button onClick={handleLogino} className='login' >Login</button>

        
    </form>
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
        </>
  )
}

export default Counter