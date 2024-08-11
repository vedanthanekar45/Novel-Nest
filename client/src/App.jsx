import Homepage from "./pages/Homepage"
import Register from "./pages/Register"
import Login from "./pages/Login"
import CreatePost from "./pages/CreatePost"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

// export const userContext = React.createContext();
function App() {

  return (
    // <userContext.Provider value="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path ='/createpost' element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    // </userContext.Provider>
  );
}

export default App