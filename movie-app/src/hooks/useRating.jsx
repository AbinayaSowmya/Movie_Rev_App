import { useState } from "react";

function useRating(movieId){

    const savedRating=localStorage.getItem(`rating-${movieId}`);

    const[rating,setRating]=useState(
        savedRating ? Number(savedRating) : 0
    );
    function saveRating(stars){
        setRating(stars);
        localStorage.setItem(`rating-${movieId}`, stars);
    }
    return{
        rating,
        saveRating
    };
}
export default useRating;