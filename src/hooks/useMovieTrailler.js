import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";

const useMovietrailer = (movieId) => {
    const dispatch = useDispatch(null);
    

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos" , API_OPTIONS)
        const json = await data.json();
        const filterVideo = json.results.filter(video => video.type === "Trailer");
        const trailer =filterVideo.length ? filterVideo[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideos();
    } , []);
}

export default useMovietrailer;