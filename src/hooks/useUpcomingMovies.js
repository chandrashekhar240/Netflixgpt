import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import { addUpcomingMovies } from "../utils/MovieSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch(null);
    const upcomingMovies = useSelector(Store => Store.movies.upcomingMovies);
    
    const getUpcomingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results));

    }
    useEffect(() => {
        if(!upcomingMovies) getUpcomingMovies();
        },[]);
}

export default useUpcomingMovies;

