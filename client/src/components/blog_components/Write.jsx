const Write = () => {
    return (
        <div>
            <div className="flex justify-center">
                <input type="text" className="cormorant-garamond-medium-italic text-2xl font-medium bg-white w-[1300px] 
                px-5 rounded-xl h-[60px] mt-16 border-[#7d7d7d] border-[1px]" 
                placeholder="Your title here.."></input>        
            </div>
            <div className="flex justify-center">
                <textarea className="text-xl bg-white rounded-xl mt-4 w-[1300px] p-6 h-[500px] border-[#7d7d7d] border-[1px]"
                placeholder="Your thoughts..."/>
            </div>
            <div className="flex justify-center mt-16">
                <h4 className="ml-5 mt-[9px] text-xl font-medium mr-4">Writing as</h4>
                <div className="flex justify-center">
                    <img className="rounded-full size-12" src="https://ui-avatars.com/api/?background=random&name=Daenerys+Targaryen" />
                    <h4 className="ml-5 mt-[9px] hover:underline text-xl hover:text-[#245118] font-medium">Daenerys Targaryen</h4>
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
        </div>
    )
}

export default Write;