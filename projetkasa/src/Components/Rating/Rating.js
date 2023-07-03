import "./Rating.css";
import { FaStar } from "react-icons/fa";

function Rating({ rating }) {
    if (rating === undefined || rating === null || rating === ""){
        return (
            <p>Aucune note</p>
        );
    }
        return (
            <div className="Rating">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                    return (
                        <label key={i}>
                            <FaStar
                                className="star"
                                color={ratingValue <= (rating) ? "#FF6060" : "#E3E3E3"}
                                size={24}
                            />
                        </label>
                    );
            })}
        </div>
        );
}

export default Rating;