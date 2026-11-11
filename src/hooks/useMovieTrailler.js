import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";

const useMovietrailer = (movieId) => {
    const dispatch = useDispatch(null);
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos" , API_OPTIONS)
        const json = await data.json();
        const filterVideo = json.results.filter(video => video.type === "Trailer");
        const trailer =filterVideo.length ? filterVideo[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        if(!trailerVideo) getMovieVideos();
    } , []);
}

export default useMovietrailer;