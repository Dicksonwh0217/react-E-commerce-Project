import { CheckoutHeader } from './CheckoutHeader';
import axios from 'axios'
import { useState, useEffect } from 'react';
import './CheckoutPage.css';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckOutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setpaymentSummary] = useState([]);

    useEffect(() => {
        const fetchCheckoutData = async () => {
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data);

            response = await axios.get('/api/payment-summary')
            setpaymentSummary(response.data);
        }

        fetchCheckoutData();
    }, [])

    return (
        <div>
            <link rel="icon" type="image" href="checkout.png" />
            <title>Checkout</title>

            <CheckoutHeader paymentSummary={paymentSummary} />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </div>
    );
}