import React from "react";
import UseFetchHook from "./UseFetchHook";

const Test = () => {
  const { data, error, pending } = UseFetchHook(
    "https://dummyjson.com/products",
    {}
  );
  console.log(data, error, pending);

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending please wait...</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <div>
              <h2 key={productItem.key}>{productItem.title}</h2>
              <p>{productItem.description}</p>
              <h4>£{productItem.price}</h4>
            </div>
          ))
        : null}
    </div>
  );
};

export default Test;
