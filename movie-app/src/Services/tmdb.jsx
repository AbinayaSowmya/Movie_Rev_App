import axios from "axios";

const API_KEY=import.meta.env.VITE_API_KEY;
const BASE_URL="https://api.themoviedb.org/3";

export const getMovies=async()=>{
    const response=await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    return response.data.results;
};
export const getMovieDetails=async(id)=>{
    const response=await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
};

export const getMovieCredits=async(id)=>{
    const response=await axios.get(
        `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return response.data.cast.slice(0,5);
};