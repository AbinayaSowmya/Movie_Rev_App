function Filter({
    genres,
    years,
    genre,
    setGenre,
    year,
    setYear,
    rating,
    setRating

}) {
//filtering movies based on genre,year and rating
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-10">
            <select
                value={genre}
                onChange={(e)=>setGenre(e.target.value)}
                className="bg-white px-5 py-3 rounded-xl shadow-md border">
                <option value="All">All Genres</option>
                {
                    genres.map((g)=>(
                        <option
                            key={g.id}
                            value={g.name}
                        >
                            {g.name}
                        </option>
                    ))
                }
            </select>
            <select
                value={year}
                onChange={(e)=>setYear(e.target.value)}
                className="bg-white px-5 py-3 rounded-xl shadow-md border">
                <option value="All">
                    All Years
                </option>
                {
                    years.map((y)=>(
                        <option
                            key={y}
                            value={y}
                        >
                       {y}
                       </option>
                    ))
                }
            </select>
            <select
                value={rating}
                onChange={(e)=>setRating(e.target.value)}
                className="bg-white px-5 py-3 rounded-xl shadow-md border"
            >
                <option value="0">
                    All Ratings
                </option>
                <option value="5">⭐ 5+</option>
                <option value="6">⭐ 6+</option>
                <option value="7">⭐ 7+</option>
                <option value="8">⭐ 8+</option>
            </select>
        </div>
    );

}
export default Filter;