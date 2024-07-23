import {useState} from "react";
import Review from "./Review/Review";

const Reviews = () => {
    let [reviews, setReviews] = useState([
        {
            id: 1,
            author: 'Oleksii',
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias assumenda dolor esse est excepturi ipsam nihil, nisi numquam officiis quaerat quas repellendus repudiandae soluta tempora temporibus tenetur vel veritatis.",
            likes: 10,
        },
        {
            id: 2,
            author: 'Anatoliy',
            review: "Lorem ipsum dolor sit amee soluta tempora temporibus tenetur vel veritatis.",
            likes: 20,
        },
        {
            id: 3,
            author: 'Yevhen',
            review: "Lorem ipsum dolor sit amet, consectetur um dolor sit amee solu adipisicing elit. Accusantium alias assumenda dolor esse est excepturi ipsam nihil, nisi numquam officiis quaerat quas repellendus repudiandae soluta tempora temporibus tenetur vel veritatis."
        },
    ]);
    let [currentReview, setCurrentReview] = useState('');
    let [user, setUser] = useState('');

    const currentReviewHandler = (e) => {
        setCurrentReview(e.target.value);
    };

    const addReviewHandler = () => {
        if (user.length < 1) {
            alert("non null")
            return;
        }
        const review = {
            id: 4,
            author: user,
            review: currentReview,
            date: new Date().toLocaleString(),
            likes: 0,
        };
        setReviews([review, ...reviews]);
        setCurrentReview('');
        setUser('');
    }

    const likesHandler = (currentId) => {
        for (let review of reviews) {
            review.likes = review.likes + 1;
            if (review.id === currentId) {
                // let currentReview = {
                //     id: review.id,
                //     author: review.author,
                //     review: review.review,
                //     likes: review.likes + 1,
                // };

                // setReviews([...reviews])
            }
        }
    }

    const userHandler = (e) => {
        setUser(e.target.value);
    }

    return (
        <div className='Reviews'>
            <div className='container'>
                <h2>Reviews:</h2>
                <div className='navigate'>
                    <input type="text" placeholder="add name" onChange={userHandler} value={user}/>
                    <div>
                        <textarea name="" id="" cols="40" rows="5" onChange={currentReviewHandler} value={currentReview}></textarea>
                        <button onClick={addReviewHandler}>Add review</button>
                    </div>
                </div>
            </div>
            {
                reviews.map(review => <Review review={review} likesHandler={likesHandler}/>)
            }
        </div>
    )
}

export default Reviews;