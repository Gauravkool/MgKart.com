import React from "react";
import { Link } from "react-router-dom";

function Product({ category, title, price, thumbnail, id }) {
  return (
    <div className="max-w-xs">
      <div className="w-full aspect-square">
        <img className="w-full h-full object-cover" src={thumbnail} />
      </div>
      <div className="text-gray-500 text-xs">{category}</div>
      <div>{title}</div>
      <div className="text-cyan-500">${price}</div>
      <Link className="text-indigo-500 bg-primary-default text-white px-2 py-1 rounded-md hover:bg-primary-light" to={"/products/" + id} >
        View Details
      </Link>
    </div>
  );
}
export default Product;
