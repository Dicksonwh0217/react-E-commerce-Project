import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import { HomePage } from './pages/homepage/HomePage'
import { CheckOutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';
import { NotFound } from './pages/notfound/NotFound';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data);
      })
  }, [])


  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckOutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App
