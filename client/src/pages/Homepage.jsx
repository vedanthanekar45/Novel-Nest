import Navbar from "../components/home_components/Navbar"
import Gallery from "../components/home_components/Gallery"
import Info from "../components/home_components/Info"
// import Blog from "../components/home_components/Blog"
import StartReading from "../components/home_components/startReading"
import Footer from "../components/home_components/Footer"

function Homepage() {

  return (
    <div>
      <Navbar />
      <Gallery />
      <Info />
      <StartReading />
      {/* <Blog /> */}
      <Footer />
    </div>
  );
}

export default Homepage;
