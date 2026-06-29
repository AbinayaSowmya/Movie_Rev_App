import { useState } from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import SearchBar from "../Components/SearchBar";
import Filter from "../Components/Filter";
import Loader from "../Components/Loader";
import MovieCard from "../Components/MovieCard";
import MovieModal from "../Components/MovieModal";

import useMovie from "../Hooks/useMovie";
import useSearch from "../Hooks/useSearch";

function Home(){
    const{ movies,loading }=useMovie();
    const{ search,setSearch,filteredMovies }=useSearch(movies);
    const[selectedMovie,setSelectedMovie]=useState(null);
    const[genre,setGenre]=useState("All");
    const [year,setYear]=useState("All");
    const [rating,setRating]=useState(0);

    //Available Genres
    const genres=[
        { id: 28,name: "Action" },
        { id: 12,name: "Adventure" },
        { id: 16,name: "Animation" },
        { id: 35,name: "Comedy" },
        { id: 80,name: "Crime" },
        { id: 18,name: "Drama" },
        { id: 10751,name: "Family" },
        { id: 14,name: "Fantasy" },
        { id: 27,name: "Horror" },
        { id: 9648,name: "Mystery" },
        { id: 10749,name: "Romance" },
        { id: 878,name: "Sci-Fi" },
        { id: 53,name: "Thriller" }
    ];
    // Get unique release years
    const years=[
        ...new Set(
            movies
                .filter(movie => movie.release_date)
                .map(movie => movie.release_date.substring(0, 4))
        )
    ].sort().reverse();

    // Apply all filters
    const finalMovies=filteredMovies.filter((movie)=>{

        const movieYear=movie.release_date
            ? movie.release_date.substring(0,4)
            : "";

        const selectedGenre=genres.find(
            (g)=>g.name === genre
        );
        const genreMatch=
            genre === "All" || movie.genre_ids.includes(selectedGenre?.id);
        const yearMatch=
            year === "All" || movieYear === year;
        const ratingMatch=movie.vote_average >= Number(rating);
        return genreMatch && yearMatch && ratingMatch;
    });
    function openMovie(movie){
        setSelectedMovie(movie);
    }
    function closeMovie(){
        setSelectedMovie(null);
    }
    if(loading){
        return <Loader />;
    }
    return(
        <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white">
            <Navbar />
            <Hero />
            <div className="max-w-7xl mx-auto px-5">
                <SearchBar
                    search={search}
                    setSearch={setSearch}/>
                <Filter
                    genres={genres}
                    years={years}
                    genre={genre}
                    setGenre={setGenre}
                    year={year}
                    setYear={setYear}
                    rating={rating}
                    setRating={setRating}/>
                {finalMovies.length === 0 ? (
                    <div className="text-center mt-20">
                        <h1 className="text-4xl font-bold text-gray-700">
                            No Movies Found 🎬
                        </h1>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
                        {finalMovies.map((movie)=>(
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                openMovie={openMovie}
                            />
                        ))}
                    </div>
                )}
            </div>
            <MovieModal
                movie={selectedMovie}
                onClose={closeMovie}/>
        </div>
    );
}
export default Home;