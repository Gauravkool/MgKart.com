import React from "react";
import { useField } from "formik";
function FormikHOC(IncomingComponent) {
  function OutgoingComponent({ name, ...rest }) {
    const field = useField(name);
    //   console.log("data is ", name, field);
    const [data, meta] = field;
    const { value, onBlur, onChange } = data;
    const { error, touched } = meta;
    let borderClass = "focus:border-indigo-500 border-gray-300";
    if (error && touched) {
      borderClass = "border-red-500";
    }
    return (
      <IncomingComponent
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        error={error}
        touched={touched}
        {...rest}
      />
    );
  }
  return OutgoingComponent;
}
export default FormikHOC;
