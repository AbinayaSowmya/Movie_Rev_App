import { FaFilm } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="flex items-center gap-3">

          <FaFilm className="text-red-500 text-3xl" />

          <h1 className="text-3xl font-bold text-white">
            Movie<span className="text-red-500">Review</span>
          </h1>

        </div>

        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-semibold transition duration-300">

          Home

        </button>

      </div>

    </nav>
  );
}

export default Navbar;