import './HomePage.css';
import { Header } from '../../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart, loadCart }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      window.axios = axios;
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };

    getHomeData();
  }, []);


  return (
    <div>
      <link rel="icon" type="image" href="house.png" />
      <title>Home Page</title>

      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </div>
  );
}