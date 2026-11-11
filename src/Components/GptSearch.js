import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";
import { GPT_BG } from "../utils/constants";

const GptSearch = () => {
    return (
        <div className="">
            <div className='fixed inset-0 -z-10'>
                <img className="h-full w-full object-cover"
                src={GPT_BG} alt ="Background poster wall"/>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}

export default GptSearch;