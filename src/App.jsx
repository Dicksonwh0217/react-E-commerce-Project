import { Routes, Route } from 'react-router';
import './App.css'
import { HomePage } from './pages/HomePage'
import { CheckOutPage } from './pages/CheckoutPage';

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckOutPage />} />
      <Route path='orders' element={<>orders</>} />
      <Route path='tracking' element={<>tracking</>} />
    </Routes>
  );
}

export default App
