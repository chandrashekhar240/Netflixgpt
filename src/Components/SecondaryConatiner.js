import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    if(!movies.nowPlayingMovies) return;
    return (
        <div className = "bg-black/90 backdrop-blur-md w-full">
            <div className = "pl-6 md:pl-12 relative mt-0 md:-mt-36 z-20 ">
            <MovieList title= {"Now Playing"} movies = {movies?.nowPlayingMovies}/>
            <MovieList title= {"Popular"} movies = {movies?.popularMovies}/>
            <MovieList title= {"Top Rated"} movies = {movies?.topRatedMovies}/>
            <MovieList title= {"Upcoming"} movies = {movies?.upcomingMovies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;