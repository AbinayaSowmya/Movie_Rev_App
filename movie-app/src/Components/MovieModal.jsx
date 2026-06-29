import { useEffect, useState } from "react";

import { FaCalendarAlt, FaClock, FaLanguage, FaStar } from "react-icons/fa";

import { getMovieDetails, getMovieCredits } from "../Services/tmdb";

import StarRating from "./StarRating";

import useRating from "../Hooks/useRating";

function MovieModal({ movie, onClose }) {

    const [details, setDetails] = useState(null);

    const [cast, setCast] = useState([]);

    const { rating, saveRating } = useRating(movie?.id);

    useEffect(() => {

        if (movie) {

            loadMovie();

        }

    }, [movie]);

    async function loadMovie() {

        const movieDetails = await getMovieDetails(movie.id);

        const movieCast = await getMovieCredits(movie.id);

        setDetails(movieDetails);

        setCast(movieCast);

    }

    if (!movie) return null;

    if (!details) {

        return (

            <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

                <h1 className="text-white text-3xl">

                    Loading...

                </h1>

            </div>

        );

    }

    return (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4">

            <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">

                <button

                    onClick={onClose}

                    className="absolute right-6 top-5 text-3xl font-bold hover:text-red-500"

                >

                    ×

                </button>

                <div className="grid md:grid-cols-2 gap-8 p-8">

                    <img

                        src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}

                        className="rounded-2xl shadow-lg"

                        alt={details.title}

                    />

                    <div>

                        <h1 className="text-4xl font-bold">

                            {details.title}

                        </h1>

                        <p className="mt-5 text-gray-700 leading-7">

                            {details.overview}

                        </p>

                        <div className="space-y-3 mt-6">

                            <p className="flex items-center gap-3">

                                <FaCalendarAlt className="text-red-500"/>

                                {details.release_date}

                            </p>

                            <p className="flex items-center gap-3">

                                <FaClock className="text-red-500"/>

                                {details.runtime} mins

                            </p>

                            <p className="flex items-center gap-3">

                                <FaLanguage className="text-red-500"/>

                                {details.original_language.toUpperCase()}

                            </p>

                            <p className="flex items-center gap-3">

                                <FaStar className="text-yellow-400"/>

                                TMDB Rating : {details.vote_average.toFixed(1)}

                            </p>

                        </div>

                        <div className="mt-8">

                            <h2 className="text-xl font-bold mb-3">

                                Top Cast

                            </h2>

                            <div className="flex flex-wrap gap-2">

                                {

                                    cast.map((actor)=>(

                                        <span

                                            key={actor.id}

                                            className="bg-gray-200 px-3 py-2 rounded-full"

                                        >

                                            {actor.name}

                                        </span>

                                    ))

                                }

                            </div>

                        </div>

                        <div className="mt-10">

                            <h2 className="text-2xl font-bold">

                                Your Rating

                            </h2>

                            <StarRating

                                rating={rating}

                                saveRating={saveRating}

                            />

                            <p className="mt-3 text-gray-600">

                                You rated this movie

                                <span className="font-bold text-red-500">

                                    {" "} {rating} / 5

                                </span>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default MovieModal;