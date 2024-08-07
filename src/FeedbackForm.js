import React, { useState } from "react";


const FeedbackForm = () => {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Number(score) <= 5 && comment.length <= 10) {
            alert('Please provide a comment explaining why the feedback was poor (10 characters minimum)');
            return;
        }

        // Reinitiate the form after submission
        console.log('submitted');
        setComment('');
        setScore('10');
    };

    return (
        <form className="form-feedback" onSubmit={handleSubmit}>
            <fieldset>
                <h2 className="mb-3">Feedback Form</h2>
                <div className="field mb-3">
                    <label className="d-block">Score: {score} ⭐</label>
                    <input 
                        className="w-100"
                        type="range" 
                        min="0" max="10" 
                        value={score} 
                        onChange={e => setScore(e.target.value)} 
                    />
                </div>
                <div className="field mb-3">
                    <label className="d-block">Comment</label>
                    <textarea className="form-control" value={comment} onChange={e => setComment(e.target.value)}></textarea>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </fieldset>
        </form>
    );
};

export default FeedbackForm;