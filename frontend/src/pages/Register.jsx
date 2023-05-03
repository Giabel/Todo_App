import React from "react"; 
import { useContext } from 'react';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { register } from "../apiCalls/user";
import { UserContext } from '../Context/UserContext';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);

  const submitHandler =async (e) => {
    e.preventDefault();
    if(password !== confrimPassword){
      alert("password does not match");
      return ;
    }
    const data = {
      name,
      email, 
      age, 
      password
    }

    const response = await register(data);
    if(response.status === 201){
      alert("User Register Successfully");
      setUser(response.data.user);
      navigate("/")
    }else{
      alert(response.response.data.msg);
    }
  }
  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3xl my-3 font-bold">Register</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <input type="text" value={name} placeholder='Enter Name...' className='focus:outline-none border-none p-2 rounded w-full' 
          onChange= {e => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="email" value={email} placeholder='Enter Email...' className='focus:outline-none border-none p-2 rounded w-full' 
          onChange= {e => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="number" value={age} placeholder='Enter Age...' className='focus:outline-none border-none p-2 rounded w-full'  
          onChange= {e => setAge(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="password" value={password} placeholder='Enter Password...' className='focus:outline-none border-none p-2 rounded w-full' 
          onChange= {e => setPassword(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="password" value={confrimPassword} placeholder='Confrim Password...' className='focus:outline-none border-none p-2 rounded w-full'  
          onChange= {e => setConfrimPassword(e.target.value)}/>
          
        </div>
        <button type="submit" className="bg-black text-white w-full py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register