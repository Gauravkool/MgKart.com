import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import Loading from "./Loading";
import { getProductData } from "./API";
import NotFound from "./NotFound";
import Button from "./Button";

function ProductDetail({ addToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  useEffect(
    function () {
      getProductData(id)
        .then((product) => {
          setProduct(product);
          setLoading(false);
          setCount(1)
        })
        .catch(function () {
          setLoading(false);
        });
    },
    [id]
  );

  function handleCountChange(e) {
    setCount(+e.target.value);
  }

  function handleButtonClick() {
    addToCart(id, count);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="p-2 grow">
      <Link to="/" className="mb-4 text-indigo-500 flex items-center">
        {<HiArrowLeft className="text-2xl" />} Back
      </Link>
      <div className="w-80 bg-cyan-200">
        <img className="w-20" src={product.thumbnail} />
        <span>{product.category}</span>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <input
          value={count}
          onChange={handleCountChange}
          className="border border-gray-500 rounded-md w-14 px-2 "
          type="number"
        />
        <Button onClick={handleButtonClick}>Add to Cart</Button>
      </div>
      <div className="flex justify-between px-6 mt-4">
        <div>
          {id > 1 && (
            <Link to={"/products/" + (id - 1)}>
              {<HiArrowLeft className="text-2xl" />}previous
            </Link>
          )}
        </div>
        <Link to={"/products/" + (id + 1)}>
          {<HiArrowRight className="text-2xl" />}next
        </Link>
      </div>
    </div>
  );
}
export default ProductDetail;
