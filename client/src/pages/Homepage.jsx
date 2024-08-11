import Navbar from "../components/home_components/Navbar"
import Gallery from "../components/home_components/Gallery"
import Info from "../components/home_components/Info"
import Blog from "../components/home_components/Blog"

function Homepage() {

  return (
    <div>
      <Navbar className="fixed"/>
      <Gallery />
      <Info />
      <Blog />
    </div>
  );
}

export default Homepage;
