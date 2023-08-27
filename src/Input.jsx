import React from "react";
import FormikHOC from "./FormikHOC";
function Input({ label, id, name, className, touched, error, ...rest }) {
  let borderClass = " focus:border-indigo-500 border-gray-300 ";
  if (touched && error) {
    borderClass = "border-red-500 ";
  }
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={
          "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-indigo-500 sm:text-sm " +
          borderClass +
          className
        }
        {...rest}
      />
      {touched && error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
export const FormikInput = FormikHOC(Input);
export default Input;
