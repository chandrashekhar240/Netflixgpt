import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GptSearch = () => {
    return (
        <div className="">
            <div className='absolute inset-0 -z-10'>
                <img className="h-full w-full object-cover"
                src={BG_IMG_URL} alt ="Background poster wall"/>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}

export default GptSearch;