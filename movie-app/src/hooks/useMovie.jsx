import { useEffect, useState } from "react";
import { getMovies } from "../Services/tmdb";

function useMovie() {

    const [movies, setMovies] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchMovies();

    }, []);

    async function fetchMovies() {

        const data = await getMovies();

        setMovies(data);

        setLoading(false);

    }

    return { movies, loading };

}

export default useMovie;