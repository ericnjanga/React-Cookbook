import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./components/FeedbackForm";

describe('Feedback Form', () => {

    // [Scenario 1] ...
    test('Submission is disabled if score is lower than 5 and there is no feedback', () => {
        const handleSubmit = jest.fn();
        const score = "4";
        const comment = "";
        render(<FeedbackForm onSubmit={handleSubmit} />);

        // Set the score below 5 ...
        const rangeInput = screen.getByLabelText(/Score:/);
        fireEvent.change(rangeInput, { target: { value: score } });

        // Don't write any comment at all ...
        const textarea = screen.getByRole('textbox'); // Find the comment textarea 
        fireEvent.change(textarea, { target: { value: comment } })
        expect(textarea.value.length).toBe(0);

        // Submit the form ...
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        // Expect the submit button to be disabled and the form NOT to have been submitted
        expect(submitButton).toHaveAttribute('disabled');
        expect(handleSubmit).not.toHaveBeenCalled();
    });


    // [Scenario 2] ...
    test('User is able to submit the form if the score is lower than 5 and additional feedback is provided.', () => {
        const handleSubmit = jest.fn();
        const score = "3";
        const comment = "The pizza crust was too thick";
        render(<FeedbackForm onSubmit={handleSubmit} />);

        // Set the score below 5 ...
        const rangeInput = screen.getByLabelText(/Score:/); // Find the range input
        fireEvent.change(rangeInput, { target: { value: score } });

        // Write a comment of length >= 10 ...
        const textarea = screen.getByRole('textbox'); // Find the comment textarea 
        fireEvent.change(textarea, { target: { value: comment } })
        expect(textarea.value.length).toBeGreaterThanOrEqual(10);

        // Submit the form ...
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        // Expect the submit button to be enabled and the form to have been submitted
        expect(submitButton).not.toHaveAttribute('disabled');
        expect(handleSubmit).toHaveBeenCalledWith({
            score,
            comment
        });
    });


    // [Scenario 3] ...
    test('User is able to submit the form if the score is higher than 5, without additional feedback.', () => {
        const handleSubmit = jest.fn();
        const score = "8";
        const comment = "";
        render(<FeedbackForm onSubmit={handleSubmit} />);

        // Set the score above 5 ...
        const rangeInput = screen.getByLabelText(/Score:/); // Find the range input
        fireEvent.change(rangeInput, { target: { value: score } });

        // Don't write any comment at all ...
        const textarea = screen.getByRole('textbox'); // Find the comment textarea 
        fireEvent.change(textarea, { target: { value: comment } })
        expect(textarea.value.length).toBe(0);

        // Submit the form ...
        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        // Expect the submit button to be enabled and the form to have been submitted
        expect(submitButton).not.toHaveAttribute('disabled');
        expect(handleSubmit).toHaveBeenCalledWith({
            score,
            comment
        });
    });
});




