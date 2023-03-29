import React from 'react';
import { Button } from 'react-bootstrap';

function ProductRow({ product, onEdit }) {

    return (
      <tr key={product.productId}>
        {/* <td>{product.productId}</td> */}
        <td>{product.productName}</td>
        <td>{product.productOwnerName}</td>
        <td>{product.Developers.join(', ')}</td>
        <td>{product.scrumMasterName}</td>
        <td>{product.startDate}</td>
        <td>{product.methodology}</td>
        <td>
          <Button variant="primary" onClick={() => onEdit(product)}>Edit</Button>
        </td>
      </tr>
    );
  }

export default ProductRow;
