function Hero() {
    //home page hero section with a background image and text content
    return (
        <section className="relative h-[70vh]">
            <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-5">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                    Discover Movies You Love
                </h1>
                <p className="text-gray-300 mt-6 max-w-2xl text-lg">
                    Search thousands of movies,read details
                    and rate your favourites with stars.
                </p>
                <button className="mt-8 bg-red-500 hover:bg-red-600 px-7 py-2 rounded-full text-white text-lg font-semibold transition">
                    Explore Movies
                </button>
            </div>
        </section>
    )

}
export default Hero;