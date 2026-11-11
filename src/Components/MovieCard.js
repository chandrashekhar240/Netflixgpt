import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({poster_path}) => {

    if(!poster_path) return null;
    return(
        <div className="w-36 h-52 md:w-40 md:h-60 m-2 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110">
            <img src={IMG_CDN_URL + poster_path} alt="Movie Poster" />

        </div>
    )
}

export default MovieCard;