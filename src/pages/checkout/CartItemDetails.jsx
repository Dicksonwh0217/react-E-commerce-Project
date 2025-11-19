import { formatMoney } from "../../utils/money";
import axios from "axios";
import { useState } from "react";

export function CartItemDetails({ cartItem, loadCart }) {
    const [isUpdating, setisUpdating] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const updateItemQuantity = async () => {
        if(isUpdating){
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                productId: cartItem.productId,
                quantity: quantity
            });
            await loadCart();
        }
        setisUpdating(!isUpdating);
    }

    const updateQuantityNumber = (event) => {
        const quantitySelected = Number(event.target.value);
        setQuantity(quantitySelected);
    }

    const keyDown = (event) => {
        if(event.key === 'Enter'){
            updateItemQuantity();
        }
        if(event.key === 'Escape'){
            setQuantity(cartItem.quantity);
            setisUpdating(!isUpdating);
        }
    }

    return (
        <div className="cart-item-details">
            <div className="product-name">
                {cartItem.product.name}
            </div>
            <div className="product-price">
                {formatMoney(cartItem.product.priceCents)}
            </div>
            <div className="product-quantity">
                <span>
                    Quantity: <span className="quantity-label">
                        {isUpdating ? <input type="text" className="quantity-text" value={quantity} onChange={updateQuantityNumber} onKeyDown={keyDown}/> : <>{cartItem.quantity}</>}
                    </span>
                </span>
                <span className="update-quantity-link link-primary" onClick={updateItemQuantity}>
                    Update
                </span>
                <span className="delete-quantity-link link-primary"
                    onClick={deleteCartItem}>
                    Delete
                </span>
            </div>
        </div>
    );
}