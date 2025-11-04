import { Routes, Route } from 'react-router';
import './App.css'
import { HomePage } from './pages/HomePage'
import { CheckOutPage } from './pages/CheckoutPage';

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckOutPage />} />
    </Routes>
  );
}

export default App
