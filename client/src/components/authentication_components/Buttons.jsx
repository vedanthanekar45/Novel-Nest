import useLogout from "../../hooks/useLogout";

function Buttons () {

    const storedUser = localStorage.getItem("chat-user");
    const {logout} = useLogout();

    if (!storedUser) {
        return (
            <div>
                <a href="/login">
                    <button className="login-butt text-white cursor-pointer outline-none 
                    border-none text-base text-center transition-all 
                    duration-300 ease-linear relative bg-[#0d9221] 
                    rounded-[10px] hover:bg-[#2db40c]">
                        Login
                    </button>
                </a>
                <a href="/signup">
                    <button className="register-butt text-white cursor-pointer outline-none 
                    border-none text-base text-center transition-all 
                    duration-300 ease-linear relative bg-[#0d9221] 
                    rounded-[10px] hover:bg-[#2db40c]">
                        Register
                    </button>
                </a>
            </div>
        )
    } else {
        const user = JSON.parse(storedUser);
        return (
            <>
                <a href="#"><div>
                    <img onClick={logout} className="ml-[100px] size-14 mt-6 rounded-full" src={user.profilePic} />
                </div></a>
                {/* <a href="#"><h3 onClick={logout} className="ml-[80px] mt-[40px] text-xl text-center hover:text-[#0d9221]">
                    Logout
                </h3></a> */}
            </>
        )
    }
}

export default Buttons