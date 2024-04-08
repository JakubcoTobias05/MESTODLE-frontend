import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function Victory(props) {
  const [isShown, setIsShown] = useState(true);

  const Close = () => {
    setIsShown(false);
  };

  return (
    <>
      <Modal
        show={isShown}
        onHide={() => setIsShown(false)}
        size="lg"
        centered
        className="transparentModal"
      >
        <Modal.Body>
          <div className="container victory">
            <div className="card w-50 text-center">
              <Modal.Header closeButton></Modal.Header>

              <div className="pb-5">
                <h1 className="pb-3">Výhra!</h1>

                <h2>{props.mesto}</h2>

                <p className="mb-1 smaller">{props.title}</p>

                {props.tries > 1 ? (
                  <p className="smaller">Pokusy: {props.tries}</p>
                ) : (
                  <p className="smaller">První pokus!</p>
                )}

                <button type="button" className="btn btn-dark" onClick={Close}>
                  Hrát znova
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
