import {Title} from "./Title"
import { Author } from "./Author"
import {Article} from "./Article"

export const ArticleArea = () => {
    return (
        <div className="bg-white">
            <Title />
            <Author />
            <div className="flex justify-center">
                <hr className="w-[1300px] border-[1px] border-black"></hr>
            </div>
            <Article />
        </div>
    )
}