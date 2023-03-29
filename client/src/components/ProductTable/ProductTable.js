import { Table } from 'react-bootstrap';

function ProductTable({ products }) {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Owner</th>
          <th>Developers</th>
          <th>Scrum Master</th>
          <th>Start Date</th>
          <th>Methodology</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.productId}>
            <td>{product.productId}</td>
            <td>{product.productName}</td>
            <td>{product.productOwnerName}</td>
            <td>{product.Developers.join(', ')}</td>
            <td>{product.scrumMasterName}</td>
            <td>{product.startDate}</td>
            <td>{product.methodology}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductTable;
