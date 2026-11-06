import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({poster_path}) => {
    return(
        <div className="w-48 h-72 m-1 rounded-lg overflow-hidden shadow-lg">
            <img src={IMG_CDN_URL + poster_path} alt="Movie Poster" />
        </div>
    )
}

export default MovieCard;