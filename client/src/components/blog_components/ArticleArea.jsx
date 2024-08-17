import Title from "./Title"
import Subtitle from "./Subtitle"
import Author from "./Author"
import Article from "./Article"

export const ArticleArea = () => {
    return (
        <div className="bg-white">
            <Title />
            <Subtitle />
            <Author />
            <hr></hr>
            <Article />
        </div>
    )
}