import { useState } from "react"
import toast from "react-hot-toast"

const Write = () => {

    const storedUser = localStorage.getItem("chat-user");
    const user = JSON.parse(storedUser)

    const [blogTitle, setBlogTitle] = useState("");
    const [blogData, setBlogData] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:5000/blog/addBlog", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    blogTitle: blogTitle, 
                    blogData: blogData
                }),
                credentials: 'include',
            });

            if (response.status === 201) {
                // Handle success, maybe redirect or show a success message
                toast.success("Blog posted successfully!");
            }
        } catch (error) {
            toast.error("Error posting blog:", error);
            toast.error("Failed to post blog.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <input type="text" className="cormorant-garamond-medium-italic text-2xl font-medium bg-white w-[1300px] 
                    px-5 rounded-xl h-[60px] mt-16 border-[#7d7d7d] border-[1px]" 
                    placeholder="Your title here.."
                    onChange={(e) => setBlogTitle(e.target.value)}></input>        
                </div>
                <div className="flex justify-center">
                    <textarea className="text-xl bg-white rounded-xl mt-4 w-[1300px] p-6 h-[500px] border-[#7d7d7d] border-[1px]"
                    placeholder="Your thoughts..."
                    onChange={(e) => setBlogData(e.target.value)} />
                </div>
                <div className="flex justify-center mt-16">
                    <h4 className="ml-5 mt-[9px] text-xl font-medium mr-4">Writing as</h4>
                    <div className="flex justify-center">
                        <img className="rounded-full size-12" src={user.profilePic} />
                        <h4 className="ml-5 mt-[9px] hover:underline text-xl hover:text-[#245118] font-medium">{user.firstName} {user.lastName}</h4>
                    </div>
                </div>
                <div className="blog-butt flex justify-center">                    
                    <button type="submit" className="w-64 mt-12 mb-12 h-16 text-white cursor-pointer outline-none 
                    border-none text-xl text-center font-bold transition-all 
                    duration-300 ease-linear relative bg-[#216b12] 
                    rounded-[40px] hover:bg-[#268d2a]">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Write;