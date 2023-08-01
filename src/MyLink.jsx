import { Container } from "postcss";
import React from "react";
function MyLink(props) {
    const {help , ...rest} = props;
  console.log("my props is", props);
  return (
    <>
      <a
        className="border border-b-red-300 text-green-700 self-start"
        {...rest}
      ></a>
      <span>{help}</span>
    </>
  );
}
export default MyLink;
