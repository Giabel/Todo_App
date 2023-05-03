import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {createTodo} from "../apiCalls/todo"

const CreateTodo = () => {
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) =>{
    e.preventDefault();
    const data = {
      title, description,
    }
    const response = await createTodo(data);
    if(response.status ===201){
      alert("Todo Created");
      navigate("/")
    }else{
      alert(response.response.data.msg);
    }
  }
  return (
    <div className="w-1/4 m-auto text-center">
    <h1 className="text-3xl my-3 font-bold">Create Todo</h1>
    <form onSubmit={submitHandler}>
    
      <div className="mb-3">
        <input type="text" placeholder='Enter Title...' 
        className='focus:outline-none border-none p-2 rounded w-full' 
        value={title}
        onChange= {e => setTitle(e.target.value)}/>
      </div>
      
      <div className="mb-3">
        <textarea  className='focus:outline-none border-none p-2 rounded w-full' id="" cols="30" rows="5" value={description} onChange ={e => setDescription(e.target.value)}
        ></textarea>
        
         </div>
     
      <button type="submit" className="bg-black text-white w-full py-2 rounded">
        Create Todo
      </button>
    </form>
  </div>
  )
}

export default CreateTodo