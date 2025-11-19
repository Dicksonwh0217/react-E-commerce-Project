import './HomePage.css';
import { Header } from '../../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid';
import { useSearchParams } from 'react-router';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      window.axios = axios;
      // if (search) {
      //   const response = await axios.get(`/api/products?search=${search}`);
      //   setProducts(response.data);
      // } else {
      //   const response = await axios.get('/api/products');
      //   setProducts(response.data);
      // }

      const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };

    getHomeData();
  }, [search]);


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