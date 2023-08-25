import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import NoMatching from "./NoMatching";
import { getProductList } from "./API";
import Loading from "./Loading";
import Button from "./Button";

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(
    function () {
      let sortBy;
      let sortType;
      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "lowToHigh") {
        sortBy = "price";
      } else if (sort == "highToLow") {
        sortBy = "price";
        sortType = "desc";
      }
      getProductList(sortBy, query, page, sortType).then((products) => {
        setProductList(products);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }
  function handleSortChange(e) {
    setSort(e.target.value);
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="p-2 max-w-6xl mx-auto bg-white py-12.5 my-16">
        <div className="flex justify-around mb-4">
          <input
            value={query}
            onChange={handleQueryChange}
            placeholder="Search"
            className="bg-gray-50 border border-gray-300 rounded-md"
          />
          <select
            value={sort}
            onChange={handleSortChange}
            className="bg-gray-50 border border-gray-300 rounded-md"
          >
            <option value="dafault">Default sort</option>
            <option value="title">Sort by title</option>
            <option value="lowToHigh">Sort by price: Low To High</option>
            <option value="highToLow">Sort by price: High To Low</option>
          </select>
        </div>
        <div>
          {productList.length > 0 && <ProductList products={productList} />}
          {productList.length == 0 && (
            <NoMatching>No Matching Found</NoMatching>
          )}
        </div>
      </div>
      <div className="flex">
        <Button onClick={() => setPage(1)}>1</Button>
        <Button onClick={() => setPage(2)}>2</Button>
        <Button onClick={() => setPage(3)}>3</Button>
      </div>
    </>
  );
}

export default ProductListPage;
