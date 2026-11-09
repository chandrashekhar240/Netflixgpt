const GptSearchBar = () => {
    return (
        <div>
            <form className="flex justify-center items-center">
                <input type = "text" placeholder="what would you like to watch?" className="w-1/4 py-2 px-4 mt-24 bg-gray-200 rounded-md text-black border-2xl-solid-black"/>
                <button className="bg-red-600 text-white font-semibold py-2 px-4  mt-24 rounded-md mx-2">Search</button>
            </form>
            
        </div>
    )
}

export default GptSearchBar;