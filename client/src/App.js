import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import ProductTable from './components/ProductTable/ProductTable';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [products, setProducts] = useState([]);
  const [isProductUpdated, setIsProductUpdated] = useState(false);

  const fetchData = async () => {
    try {
      console.log('Fetching data...');
      const response = await axios.get('http://localhost:8000/api/products');
      console.log(response);
      setProducts(response.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleProductUpdate = async (updatedProduct) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/products/${updatedProduct.productId}`, updatedProduct);
      console.log(response);
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
  
  useEffect(() => {
    fetchData();
  }, [isProductUpdated]);



  return (
    <div className="App">
      <h1>Product List</h1>
      <SearchBar />
      <ProductTable products={products} handleProductUpdate={handleProductUpdate} />
    </div>
  );
}

export default App;
