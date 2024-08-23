
/**
 * Mixed components
 * -------------------------------
 */

// Here is an example of the "Containment" pattern: 
// This component doesn't know its children ahead of time
export const Button = ({ children, backgroundColor, onClickHandler }) => {
    return <button style={{ backgroundColor }} onClick={onClickHandler}>{children}</button>;
};

// Here is an example of the "Specialization" pattern
// This component is a special case of the <Button /> component
export const DeleteButton = ({ clickHandler }) => {
    return <Button backgroundColor="red" onClickHandler={() => clickHandler()}>Delete</Button>
};


// Here is another example of the "Containment" pattern: 
// This component doesn't know its children ahead of time
export const Alert = ({ children, isVisible }) => {
    return (
        <>
            {isVisible ? (
                <>
                <div className="overlay" />
                <div className="alert">{children}</div>
                </>
            ) : null } 
        </>
    );
}