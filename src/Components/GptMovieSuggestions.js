import { useSelector } from "react-redux";
import MovieList from "./MovieList"


const GptMovieSuggestions = () => {

    const gpt = useSelector(store => store.gpt);
    const{movieResults , movieNames} = gpt;

    if(!movieNames) return null;
    return (
        <div className="font-semibold mt-2">
            <div>
                {movieNames.map((movieName , index) => (
                <MovieList key= {movieName} title = {movieName} movies = {movieResults[index]}/>
            ))}
            </div>
            
        </div>
    )
}

export default GptMovieSuggestions;