function Loader(){

    return(

        <div className="flex flex-col justify-center items-center h-screen bg-slate-100">

            <div className="w-20 h-20 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>

            <h2 className="mt-6 text-2xl font-bold text-slate-700">

                Loading Movies...

            </h2>

        </div>

    )

}

export default Loader;