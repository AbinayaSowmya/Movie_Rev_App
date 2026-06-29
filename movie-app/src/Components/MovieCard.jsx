import { FaStar, FaCalendarAlt } from "react-icons/fa";
import genres from "../utils/genres";

function MovieCard({ movie, openMovie }) {

    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

    const genre =
        movie.genre_ids.length > 0
            ? genres[movie.genre_ids[0]]
            : "Unknown";

    return (

        <div
            onClick={() => openMovie(movie)}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-red-300 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer"
        >

            <div className="overflow-hidden">

                <img
                    src={IMAGE_URL + movie.poster_path}
                    alt={movie.title}
                    className="w-full h-[420px] object-cover hover:scale-110 duration-500"
                />

            </div>

            <div className="p-5">

                <h2 className="text-xl font-bold truncate">

                    {movie.title}

                </h2>

                <div className="flex justify-between items-center mt-4">

                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">

                        {genre}

                    </span>

                    <span className="flex items-center gap-1 font-semibold">

                        <FaStar className="text-yellow-400" />

                        {movie.vote_average.toFixed(1)}

                    </span>

                </div>

                <p className="flex items-center gap-2 text-gray-600 mt-4">

                    <FaCalendarAlt />

                    {movie.release_date}

                </p>

                <button

                    className="mt-5 w-full bg-slate-900 hover:bg-red-500 text-white py-3 rounded-xl duration-300"

                >

                    View Details

                </button>

            </div>

        </div>

    );

}

export default MovieCard;