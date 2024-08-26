
/**
 * Mixed components
 * -------------------------------
 */

/**
 * CONTAINMENT PATTERN:
 * This component doesn't know its children ahead of time
 * @param {*} param0 
 * @returns 
 */ 
export const Button = ({ children, backgroundColor, onClickHandler }) => {
    return <button style={{ backgroundColor }} onClick={onClickHandler}>{children}</button>;
};


/**
 * SPECIALIZATION PATTERN:
 * This component is a special case of the <Button /> component
 * @param {*} param0 
 * @returns 
 */ 
export const DeleteButton = ({ clickHandler }) => {
    return <Button backgroundColor="red" onClickHandler={() => clickHandler()}>Delete</Button>
};


/**
 * CONTAINMENT PATTERN:
 * This component doesn't know its children ahead of time
 * @param {*} param0 
 * @returns 
 */ 
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