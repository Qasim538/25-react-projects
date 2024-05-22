import React, { useEffect, useRef, useState } from "react";
import UseFetchHook from "../CustomeHooks/UseFetchHook";

const ScrollTop = () => {
  const { data, error, pending } = UseFetchHook(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  function handleScrollToBottom() {
    bottomReference.current.scrollIntoView({behavior : 'smooth'})
  }


const bottomReference = useRef(null)
  if (error) {
    return <h1>Please try again "Error in getting data"</h1>;
  }
  if (pending) {
    return <h1>Loading, Please wait.</h1>;
  }

  return (
    <div>
      <h1>Scroll to Top and Bottom feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{ listSyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => (
              <li>
                {" "}
                <h3> {item.title} </h3>
                <br /> {item.description}{" "}
              </li>
            ))
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomReference}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
};

export default ScrollTop;
