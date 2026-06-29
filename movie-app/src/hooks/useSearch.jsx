import { useState } from "react";

function useSearch(movies){

    const[search,setSearch]=useState("");

    const filteredMovies=movies.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase())
    );
    return{
        search,
        setSearch,
        filteredMovies
    };
}
export default useSearch;