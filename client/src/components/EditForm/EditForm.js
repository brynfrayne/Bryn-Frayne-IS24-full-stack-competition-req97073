import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function EditForm({ product, setShow, handleProductUpdate }) {
  const [productName, setProductName] = useState(product.productName);
  const [productOwnerName, setProductOwnerName] = useState(product.productOwnerName);
  const [developers, setDevelopers] = useState(product.Developers);
  const [scrumMasterName, setScrumMasterName] = useState(product.scrumMasterName);
  const [methodology, setMethodology] = useState(product.methodology);
  const [submitted, setSubmitted] = useState(false);

  // Function to handle the confirm button click
  const handleConfirm = () => {
    const editedProduct = {
        ...product,
        productName,
        productOwnerName,
        Developers: developers,
        scrumMasterName,
        methodology,
      };
    handleProductUpdate(editedProduct);
    setShow(false);
    };

  // Function to conditionally render the submit and confirm buttons
    const renderSubmitButtons = () => {
    if (submitted) {
      // If the submit button has been clicked, render the confirm and cancel buttons
      return (
        <div className="mb-3 d-flex justify-content-evenly">
          <Button variant="success" onClick={handleConfirm}>
            Confirm Changes
          </Button>
          <Button variant="danger" onClick={() => setShow(false)}>
            Cancel Changes
          </Button>
        </div>
      );
    }
    return (
      // If the submit button has not been clicked, render the submit button
      <Button variant="primary" type="submit" onClick={() => setSubmitted(true)}>
        Submit
      </Button>
    );
  };

  // Function to handle the change in the developer input fields
  const handleDeveloperChange = (index, value) => {
    const newDevelopers = [...developers];
    newDevelopers[index] = value;
    setDevelopers(newDevelopers);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">Product Name</label>
        <input type="text" className="form-control" id="productName" defaultValue={productName} onChange={(event) => setProductName(event.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="productOwnerName" className="form-label">Product Owner</label>
        <input type="text" className="form-control" id="productOwnerName" defaultValue={productOwnerName} onChange={(event) => setProductOwnerName(event.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="scrumMasterName" className="form-label">Scrum Master</label>
        <input type="text" className="form-control" id="scrumMasterName" defaultValue={scrumMasterName} onChange={(event) => setScrumMasterName(event.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="developers" className="form-label">Developers</label>
        {developers.map((developer, index) => (
          <input key={index} type="text" className="form-control" defaultValue={developer} onChange={(event) => handleDeveloperChange(index, event.target.value)} />
        ))}
      </div>
      <div className="mb-3">
        <label htmlFor="methodology" className="form-label">Methodology</label>
        <select className="form-select" id="methodology" defaultValue={methodology} onChange={(event) => setMethodology(event.target.value)}>
          <option value="Agile">Agile</option>
          <option value="Waterfall">Waterfall</option>
        </select>
      </div>
      {renderSubmitButtons()}
    </form>
  )
}

export default EditForm;
