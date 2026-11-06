import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    if(!movies.nowPlayingMovies) return;
    return (
        <div className = "bg-black w-full">
            <div className = "pl-12 relative -mt-52 z-20 ">
            <MovieList title= {"Now Playing"} movies = {movies?.nowPlayingMovies}/>
            <MovieList title= {"Popular"} movies = {movies?.popularMovies}/>
            <MovieList title= {"Top Rated"} movies = {movies?.topRatedMovies}/>
            <MovieList title= {"Upcoming"} movies = {movies?.upcomingMovies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;