import Buttons from "../authentication_components/Buttons";

function Navbar() {
    return (
        <div>
            <nav className="bg-white">
                <div className="logo">
                    <a href="/"><h2>NovelNest</h2></a>
                </div>
                <div className="nav-buttons">
                    <a href="/"><h3 className="webpage-butt">
                        Home
                    </h3></a>
                    <a href="#"><h3 className="webpage-butt">
                        Explore
                    </h3></a>
                    <a href="#"><h3 className="webpage-butt">
                        Sell
                    </h3></a>
                    <a href="#"><h3 className="webpage-butt">
                        About Us
                    </h3></a>
                    <Buttons />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
