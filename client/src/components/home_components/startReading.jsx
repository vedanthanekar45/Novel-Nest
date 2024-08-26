const StartReading= () => {
    const storedUser = localStorage.getItem("chat-user");
    return (
        <div className="pb-16">
            <div className="blog-title items-center h-auto">
                <h1 className="text-green-700 text-7xl text-center mt-20"> Want to start exploring? </h1>
            </div>
            {storedUser ? <div className="blog-butt flex justify-center">
                <a href='/explore'><button className="w-64 mt-12 h-16 text-white cursor-pointer outline-none 
                border-none text-xl text-center font-bold transition-all 
                duration-300 ease-linear relative bg-[#216b12] 
                rounded-[40px] hover:bg-[#268d2a]">
                    Head to the Main Page
                </button></a>
            </div> : <div className="blog-butt flex justify-center">
                <a href='/login'><button className="w-64 mt-12 h-16 text-white cursor-pointer outline-none 
                border-none text-xl text-center font-bold transition-all 
                duration-300 ease-linear relative bg-[#216b12] 
                rounded-[40px] hover:bg-[#268d2a]">
                    Login to get started
                </button></a>
            </div>}
        </div>
    )
}

export default StartReading;