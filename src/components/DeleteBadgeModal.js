import React from "react";

import Modal from "./Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal text-center">
        <h1>Are You Sure?</h1>
        <p>You are about to delete this badge.</p>

        <div className="row">
          <div className="col-6">
            <button
              onClick={props.onDeleteBadge}
              className="btn btn-danger btn-block"
            >
              Delete
            </button>
          </div>
          <div className="col-6">
            <button
              onClick={props.onClose}
              className="btn btn-primary btn-block"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
