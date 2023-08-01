import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import NoMatching from "./NoMatching";
import { getProductList } from "./API";
import Loading from "./Loading";

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    getProductList().then((products) => {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Default");

  let data = productList.filter(function (item) {
    return item.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });

  if (sort == "price") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

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
    <div className="p-2 max-w-6xl mx-auto bg-white py-12.5 my-16">
      <input
        value={query}
        onChange={handleQueryChange}
        placeholder="Search"
        className="bg-gray-50 border border-gray-300 mb-2 rounded-md"
      />
      <select
        value={sort}
        onChange={handleSortChange}
        className="bg-gray-50 border border-gray-300 ml-2 rounded-md"
      >
        <option value="dafault">Default sort</option>
        <option value="name">Sort by title</option>
        <option value="price">Sort by price</option>
      </select>
      <div>
        {data.length > 0 && <ProductList products={data} />}
        {data.length == 0 && <NoMatching>No Matching Found</NoMatching>}
      </div>
    </div>
  );
}

export default ProductListPage;
