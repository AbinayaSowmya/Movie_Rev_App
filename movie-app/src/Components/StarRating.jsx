import { FaStar } from "react-icons/fa";

function StarRating({ rating, saveRating }) {

    return (

        <div className="flex gap-2 mt-4">

            {[1,2,3,4,5].map((star)=>(

                <FaStar

                    key={star}

                    size={30}

                    onClick={()=>saveRating(star)}

                    className={`cursor-pointer transition-all duration-300 hover:scale-125

                    ${star<=rating

                    ?"text-yellow-400"

                    :"text-gray-300"

                    }`}

                />

            ))}

        </div>

    );

}

export default StarRating;