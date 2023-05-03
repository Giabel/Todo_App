import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom';
import { logout } from '../apiCalls/user';
import { deleteUser } from '../apiCalls/user';

const Profile = () => {

  const {user, setUser} = useContext(UserContext);
  const navigate =useNavigate();
  const logoutHandeler =async (e) => {
    
    const response = await logout();
    if(response.status === 200){
      alert("User logged out");
      setUser({});
      navigate("/user/login");
    }else{
      alert(response.response.data.msg);
    }
  }

  const deleteAccountHandler = async (e) =>{
    if(window.confirm("Are you sure you want to delet your account ?")){
    const response = await deleteUser();
    if(response.status === 200){
      alert("User Deleted Succesfully");
      setUser({});
      navigate("/user/login");
    }else{
      alert(response.response.data.msg);
    }

    }
  }
  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3xl my-3 font-bold">Profile</h1>
      <div className="mt-3">
        <h2 className="text-2xl">Name: {user.name}</h2>
        <h2 className="text-2xl">Email: {user.email} </h2>
        <h2 className="text-2xl">Age: {user.age} </h2>
      </div>
      <div className="mt-3">
        <button onClick={() => navigate("/user/update")} className="my-2 bg-yellow-600 text-white w-full py-2 rounded">
          Update Profile
        </button>
        <button onClick={() => navigate("/user/updatepassword")} className="my-2 bg-blue-600 text-white w-full py-2 rounded">
          Update Password
        </button>
        <button onClick={logoutHandeler} className="my-2 bg-red-400 text-white w-full py-2 rounded">
          Logout
        </button>
        <button onClick={deleteAccountHandler} className="my-2 bg-red-700 text-white w-full py-2 rounded">
          Delete Account
        </button>
      </div>
    </div>
  )
}

export default Profile