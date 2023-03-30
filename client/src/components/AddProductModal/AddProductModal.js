import React from 'react';
import { Modal } from 'react-bootstrap';
import AddProductForm from '../AddProductForm/AddProductForm';


function AddProductModal({ setShow, show, handleClose, handleProductAdd }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddProductForm
                        setShow={setShow}
                        handleProductAdd={handleProductAdd}
                        />
            </Modal.Body>
        </Modal>
    )
}
export default AddProductModal;
