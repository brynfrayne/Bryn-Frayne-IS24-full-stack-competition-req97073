import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function EditForm({ product, setShow }) {
  const [productName, setProductName] = useState(product.productName);
  const [productOwnerName, setProductOwnerName] = useState(product.productOwnerName);
  const [developers, setDevelopers] = useState(product.Developers);
  const [scrumMasterName, setScrumMasterName] = useState(product.scrumMasterName);
  const [methodology, setMethodology] = useState(product.methodology);
  const [submitted, setSubmitted] = useState(false);


  const handleConfirm = () => {
    const editedProduct = {
        ...product,
        productName,
        productOwnerName,
        Developers: developers,
        scrumMasterName,
        methodology,
      };
    setSubmitted(false);

    axios.put(`http://localhost:8000/api/products/${product.productId}`, editedProduct)
        .then((response) => {
            console.log(response);
            }
        )
        .catch((error) => {
            console.log(error);
        }
    );
    setShow(false);
    };

  const renderSubmitButtons = () => {
    if (submitted) {
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
      <Button variant="primary" type="submit" onClick={() => setSubmitted(true)}>
        Submit
      </Button>
    );
  };

  const handleDeveloperChange = (index, value) => {
    const newDevelopers = [...developers];
    newDevelopers[index] = value;
    setDevelopers(newDevelopers);
  };

  const productColumns = [
    { label: 'Product Name', value: productName, setState: setProductName },
    { label: 'Product Owner', value: productOwnerName, setState: setProductOwnerName },
    { label: 'Scrum Master', value: scrumMasterName, setState: setScrumMasterName },
  ];

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {productColumns.map((column) => (
        <div className="mb-3" key={column.label}>
          <label htmlFor={column.value} className="form-label">{column.label}</label>
          <input type="text" className="form-control" id={column.value} defaultValue={column.value} onChange={(event) => column.setState(event.target.value)} />
        </div>
      ))}

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
