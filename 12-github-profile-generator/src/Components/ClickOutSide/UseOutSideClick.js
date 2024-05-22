import React, { useRef, useState } from "react";
import Click from "./Click";

const UseOutSideClick = () => {
  const [showContent, setShowContent] = useState(false);

  const ref = useRef();
  Click(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>this is a random Content</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            quos qui aut facere porro consequuntur tenetur at repellendus eius
            doloremque?
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOutSideClick;
