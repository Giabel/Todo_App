import React from 'react'

const CreateTodo = () => {
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
        
        
         </div>
     
      <button type="submit" className="bg-black text-white w-full py-2 rounded">
        Login
      </button>
    </form>
  </div>
  )
}

export default CreateTodo