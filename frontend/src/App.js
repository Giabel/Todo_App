import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import  Register  from './pages/Register';
import  Login  from './pages/Login';
import  Profile  from './pages/Profile';
import { useContext, useEffect } from 'react';
import { UserContext } from './Context/UserContext';
import { getUser } from './apiCalls/user';
import LoggedInHome from "./pages/LoggedInHome";
import CreateTodo from './pages/CreateTodo';
import UnProtectedRoutes from './components/UnProtectedRoutes';
import ProtectedRoutes from './components/ProtectedRoutes';
import UpdateProfile from "./pages/UpdateProfile";
import UpdatePassword from "./pages/UpdatePassword";

function App() {

  const {user, setUser} = useContext(UserContext);

  useEffect(() =>{
    const fetchData = async () =>{
      const res = await getUser();
      setUser(res.data.user);
    };
    fetchData();
    
  },[]);
  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
     <Navbar />
        <Routes>
          <Route path="/" element={user._id ? <LoggedInHome /> : <Home />} />
          <Route path="/user/register" element = {
            <UnProtectedRoutes loggedIn={user._id ? true : false}>
              <Register />
            </UnProtectedRoutes>
          } />
          <Route path="/user/login" element = {<UnProtectedRoutes loggedIn={user._id ? true : false}>
              <Login />
            </UnProtectedRoutes>} />
          <Route path="/user/profile" element = {
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <Profile />
            </ProtectedRoutes>
          } />
          <Route path="/todo/create" element = {
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <CreateTodo />
            </ProtectedRoutes>
          } />

        <Route path="/user/update" element = {
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <UpdateProfile />
            </ProtectedRoutes>
          } />

<Route path="/user/updatepassword" element = {
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <UpdatePassword />
            </ProtectedRoutes>
          } />
        </Routes>
    </div>
  );
}

export default App;
