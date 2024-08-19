import Buttons from "../authentication_components/Buttons"
// import useLogout from "../../hooks/useLogout";
// import { useState } from "react"

function Navbar() {

    // const storedUser = localStorage.getItem("chat-user");
    // const {logout} = useLogout();
    // const [margin, setMargin] = useState(640);

    // if(storedUser) {
    //     setMargin(780);
    // }

        return (
            <div className="w-[100%]">
                <nav className="bg-white">
                    <div className="logo text-[#0d9221] ml-14 mt-9 text-4xl">
                        <a href="/"><h2>NovelNest</h2></a>
                    </div>
                    <div className="nav-buttons">
                        <a href="/"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                            Home
                        </h3></a>
                        <a href="/explore"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                            Explore
                        </h3></a>
                        <a href="/write"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                            Write
                        </h3></a>
                        <a href="#"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                            About Us
                        </h3></a>
                        <Buttons />
                    </div>
                </nav>
            </div>
        );
}

export default Navbar;