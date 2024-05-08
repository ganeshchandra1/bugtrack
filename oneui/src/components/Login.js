import { useState } from 'react';
import './Login.css';
import {useNavigate, Link } from 'react-router-dom';
const Login=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const handleEmailChange=(e)=>{
        setUsername(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    const handleLogin=async(e)=>{
        e.preventDefault();
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5038/api/bugs/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
          });
          const data = await response.json();
          console.log(data);
          if (response.status === 200) {
              alert('Login successful');
              // Proceed with user login
          } else {
              alert(data.message); // Show error message
          }
      } catch (error) {
          console.error('Error:', error);
      }
    };
const Button = ({ children, primary }) => {
        const baseStyles = 'text-white bg-sky-500/50 px-4 py-2 rounded-md transition-colors duration-300';
        const primaryStyles = primary
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
        return (
          <button className={`${baseStyles} ${primaryStyles}`}>
            {children}
          </button>
        );
      };
return (
    <div id="formdiv" className='bg-blue-100 rounded-lg ' >
      <form className='px-6 py-10  flex flex-col w-full align-center items-center' onSubmit={handleLogin}>
        <input className='w-full' id="form-item" type="text" name="username" value={username} placeholder="Username" onChange={handleEmailChange}></input>
        <input className='w-full' id="form-item" type="password" name="password" value={password} placeholder="Password" onChange={handlePasswordChange}></input>
        <div id="button-inline" className="space-x-12 space-y-4">
        <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">Create Account</Link>
        <Button type="submit" id="form-item" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">LOG IN</Button></div>
        <a id="form-item" href="#">Forgot Password</a>
      </form>
    </div>
)
}
export default Login;