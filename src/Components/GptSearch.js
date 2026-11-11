import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";
import { GPT_BG } from "../utils/constants";

const GptSearch = () => {
    return (
        <div className="pt-[25%] md:pt-0">
            <div className='fixed inset-0 -z-10 bg-black/90 backdrop-blur-md w-full'>
                {/* <img className="h-full w-full object-cover"
                src={GPT_BG} alt ="Background poster wall"/> */}
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}

export default GptSearch;