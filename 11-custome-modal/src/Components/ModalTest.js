import React, { useState } from "react";
import Modal from "./Modal";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  function handleModalPopUp() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <button onClick={handleModalPopUp}>Open Modal PopUp</button>
      {
        showModal && <Modal />
      }
    </div>
  );
};

export default ModalTest;
