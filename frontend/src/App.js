import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import  Register  from './pages/Register';
import  Login  from './pages/Login';
import  Profile  from './pages/Profile';
import { useContext, useEffect } from 'react';
import { userContext } from './Context/UserContext';
import { getUser } from './apiCalls/user';
import LoggedInHome from "./pages/LoggedInHome";
import CreateTodo from './pages/CreateTodo';

function App() {

  const {user, setUser} = useContext(userContext);

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
        </Routes>
    </div>
  );
}

export default App;
