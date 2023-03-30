import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function AddProductForm({ setShow, handleProductAdd }) {
    const [productName, setProductName] = useState('');
    const [productOwnerName, setProductOwnerName] = useState('');
    const [developers, setDevelopers] = useState([]);
    const [scrumMasterName, setScrumMasterName] = useState('');
    const [methodology, setMethodology] = useState('');
    const [startDate, setStartDate] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Array of objects to store the input fields and their values
    const inputFields = [
      { label: 'Product Name', value: productName},
      { label: 'Product Owner', value: productOwnerName},
      { label: 'Scrum Master', value: scrumMasterName},
      { label: 'Start Date', value: startDate},
      { label: 'Methodology', value: methodology},
      { label: 'Developers', value: developers}
    ];

    // Function to convert the date format from YYYY-MM-DD to YYYY/MM/DD
    const convertDate = (date) => {
        const formattedDate = date.replaceAll('-', '/')
        return formattedDate;
    };

    // Function to handle the confirm button click
    const handleConfirm = () => {
        const newProduct = {
            productName,
            productOwnerName,
            Developers: developers,
            scrumMasterName,
            startDate: convertDate(startDate),
            methodology
        };
        handleProductAdd(newProduct);
        setShow(false);
    };

    // Function to handle the change in the developer input fields
    const handleDeveloperChange = (index, value) => {
      const newDevelopers = [...developers];
      newDevelopers[index] = value;
      setDevelopers(newDevelopers);
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
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        );
      };


    const handleSubmit = (event) => {
        event.preventDefault();

        // isValid is a boolean that will be used to check if all the form  inputs are valid
        let isValid = true;
        const nameRegex = /^[A-Za-z]+\s+[A-Za-z]+$/; // regular expression for first and last name

        // Loop through the input fields and check if they are valid
        inputFields.forEach(({ label, value }) => {
            const inputElement = document.getElementById(label);

            // Check if the input field is empty or if the developer input field is empty
            if (value === '') {
              inputElement.classList.add('is-invalid');
              isValid = false;

            // Check if the developer input field is empty
            } else if (label === 'Developers' && value.length === 0) {
              inputElement.classList.add('is-invalid');
              isValid = false;

            // Check if product owner, scrum master, and developer names are valid full names
            } else if (
              ['Product Owner', 'Scrum Master', 'Developers'].includes(label) &&
              !nameRegex.test(value.trim())
            ) {
              inputElement.classList.add('is-invalid');
              isValid = false;

            // if the input field is valid, remove the is-invalid class
            } else {
                inputElement.classList.remove('is-invalid');
            }
        });

        // If all the input fields are valid, set the submitted state to true
        if (isValid) {
            setSubmitted(true);
        }
      };

    return (
    <form onSubmit={(event) => event.preventDefault()}>
        <div className="mb-3">
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input type="text" className="form-control" id="Product Name" placeholder="Product Name" onChange={(event) => setProductName(event.target.value)} />
        </div>
        <div className="mb-3">
            <label htmlFor="productOwnerName" className="form-label">Product Owner</label>
            <input type="text" className="form-control" id="Product Owner" placeholder="Product Owner" onChange={(event) => setProductOwnerName(event.target.value)} />
        </div>
        <div className="mb-3">
            <label htmlFor="scrumMasterName" className="form-label">Scrum Master</label>
            <input type="text" className="form-control" id="Scrum Master" placeholder="Scrum Master" onChange={(event) => setScrumMasterName(event.target.value)} />
        </div>
        <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Start Date</label>
            <input type="date" className="form-control" id="Start Date" placeholder="YYYY/MM/DD" min={new Date().toISOString().split('T')[0]} onChange={(event) => setStartDate(event.target.value)} />
        </div>
        <div className="mb-3" >
            <label htmlFor="developers" className="form-label">Developers</label>
            {Array.from({ length: 5 }).map((_, index) => ( // create an array of 5 empty elements to have inputs for up to 5 developers
              <input
                  type="text"
                  placeholder={`Developer ${index + 1}`}
                  className="form-control"
                  id='Developers'
                  defaultValue={developers[index] || ''}
                  onChange={(event) => handleDeveloperChange(index, event.target.value)}
                  />
            ))}
        </div>

        <div className="mb-3">
            <label htmlFor="methodology" className="form-label">Methodology</label>
            <select id='Methodology' className="form-select" aria-label="Default select example" onChange={(event) => setMethodology(event.target.value)}>
                <option selected>Choose...</option>
                <option value="Agile">Agile</option>
                <option value="Waterfall">Waterfall</option>
            </select>
        </div>
        {renderSubmitButtons()}
    </form>
    )
}

export default AddProductForm
