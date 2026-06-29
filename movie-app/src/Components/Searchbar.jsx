import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }){
    return(
        <div className="max-w-4xl mx-auto -mt-10 relative z-20">
            <div className="bg-white rounded-full shadow-2xl flex items-center px-6 py-4">
                <FaSearch className="text-gray-500 text-xl"/>
                <input
                    type="text"
                    placeholder="Search your favourite movie"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className="w-full ml-4 outline-none text-lg"/>
            </div>
        </div>
    )

}
export default SearchBar;