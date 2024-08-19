import React from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authContext.jsx";

function Register() {

    const [inputs, setInputs] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: ''
    })

    const { setAuthUser } = useAuthContext();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/auth/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
              });
        
              if (response.ok) {
                const result = await response.json();
                console.log('Registration successful:', result);
                toast.success('Registration successful');
                if(result.error) {
                    throw new Error(result.error);
                }

                // local storage
                localStorage.setItem("chat-user", JSON.stringify(result))
                // context
                setAuthUser(result);
              } else {
                console.error('Registration failed:', response.statusText);
              }
        } catch (error) {
            toast.error(error.message);
            console.error('Error:', error.messgae);
        }
    }

    return (
        <div>
            <div className="h-screen flex items-center justify-center">
                <div className="register-box flex-col items-center relative z-0 justify-center">
                    <div className="blog-title flex justify-center z-2 text-green-700 text-5xl mt-10">
                        <h1>Register</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="w-80 ml-[90px] mt-12">

                        <input onChange={(e) => setInputs({...inputs, firstName: e.target.value})}
                        autoComplete='off' name="text" type="text" placeholder="First Name"
                        className="block rounded-xl bg-white h-12 mb-6 p-4 w-full border-black border"/>

                        <input onChange={(e) => setInputs({...inputs, lastName: e.target.value})}
                        autoComplete='off' name="text" type="text" placeholder="Last Name"
                        className="block rounded-xl bg-white h-12 mb-6 p-4 w-full border-black border"/>

                        <input onChange={(e) => setInputs({...inputs, email: e.target.value})}
                        autoComplete='off' name="email" type="text" placeholder="Email"
                        className="block rounded-xl bg-white h-12 mb-6 p-4 w-full border-black border"/>

                        <input onChange={(e) => setInputs({...inputs, userName: e.target.value})}
                        autoComplete='off' name="username" type="text" placeholder="Set Username"
                        className="block rounded-xl bg-white h-12 mb-6 p-4 w-full border-black border"/>

                        <input onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        autoComplete='off' name="password" type="password" placeholder="Set Password"
                        className="block rounded-xl bg-white h-12 mb-6 p-4 w-full border-black border"/>

                        <button className="bg-green-700 h-12 rounded-xl w-full text-white">Register</button>
                    </form>
                    <div className="blog-title flex justify-center z-2 text-2xl mt-6">
                        <h1>Already a user? Login <a href='/login' className="text-green-700">here!</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;