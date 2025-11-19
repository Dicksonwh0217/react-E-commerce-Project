import axios from 'axios';
import './OrdersPage.css';
import { Header } from '../../components/Header';
import { useEffect, useState } from 'react';
import { OrdersGrid } from './OrdersGrid';

export function OrdersPage({ cart,loadCart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async() => {
            const response = await axios.get('/api/orders?expand=products');
            setOrders(response.data);
        }

        getOrders();
    }, [])
    return (
        <div>
            <link rel="icon" type="image" href="order.png" />
            <title>Orders</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} loadCart={loadCart}/>
            </div>
        </div>
    );
}