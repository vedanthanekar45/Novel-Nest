import Navbar from "../components/home_components/Navbar"
import Footer from "../components/home_components/Footer"
import Writetitle from "../components/blog_components/Writetitle"
import Write from "../components/blog_components/Write"
import { Coverphoto } from "../components/blog_components/Coverphoto"

const Writepage = () => {
    return (
        <div>
            <Navbar />
            <Coverphoto />
            <Writetitle />
            <Write />
            <Footer />
        </div>
    )
}

export default Writepage;