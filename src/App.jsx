import { Routes, Route } from 'react-router';
import './App.css'
import { HomePage } from './pages/homepage/HomePage'
import { CheckOutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';
import { NotFound } from './pages/notfound/NotFound';

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckOutPage />} />
      <Route path='orders' element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App
