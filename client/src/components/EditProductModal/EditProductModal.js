import React from 'react';
import EditForm from '../EditForm/EditForm';
import { Modal } from 'react-bootstrap';


function EditProductModal({ setShow, show, onHide, product }) {

    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {product &&
          <EditForm
            product={product}
            setShow={setShow}
          />}
        </Modal.Body>
        </Modal>
    );
}

export default EditProductModal;
