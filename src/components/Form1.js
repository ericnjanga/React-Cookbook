import React from "react";
import useFormInput from "../hooks/useFormInput";

export default function Form1() {
  const firstNameProps = useFormInput("Momo");
  const lastNameProps = useFormInput("Mone");

  return (
    <>
      <div className="row">
        <div className="col">
          <label className="d-block">
            First name:
            <input
              className="form-control"
              value={firstNameProps.value}
              onChange={firstNameProps.onChange}
            />
          </label>
        </div>
        <div className="col">
        <label className="d-block">
            Last name:
            <input
              className="form-control"
              value={lastNameProps.value}
              onChange={lastNameProps.onChange}
            />
          </label>
        </div>

        <p>
            <b>
              Good morning, {firstNameProps.value} {lastNameProps.value}.
            </b>
          </p>
      </div>
    </>
  );
}
