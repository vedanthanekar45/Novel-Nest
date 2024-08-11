import Homepage from "./pages/Homepage"
import Register from "./pages/Register"
import Login from "./pages/Login"
import CreatePost from "./pages/CreatePost"
import {Navigate, Routes, Route} from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/authContext.jsx"
import './App.css'

function App() {
  const {authUser} = useAuthContext();
  return (
      <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login'  element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Register />} />
          <Route path ='/createpost' element={authUser ? <Navigate to='/' /> : <CreatePost />} />
        </Routes>
        <Toaster />
      </div>
  );
}

export default App