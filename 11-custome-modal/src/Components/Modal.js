import React from "react";

const Modal = ({ id, header, body, footer }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>

        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal!</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : { footer }}</div>
      </div>
    </div>
  );
};

export default Modal;
