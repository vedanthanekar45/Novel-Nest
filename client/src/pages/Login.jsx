import React from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authContext";

function Login() {

    const [inputs, setInputs] = React.useState({
        userName: '',
        password: ''
    })

    const { setAuthUser } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
          const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
          });
          console.log("response"+response);
    
          if (response.ok) {
            const result = await response.json();
            console.log('Login successful:', result);
            toast.success('Login Successful');
                if(result.error) {
                    throw new Error(result.error);
                }
            // Store the token in localStorage or a cookie
            localStorage.setItem('chat-user', JSON.stringify(result));
            setAuthUser(result)
          } else {
            console.error('Login failed:', response.statusText);
          }
        } catch (error) {
            toast.error(error.message);
            console.error('Error:', error.messgae);
        }
      };

    return (
        <div>
            <div className="h-screen flex items-center justify-center">
                <div className="login-box flex-col items-center relative bg-white z-0 justify-center">
                    <div className="blog-title flex justify-center z-2 text-green-700 text-5xl mt-10">
                        <h1>Login</h1>
                    </div>
                    <div className="blog-title flex justify-center z-2 text-2xl mt-6">
                        <h1>To continue with NovelNest</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="w-80 ml-[90px] mt-12">

                        <input onChange={(e) => setInputs({...inputs, userName: e.target.value})}
                        autoComplete='off' name="username" type="text" placeholder="Username"
                        className="block rounded-xl h-12 mb-6 p-4 w-full border-black border"/>

                        <input onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        autoComplete='off' name="password" type="password" placeholder="Password"
                        className="block rounded-xl h-12 mb-6 p-4 w-full border-black border"/>

                        <button className="bg-green-700 h-12 rounded-xl w-full text-white">Login</button>
                    </form>
                    <div className="blog-title flex justify-center z-2 text-2xl mt-6">
                        <h1>Not a user yet? Register <a href='/register' className="text-green-700">here!</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;