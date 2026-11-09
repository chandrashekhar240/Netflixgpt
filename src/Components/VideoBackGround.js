
import { useSelector } from "react-redux";
import useMovietrailer from "../hooks/useMovieTrailler";

const VideoBackGround = ({movieId}) => {
const trailerVideo = useSelector(store => store.movies?.trailerVideo);
useMovietrailer(movieId);
    
    return (
        <div className="w-screen overflow-hidden ">
            <iframe className="w-screen aspect-video scale-[1.4]" src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?&autoplay=1&mute=1&controls=0&loop=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen frameBorder="0"></iframe>
        </div>
    )
}

export default VideoBackGround;