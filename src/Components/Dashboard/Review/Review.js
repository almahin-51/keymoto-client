import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import {
    FloatingLabel, Form, Button
} from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";

const Review = () => {
    const { user } = useAuth();
    const value = { name: user.displayName, email: user.email, img: user.photoURL, rate: 0};
    const [review, setReview] = useState(value);

    const ratingChanged = (newRating) => {
        
        review.rate = newRating;
    };

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...review };
        newUser[field] = value;
        setReview(newUser);
    };

    const handlePost = e => {
        if (review.rate === 0) {
            swal("Warning", "You have must Rating Fast!", "warning")
                .then(e => {
                    return
                });
        }
        else {
            fetch('https://hidden-thicket-41796.herokuapp.com/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        swal("Good job!", "You clicked the button!", "success").then(e => {
                            if (e) {
                                document.getElementById('review').reset();
                            }
                        })
                    }
                });
        }
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="fw-bold text-center my-4 text-red">Review</h1>
            <Form id="review" onSubmit={handlePost}>
                <Form.Floating className="mb-1">
                    <h4>Rate Your Expression</h4>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    <FloatingLabel controlId="floatingTextarea2" className="mt-2" label="Review">
                        <Form.Control
                            as="textarea"
                            name="review"
                            onBlur={handleOnBlur}
                            required
                            placeholder="Review"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form.Floating>
                <Button type="submit" className="form-control rounded-1 text-red my-btn mt-3 text-black">SUBMIT</Button>
            </Form>
        </div>
    );
};

export default Review;