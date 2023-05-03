import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { login } from '../apiCalls/user';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //may be we can del
  const{user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const submitHandler =async (e) => {
    e.preventDefault();
    const data = {email, password};
    const response =await login(data);
    if(response.status === 200){
      alert("User logged In")
      setUser(response.data.user);
     navigate("/");

    }else{
      alert(response.response.data.msg);
    }
  }
  return (
    <div className="w-1/4 m-auto text-center">
    <h1 className="text-3xl my-3 font-bold">Login</h1>
    <form onSubmit={submitHandler}>
    
      <div className="mb-3">
        <input type="email" placeholder='Enter Email...' className='focus:outline-none border-none p-2 rounded w-full' value={email}
        onChange= {e => setEmail(e.target.value)}/>
      </div>
      
      <div className="mb-3">
        <input type="password" placeholder='Enter Password...' className='focus:outline-none border-none p-2 rounded w-full' value={password}
        onChange= {e => setPassword(e.target.value)}/>
      </div>
     
      <button type="submit" className="bg-black text-white w-full py-2 rounded">
        Login
      </button>
    </form>
  </div>
  )
}

export default Login