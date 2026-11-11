const VideoTitle = ({title , overview}) =>{
    return(
        <div className="pt-32 md:pt-60  px-4 md:px-16 absolute w-screen aspect-video z-10">
            <h1 className="font-semibold text-large md:font-extrabold md:text-3xl text-white">{title}</h1>
            <p className="hidden md:inline-block py-6 w-1/3 text-sm text-white">{overview}</p>
            <div className="">
                <button className="px-3 md:px-10 py-1 border rounded-md 2px black bg-white bg-opacity-1 text-black font-medium text-lg hover:bg-opacity-80">Play</button>
                <button className="mx-2 px-2 md:px-10 py-1 border rounded-md 2px black bg-gray-500 bg-opacity-50 text-white font-medium text-lg">more info</button>
            </div>
        </div>
    )
}

export default VideoTitle;