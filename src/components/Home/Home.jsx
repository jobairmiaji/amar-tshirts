import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import { toast } from "react-hot-toast";

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tShirt) => {
        const exists = cart.find((ts) => ts._id === tShirt._id);
        if (exists) {
            toast("Already added!!!");
        } else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }

        // console.log(tShirt);
    };

    const handleRemoveFromCart = (id) => {
        // console.log(id);
        const remaining = cart.filter((tShirt) => tShirt._id !== id);
        setCart(remaining);
    };

    // console.log(tShirts);
    return (
        <div className="container">
            <div className="tshirts-container">
                {tShirts.map((tShirt) => (
                    <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>
                ))}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;
