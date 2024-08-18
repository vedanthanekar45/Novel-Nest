import Navbar from "../components/home_components/Navbar"
import { ArticleArea } from "../components/blog_components/ArticleArea"
import { Coverphoto } from "../components/blog_components/Coverphoto"

export const BlogPage = () => {
    return (
        <div>
            <Navbar />
            <Coverphoto />
            <ArticleArea />
        </div>
    )
}