import Buttons from "../authentication_components/Buttons"

function Navbar() {
        return (
            <div>
                <nav className="bg-white">
                    <div className="logo text-[#0d9221] ml-14 mt-9 text-4xl">
                        <a href="/"><h2>NovelNest</h2></a>
                    </div>
                    <div className="nav-buttons">
                        <a href="/"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                            Home
                        </h3></a>
                        <a href="#"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                            Explore
                        </h3></a>
                        <a href="#"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                            Sell
                        </h3></a>
                        <a href="#"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                            About Us
                        </h3></a>
                        <a href="#"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                            Docs
                        </h3></a>
                        <Buttons />
                    </div>
                </nav>
            </div>
        );
}

export default Navbar;