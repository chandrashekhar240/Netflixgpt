import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    return (
        <div>
            <h1 className="text-white text-2xl px-6 py-2">{title}</h1>
            <div className = "flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
            <div className = "flex">
                {movies?.map((movie) => <MovieCard key = {movie.id} poster_path = {movie.poster_path}/>)}
            </div>
            </div>   
        </div>
    )
}

export default MovieList;