import React, { useState } from "react";

/**
 * There are 2 ways a feedback can be submitted:
 * 1) Rating is below 5 stars and comments are 10 characters up
 * 2) Rating is 5 stars up (comments are optional in this case)
 * @returns 
 */
const FeedbackForm = ({ onSubmit }) => {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const isDisabled = Number(score) < 5 && comment.length <= 10;
    const textareaPleaceHolder = isDisabled 
        ? 'Please provide a comment explaining why the feedback was poor (10 characters minimum)'
        : 'Optional feedback';

    const handleSubmit = (e) => {
        e.preventDefault();

        // Fire function in props ...
        if (onSubmit) {
            onSubmit({ score, comment });
            console.log('>>>> form submitted'); 
        }

        // Reinitiate the form after submission
        setComment('');
        setScore('10');
    };

    return (
        <form className="form-feedback" onSubmit={handleSubmit}>
            <fieldset>
                <h2 className="mb-3">Feedback Form</h2>
                <div className="field mb-3">
                    <label 
                        id="score-label" 
                        className="d-block">Score: {score} ⭐</label>
                    <input 
                        aria-labelledby="score-label"
                        className="w-100"
                        type="range" 
                        min="0" max="10" 
                        value={score} 
                        onChange={e => setScore(e.target.value)} 
                    />
                </div>
                <div className="field mb-3">
                    <label 
                        id="comment-label" 
                        className="d-block">Comment</label>
                    <textarea 
                        aria-labelledby="comment-label"
                        className="form-control" 
                        placeholder={textareaPleaceHolder}
                        value={comment} onChange={e => setComment(e.target.value)}></textarea>
                </div>
                <div className="d-grid gap-2">
                    <button 
                        className="btn btn-primary"
                        disabled={isDisabled}
                    >Submit</button>
                </div>
            </fieldset>
        </form>
    );
};

export default FeedbackForm;