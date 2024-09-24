import { useState } from 'react';

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return { // Input props
    value: value,
    onChange: handleChange
  };
};

export default useFormInput;