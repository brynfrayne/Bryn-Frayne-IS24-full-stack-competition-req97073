import { Table } from 'react-bootstrap';
import { useState } from 'react';
import ProductRow from '../ProductRow/ProductRow';
import EditProductModal from '../EditProductModal/EditProductModal';

function ProductTable({ products }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClose = () => setShowEditModal(false);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };


  const handleEdit = (event) => {
    event.preventDefault();
    // handle form submit here
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>Product ID</th> */}
            <th>Product Name</th>
            <th>Product Owner</th>
            <th>Developers</th>
            <th>Scrum Master</th>
            <th>Start Date</th>
            <th>Methodology</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
                  key={product.productId}
                  product={product}
                  onEdit={handleShow}
                  />
          ))}
        </tbody>
      </Table>

      {selectedProduct ? (
      <EditProductModal
        show={showEditModal}
        onHide={handleClose}
        product={selectedProduct}
        onSubmit={handleEdit}
      />
      ) : null}
    </>
  );
}

export default ProductTable;
