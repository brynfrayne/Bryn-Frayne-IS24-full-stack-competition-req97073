import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import ProductTable from './components/ProductTable/ProductTable';
import SearchBar from './components/SearchBar/SearchBar';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div className="App">
      <h1>Product List</h1>
        <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default App;
