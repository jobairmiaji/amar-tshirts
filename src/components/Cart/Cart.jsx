import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    // console.log(object);
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products.</p>;
    } else {
        message = (
            <div>
                <h3>Thanks for wasting your money.</h3>
            </div>
        );
    }
    return (
        <div>
            <h2 className={cart.length > 3 ? "yellow" : ""}>Order Summary</h2>
            {cart.length > 2 ? (
                <span className="green">Aro kino</span>
            ) : (
                <span>fokira</span>
            )}
            {message}
            <p>Total T-Shirt: {cart.length}</p>
            {cart.map((tshirt) => (
                <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>
                        x
                    </button>
                </p>
            ))}
            {/* {cart.length === 2 && <p>Double bonanza!!!</p>} */}
            {cart.length === 3 || <h3>thinta to hoilo na.</h3>}
        </div>
    );
};

export default Cart;

/**
 * Conditional rendering
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary : condition ? "for true": "false"
 * 3. Logical && (if the condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false then the next thing will be displayed)
 */

/**
 * Conditional CSS class
 * 1. Use ternary
 * 2. ternary inside template string
 */
