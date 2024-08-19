import Homepage from "./pages/Homepage"
import Register from "./pages/Register"
import Login from "./pages/Login"
// import Explore from "./pages/Explore.jsx"
import {Navigate, Routes, Route} from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/authContext.jsx"
import './App.css'
import { BlogPage } from "./pages/BlogPage.jsx"
import Writepage from "./pages/Writepage.jsx"

function App() {
  const {authUser} = useAuthContext();
  return (
      <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login'  element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Register />} />
          <Route path='/explore' element={authUser ? <BlogPage /> : <Login />} />
          <Route path='/write' element={authUser ? <Writepage /> : <Login />} />
        </Routes>
        <Toaster />
      </div>
  );
}

export default App