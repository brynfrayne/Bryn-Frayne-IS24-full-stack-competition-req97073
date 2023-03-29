import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';


function EditProductModal({ show, onHide, product, onSubmit }) {
    const [productName, setProductName] = useState(product.productName);
    const [productOwnerName, setProductOwnerName] = useState(product.productOwnerName);
    const [developers, setDevelopers] = useState(product.Developers.join(', '));
    const [scrumMasterName, setScrumMasterName] = useState(product.scrumMasterName);
    const [startDate, setStartDate] = useState(product.startDate);
    const [methodology, setMethodology] = useState(product.methodology);

    const handleSubmit = (event) => {
      event.preventDefault();
      const editedProduct = {
        ...product,
        productName,
        productOwnerName,
        Developers: developers.split(',').map((developer) => developer.trim()),
        scrumMasterName,
        startDate,
        methodology,
      };
      onSubmit(editedProduct);
    };

    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input type="text" className="form-control" id="productName" defaultValue={productName} onChange={(event) => setProductName(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="productOwnerName" className="form-label">Product Owner</label>
              <input type="text" className="form-control" id="productOwnerName" defaultValue={productOwnerName} onChange={(event) => setProductOwnerName(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="developers" className="form-label">Developers</label>
              <input type="text" className="form-control" id="developers" defaultValue={developers} onChange={(event) => setDevelopers(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="scrumMasterName" className="form-label">Scrum Master</label>
              <input type="text" className="form-control" id="scrumMasterName" defaultValue={scrumMasterName} onChange={(event) => setScrumMasterName(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="startDate" className="form-label">Start Date</label>
              <input type="date" className="form-control" id="startDate" defaultValue={startDate} onChange={(event) => setStartDate(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="methodology" className="form-label">Methodology</label>
                <select className="form-select" id="methodology" defaultValue={methodology} onChange={(event) => setMethodology(event.target.value)}>
                    <option value="Agile">Agile</option>
                    <option value="Waterfall">Waterfall</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Modal.Body>
        </Modal>
    );
}

export default EditProductModal;
