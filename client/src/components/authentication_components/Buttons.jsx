function Buttons () {

    const storedUser = localStorage.getItem("chat-user");
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
                <a href="/register">
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
        <a href="#"><div>
            <h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">{user.userName}</h3>
        </div></a>
    )
    }
}

export default Buttons