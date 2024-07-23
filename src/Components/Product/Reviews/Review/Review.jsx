import  "./Review.css";
import {useState} from "react";

const Review = (props) => {
    // let [currentLikes, setCurrentLikes] = useState(props.review.likes);
    return (
        <div className='Review'>
            <h1>{props.review.author}</h1>
            <p className='review'>{props.review.review}</p>
            <h3>Created: {props.review.date}</h3>
            <button onClick={() => props.likesHandler(props.review.id)}>Likes: {props.review.likes}</button>
        </div>
    )
}

export default Review;