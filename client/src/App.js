import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import ProductTable from './components/ProductTable/ProductTable';
import SearchBar from './components/SearchBar/SearchBar';
import AddProductModal from './components/AddProductModal/AddProductModal';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [products, setProducts] = useState([]);
  const [isProductUpdated, setIsProductUpdated] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const handleClick = () => setShowAddModal(true);
  const handleClose = () => setShowAddModal(false);

  // get request to fetch all products
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/products');
      setProducts(response.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  // put request to update a product
  const handleProductUpdate = async (updatedProduct) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/products/${updatedProduct.productId}`, updatedProduct);
      if (response.status === 200) {
        console.log('Product updated successfully');
        setTimeout(() => {
          setIsProductUpdated(!isProductUpdated);
        }, 1000);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // post request to add a new product
  const handleProductAdd = async (productToAdd) => {
    try {
      const response = await axios.post('http://localhost:8000/api/products', productToAdd);
      if (response.status === 201) {
        console.log('Product added successfully');

        // timer was implemented as the fetched data was not returning the newly updated data immediately
        setTimeout(() => {
          setIsProductUpdated(!isProductUpdated);
        }, 1000);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // get request to search for a specific developer or scrum master and the list of products they are associated with
  const handleProductSearch = async (name, role) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/search?name=${name}&role=${role}`);
      setProducts(response.data);
    }
    catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, [isProductUpdated]);

  return (
    <>
    <div className="App">
      <h1>Product List</h1>
      <SearchBar handleProductSearch={handleProductSearch} />
      <Button variant="primary" onClick={handleClick} className="mb-3">
        Add Product
      </Button>
      <ProductTable products={products} handleProductUpdate={handleProductUpdate} />
    </div>

    {showAddModal ? (
      <AddProductModal
        show={showAddModal}
        setShow={setShowAddModal}
        handleClose={handleClose}
        handleProductAdd={handleProductAdd}
      />
    ) : null}
    </>
  );
}

export default App;
