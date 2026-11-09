import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import {useDispatch} from "react-redux";
import { addTopRatedMovies } from "../utils/MovieSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch(null);
    
    const getTopRatedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json?.results));

    }
    useEffect(() => {
            getTopRatedMovies();
        },[]);
}

export default useTopRatedMovies;

