import * as React from "react";
import "./styles.css";


/* The RadioGroup component receives the selected prop, a string that 
represents the value of the currently selected radio option */
export const RadioGroup = ({ onChange, selected, children }) => {

    const RadioOptions = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            ...child.props,
            onChange,
            // The child will be marked as checked if its value has been selected
            checked: child.props.value === selected,
        }) 
    });

    return <div className="RadioGroup">{RadioOptions}</div>;
};


/* An individual RadioOption component only cares about whether it 
is selected or not, via the boolean checked prop */
export const RadioOption = ({ value, checked, onChange, children }) => {

  return (
    <div className="RadioOption">
        <input 
            id={value} 
            type="radio" 
            name={value} 
            value={value}
            checked={checked} 
            onChange={(e) => onChange(e.target.value)} 
        />
        <label htmlFor={value}>{children}</label>
    </div>
  );
};
