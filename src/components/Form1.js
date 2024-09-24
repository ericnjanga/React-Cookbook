import React from 'react'; 
import useFormInput from '../hooks/useFormInput';


export default function Form1() {
  const firstNameProps = useFormInput('Momo');
  const lastNameProps = useFormInput('Mone');

  return (
    <>
      <label>
        First name:
        <input className='form-control' value={firstNameProps.value} onChange={firstNameProps.onChange} /> 
      </label>
      <label>
        Last name: 
        <input className='form-control' value={lastNameProps.value} onChange={lastNameProps.onChange} /> 
      </label>
      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  );
}


