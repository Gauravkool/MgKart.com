import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import NoMatching from "./NoMatching";
import { getProductList } from "./API";
import Loading from "./Loading";
import Button from "./Button";
import range from "lodash.range";
import { Link, useSearchParams } from "react-router-dom";
function ProductListPage() {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let { sort, query, page } = params;
  page = page || 1;
  query = query || "";
  sort = sort || "default";

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
      getProductList(sortBy, query, page, sortType).then((body) => {
        setProductData(body);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  function handleQueryChange(e) {
    setSearchParams(
      { ...params, query: e.target.value, page: 1 },
      { replace: false }
    );
  }
  function handleSortChange(e) {
    setSearchParams({ ...params, sort: e.target.value }, { replace: false });
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
          {productData.data.length > 0 && (
            <ProductList products={productData.data} />
          )}
          {productData.data.length == 0 && (
            <NoMatching>No Matching Found</NoMatching>
          )}
        </div>
      </div>
      <div className="flex">
        {range(1, productData.meta.last_page + 1).map((pageNo) => (
          <Link
            className={
              "py-1 px-2 m-1 " +
              (pageNo == page ? "bg-primary-light" : "bg-primary-default")
            }
            key={pageNo}
            to={"?" + new URLSearchParams({ ...params, page: pageNo })}
          >
            {pageNo}
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductListPage;
