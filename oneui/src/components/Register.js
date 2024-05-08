import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to import useNavigate
import './Login.css';
const Register = () => {
  // State setup with useState hook
  const [formData, setFormData] = useState({
    empid: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    userlevel: ''
  });

  // Destructure for easier access
  const { empid, name, username, password, confirmPassword, userlevel } = formData;
  const navigate = useNavigate(); // Define navigate using useNavigate
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Example API request
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // API request would go here, and upon success:
    navigate('/dashboard'); // Adjust the route as necessary
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
    <div id="formdiv" className='bg-blue-100 rounded-lg '>
    <form className='px-4 py-10  flex flex-col w-full align-center items-center' onSubmit={handleSubmit}>
      <input className='w-full' id="form-item" type="text" name="empid" value={empid} placeholder="Employee ID" onChange={handleChange} />
      <input className='w-full' id="form-item" type="text" name="name" value={name} placeholder="Name" onChange={handleChange} />
      <input className='w-full' id="form-item" type="text" name="username" value={username} placeholder="Username" onChange={handleChange} />
      <input className='w-full' id="form-item" type="password" name="password" value={password} placeholder="Password" onChange={handleChange} />
      <input className='w-full' id="form-item" type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={handleChange} />
      <input className='w-full' id="form-item" type="number" name="userlevel" value={userlevel} placeholder="User Level" onChange={handleChange} />
      <Button type="submit" id="form-item" className="submit-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">Register</Button>
    </form>
    </div>
  );
};

export default Register;
