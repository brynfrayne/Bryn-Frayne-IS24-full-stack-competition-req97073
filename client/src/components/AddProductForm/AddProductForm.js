import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function AddProductForm({ setShow, handleProductAdd }) {
    const [productName, setProductName] = useState('');
    const [productOwnerName, setProductOwnerName] = useState('');
    const [developers, setDevelopers] = useState([]);
    const [scrumMasterName, setScrumMasterName] = useState('');
    const [methodology, setMethodology] = useState('');
    const [startDate, setStartDate] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const convertDate = (date) => {
        const formattedDate = date.replaceAll('-', '/')
        return formattedDate;
    };

    const handleConfirm = () => {
        const newProduct = {
            productName,
            productOwnerName,
            Developers: developers,
            scrumMasterName,
            startDate: convertDate(startDate),
            methodology
        };
        console.log(newProduct);
        handleProductAdd(newProduct);
        setShow(false);
    };

    const productColumns = [
        { label: 'Product Name', value: productName, setState: setProductName, type: 'text', placeholder: 'Product name' },
        { label: 'Product Owner', value: productOwnerName, setState: setProductOwnerName, type: 'text', placeholder: 'Product Owner' },
        { label: 'Scrum Master', value: scrumMasterName, setState: setScrumMasterName, type: 'text', placeholder: 'Scrum Master' },
        { label: 'Start Date', value: startDate, setState: setStartDate, type: 'date', placeholder: 'YYYY/MM/DD' }
      ];

      const handleDeveloperChange = (index, value) => {
        const newDevelopers = [...developers];
        newDevelopers[index] = value;
        setDevelopers(newDevelopers);
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
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        );
      };
    const inputFields = [
        ...productColumns,
        { label: 'Methodology', value: methodology, setState: setMethodology, type: 'radio', placeholder: 'Choose a methodology' },
        { label: 'Developers', value: developers, setState: setDevelopers, type: 'text' },
    ];

    const inputs = inputFields.reduce((acc, { label, value }) => {
        acc[label] = value;
        return acc;
    }, {});

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        Object.entries(inputs).forEach(([key, value]) => {
            const inputElement = document.getElementById(key);
            if (value === '') {
                inputElement.classList.add('is-invalid');
                isValid = false;
            } else if (key === 'Developers' && value.length === 0) {
                inputElement.classList.add('is-invalid');
                isValid = false;
            } else {
                inputElement.classList.remove('is-invalid');
            }
        });
        if (isValid) {
            setSubmitted(true);
        }
      };

    return (
    <form onSubmit={(event) => event.preventDefault()}>
        {productColumns.map((column) => (
            <div className="mb-3" key={column.label}>
                <label htmlFor={column.value} className="form-label">{column.label}</label>
                <input
                    type={column.type}
                    placeholder={column.placeholder}
                    className="form-control"
                    id={column.label}
                    defaultValue={column.value}
                    onChange={(event) => column.setState(event.target.value)}
                    />
            </div>
        ))}
        <div className="mb-3" >
            <label htmlFor="developers" className="form-label">Developers</label>
            {Array.from({ length: 5 }).map((_, index) => (

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
