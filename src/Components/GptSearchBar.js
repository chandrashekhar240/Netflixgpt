import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LanguageConstant";
import { useRef } from "react";
import ai from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {

    const dispatch = useDispatch();

    const searchText = useRef(null);


    const searchMovieTMDB = async(movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie +"&include_adult=false&language=en-US&page=1",API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async() => {
        const searchQuery = searchText.current?.value;
        const gptQuery = "act as a movie recommendation engine and suggest me some movies based on the following query : " + searchQuery + ". only give me name of five movies , seprated like the example result given ahead . Example result : Ramayana , pyre , Hanuman Ansh , Batman , Avengers";
        console.log("user quesry" ,gptQuery);
        const gptResults = await ai.models.generateContent({
            model: 'gemini-3.6-flash',
            contents: gptQuery,
            });

        const gptMovies = gptResults.text.split(',');

        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie)) 
        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResults({movieNames : gptMovies , movieResults : tmdbResults}));

    };

    const langKey = useSelector(store => store.config?.lang);
    return (
        <div>
    <form className="flex flex-col items-center justify-center pt-[10%]" onSubmit={(e) => { e.preventDefault(); handleGptSearchClick(); }}>
        <input 
            ref={searchText} 
            type="text" 
            placeholder={lang[langKey]?.gptSeachPlaceHolder} 
            className="w-1/2 py-3 px-4 bg-gray-200 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md"
        />
        <button 
            type="submit"
            className="bg-gray-500 hover:bg-gray-600 text-black font-semibold py-2 px-6 mt-4 rounded-md transition-colors shadow-md"
        >
            {lang[langKey]?.search}
        </button>
    </form>
</div>
    )
}

export default GptSearchBar;